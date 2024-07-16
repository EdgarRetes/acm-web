import { create } from "domain";
import { NextPage } from "next";
import { useState } from "react";
import { api } from "~/trpc/react";

export default function CollaboratorsForm() {
    
    const [name, setName] = useState("");
    const [career, setCareer] = useState("");
    const [semester, setSemester] = useState("");

    const createCollaboratorMutation = api.collaborator.createCollaborator.useMutation()

    function create_collaborator() {
        createCollaboratorMutation.mutate({
            name,
            career,
            semester,
        }, {
            onError(error, variables, context) {
                console.log({
                    error
                 })
            },
            onSuccess(data, variables, context) {
                alert(`Todo ${data.name} created`)
            },
        }
        )
        console.log({
           name,career,semester 
        })
    }


    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            create_collaborator();
        }} 
        className="space-y-4"
        >
            <input
                type="text"
                name="name"
                id="name"
                onChange={e => setName(e.target.value)}
                placeholder="Nombre"
                className="input-class"
                required
            />
            <input
                type="text"
                name="carreer"
                id="career"
                onChange={e => setCareer(e.target.value)}
                placeholder="Carrera"
                className="input-class"
                required
            />
            <input
                type="text"
                name="semester"
                id="semester"
                onChange={e => setSemester(e.target.value)}
                placeholder="Semestre"
                className="input-class"
                required
            />
            <button type="submit" className="btn-class">
                Agregar Colaborador
            </button>
        </form>
    );
}
