//Normalized State Structure

import type { Activity, Comment, ID, Project, Task, User } from "./models"

export type AppState = {
    projects: Record<ID, Project>
    tasks: Record<ID, Task>
    comments: Record<ID, Comment>
    users: Record<ID, User>

    projectTasks: Record<ID, ID[]>
    taskComments: Record<ID, ID[]>

    activity: Activity[];
}