import type { ID, TaskStatus } from "./models";


export type Action = 
    | { type: "CREATE_PROJECT", name: string}
    | { type: "CREATE_TASK", projectId: ID, title: string }
    | { type: "MOVE_TASK", taskId: ID, status: TaskStatus}
    | { type: "ADD_COMMENT", taskId: ID, content: string }