import { FormEvent, useState } from "react";
import { api } from "~/trpc/react";
import { UploadDropzone } from "~/utils/uploadthing";
import { useCollaborator } from "./Hooks/isCollaborator";
import { useAdmin } from "./Hooks/isAdmin";
import { useRegistration } from "./Hooks/useRegistration";

export default function CollaboratorRequestsForm() {
    const { isCollaborator, userEmail } = useCollaborator();
    const hasRegistration  = useRegistration(userEmail);
    console.log(hasRegistration?.data)
    const { isAdmin } = useAdmin();
    
    const [name, setName] = useState("");
    const [career, setCareer] = useState("");
    const [semester, setSemester] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    

    const createCollaboratorRequestMutation = api.collaboratorRequest.createCollaboratorRequest.useMutation()

    function create_collaboratorRequest(e: FormEvent<HTMLFormElement>) {
        if (isCollaborator || hasRegistration?.data ){ 
            alert(`Este usuario ya está registrado como colaborador ${hasRegistration?.data}`);
            return;
        }
        else if(isAdmin){
            alert("Este usuario ya está registrado como administrador");
            return;

        }

        if (!photoUrl) {
            e.preventDefault()
            alert("Debes subir una imagen antes de registrarte como colaborador.");
            return;
        }
        
        createCollaboratorRequestMutation.mutate({
            name,
            career,
            semester,
            photoUrl,
        }, {
            onError(error, variables, context) {
                alert(`Ingresa con una cuenta de Google para registrarte`)
                console.log({
                    error
                })
            },
            onSuccess(data, variables, context) {
                alert(`Solicitud para colaborador "${data.name}" creada`)
            },
        }
        )
        console.log({
            name,career,semester 
        })
        
    }

    return (
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => {
            create_collaboratorRequest(e);
        }} 
        className="p-4 space-y-4 max-w-xl mx-auto bg-white rounded-lg shadow-md"
        >
            <div className="bg-white font-mono shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="-mx-3 md:flex mb-6">
                    <h1>
                        Formulario de colaborador
                    </h1>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <input className="input-class appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
                        type="text"
                        name="name"
                        id="name"
                        onChange={e => setName(e.target.value)}
                        placeholder="Nombre"
                        required
                    />
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <input className="input-class appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                        type="text"
                        name="carreer"
                        id="career"
                        onChange={e => setCareer(e.target.value)}
                        placeholder="Carrera"
                        required
                    />
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <select 
                        id="semester"
                        name="semester"
                        onChange={e => setSemester(e.target.value)}
                        className="input-class appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        required
                    >
                        <option value="" disabled selected>Selecciona un semestre</option>
                        <option value="1">1° Semestre</option>
                        <option value="2">2° Semestre</option>
                        <option value="3">3° Semestre</option>
                        <option value="4">4° Semestre</option>
                        <option value="5">5° Semestre</option>
                        <option value="6">6° Semestre</option>
                        <option value="7">7° Semestre</option>
                        <option value="8">8° Semestre</option>
                        <option value="9">9° Semestre</option>
                        <option value="10">10° Semestre</option>
                    </select>
                </div>
                <h3 className="text-left text-zinc-500">Imagen del colaborador</h3>
                <UploadDropzone
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                        if (res && res[0] && res[0].url) {
                            setPhotoUrl(res[0].url);
                            console.log("Files: ", res);
                            alert("Upload Photo Completed");
                        }
                    }}
                    onUploadError={(error: Error) => {
                        alert(`ERROR! ${error.message}`);
                    }}
                />
                
                <button type="submit" className="btn-class bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Registrarse como colaborador
                </button>
            </div>
        </form>
    );
}
