export type ID = string;

export type Project = {
    id: ID;
    name: string;
    createdAt: number;
}

export type TaskStatus = 
    | "backlog"
    | "todo"
    | "in-progress"
    | "done"

export type Task = {
    id: ID;
    projectId: ID;
    title: string;
    description?: string;
    status: TaskStatus;
    assigneeId?: ID;
    createdAt: number
}

export type User = {
    id: ID;
    name: string;
}

export type Comment = {
    id: ID;
    taskId: ID;
    authorId: ID;
    content: string;
    createdAt: number;
}