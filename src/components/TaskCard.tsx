import type { Task } from "../types/models"

type Props = {
    task: Task
}

export default function TaskCard({ task }: Props) {
    return (
        <div className="bg-white rounded shadow p-3 border-l-4 border-blue-500">
            <h3 className="font-medium">{task.title}</h3>

            <p className="text-xs text-gray-500">
                Status: {task.status}
            </p>
        </div>
    )
}