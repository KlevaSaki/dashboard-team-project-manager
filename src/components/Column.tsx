import type { Task } from "../types/models"
import TaskCard from "./TaskCard"


type Props = {
    title: string
    tasks: Task[]
}

export default function Column({ title, tasks}: Props) {
    return (
        <div className="bg-gray-100 rounded p-4 w-64 flex flex-col gap-3">
            <h2 className="font-semibold">{title}</h2>

            {tasks.map(task => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    )
}