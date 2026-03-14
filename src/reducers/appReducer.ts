import { v4 as uuid } from "uuid"
import type { Action } from "../types/actions";
import type { AppState } from "../types/state";


export function appReducer(state: AppState, action: Action): AppState{

    switch (action.type) {

        case "CREATE_PROJECT":
            const id = uuid()

            return {
                ...state, 
                projects: {
                    ...state.projects,
                    [id]: {
                        id,
                        name: action.name,
                        createdAt: Date.now()
                    }
                },

                projectTasks: {
                    ...state.projectTasks,
                    [id]: []
                }
            }

        case "CREATE_TASK": {
            const id = uuid();

            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [id]: {
                        id,
                        projectId: action.projectId,
                        title: action.title,
                        status: "todo",
                        createdAt: Date.now()
                    }
                },

                projectTasks: {
                    ...state.projectTasks,
                    [action.projectId]: [
                        ...(state.projectTasks[action.projectId] || []),
                        id
                    ] 
                }
            }
        }

        case "MOVE_TASK":
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.taskId]: {
                        ...state.tasks[action.taskId],
                        status: action.status
                    }
                }
            }

        case "ADD_COMMENT": {
            const id = uuid();

            return {
                ...state,
                comments: {
                    ...state.comments,
                    [id]: {
                        id,
                        taskId: action.taskId,
                        authorId: "user1",
                        content: action.content,
                        createdAt: Date.now()
                    }
                },

                taskComments: {
                    ...state.taskComments,
                    [action.taskId]: [
                        ...(state.taskComments[action.taskId] || []),
                        id
                    ]
                }
            }
        }
            
        default:
            return state
    }
}