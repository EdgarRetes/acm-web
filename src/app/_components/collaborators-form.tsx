import { useState } from "react";
import { api } from "~/trpc/react";

export default function CollaboratorRequestsForm() {
    
    const [name, setName] = useState("");
    const [career, setCareer] = useState("");
    const [semester, setSemester] = useState("");
    const [photoUrl, setPhoto] = useState("");
    

    const createCollaboratorRequestMutation = api.collaboratorRequest.createCollaboratorRequest.useMutation()

    function create_collaboratorRequest() {
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
        <form onSubmit={(e) => {
            create_collaboratorRequest();
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
                
                <div className="flex items-center justify-center w-full py-6">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG or JPG (MAX. 115x115px)</p>
                        </div>
                        <input 
                            id="dropzone-file" 
                            type="file" 
                            onChange={e => setPhoto(e.target.value)}
                            className="hidden" 
                            required
                        />
                    </label>
                </div> 

                <button type="submit" className="btn-class bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Registrarse como colaborador
                </button>
            </div>
        </form>
    );
}
