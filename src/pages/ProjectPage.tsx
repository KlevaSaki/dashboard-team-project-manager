import Column from "../components/Column";
import { useTasks } from "../hooks/useTasks"

type Props = {
    projectId: string
}

export default function ProjectPage({ projectId }: Props){
    const { tasks } = useTasks(projectId);

    const backlog = tasks.filter((t) => t.status === "backlog");
    const todo = tasks.filter(t => t.status === "todo");
    const progress = tasks.filter(t => t.status === "in-progress");
    const review = tasks.filter(t => t.status === "review");
    const done = tasks.filter(t => t.status === "done");

    return (
        <div className="flex gap-4 overflow-x-auto p-4">
            <Column title="Backlog" tasks={backlog}/>
            <Column title="Todo" tasks={todo} />
            <Column title="In Progress" tasks={progress} />
            <Column title="Review" tasks={review} />
            <Column title="Done" tasks={done} />
        </div>
    )
}