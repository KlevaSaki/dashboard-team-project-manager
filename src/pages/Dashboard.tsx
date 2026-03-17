import { useState } from "react";
import { useProjects } from "../hooks/useProjects";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const { projects, createProject } = useProjects();

    const [ name, setName ] = useState("");

    const handleCreate = () => {
        if(!name) return;
        createProject(name);
        setName("");
    }

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Projects</h1>

            <div className="flex gap-2">
                <input type="text"
                className="border p-2"
                value={name}
                onChange={e => setName(e.target.value)} />

                <button className="bg-blue-500 text-white px-4"
                onClick={handleCreate}>Create</button>
            </div>

            <div className="grid gap-4 ">
                {projects.map(p => (
                    <Link key={p.id} to={`/project/${p.id}`} className="border p-4 hover:bg-gray-100">
                        {p.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}