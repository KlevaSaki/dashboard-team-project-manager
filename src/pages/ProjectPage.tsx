import { useState } from "react";
import Column from "../components/Column";
import { useTasks } from "../hooks/useTasks"

type Props = {
    projectId: string
}

export default function ProjectPage({ projectId }: Props){
    const [ title, setTitle ] = useState("");

    const { tasks, createTask } = useTasks(projectId);

    function handleCreate() {
        if(!title.trim()) return;

        createTask(title);
        setTitle("");
    }

    const backlog = tasks.filter((t) => t.status === "backlog");
    const todo = tasks.filter(t => t.status === "todo");
    const progress = tasks.filter(t => t.status === "in-progress");
    const review = tasks.filter(t => t.status === "review");
    const done = tasks.filter(t => t.status === "done");

    return (
        <div className="space-y-4">
            <div className="p-4 flex gap-2">
                <input type="text"
                placeholder="New task..."
                value={title}
                onChange={e => setTitle(e.target.value)} />

                <button className="bg-blue-500 text-white px-4" onClick={handleCreate}>Add Task</button>
            </div>



            <div className="flex gap-4 overflow-x-auto p-4">
                <Column title="Backlog" tasks={backlog}/>
                <Column title="Todo" tasks={todo} />
                <Column title="In Progress" tasks={progress} />
                <Column title="Review" tasks={review} />
                <Column title="Done" tasks={done} />
            </div>
        </div>
    )
}