import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import type { ID, TaskStatus } from "../types/models";


export function useTasks(projectId: ID) {
    const ctx = useContext(AppContext)

    if(!ctx) throw new Error("Context missing");

    const { state, dispatch } = ctx;

    const tasks = state.projectTasks[projectId]?.map(id => 
        state.tasks[id] || []
    )

    function createTask(title: string) {
        dispatch({ type: "CREATE_TASK", projectId, title})
    }

    function moveTask(taskId: ID, status: TaskStatus) {
        dispatch({ type: "MOVE_TASK", taskId, status})
    }

    return { tasks, createTask, moveTask}
}