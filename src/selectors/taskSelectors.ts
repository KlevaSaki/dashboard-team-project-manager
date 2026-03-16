import type { ID } from "../types/models";
import type { AppState } from "../types/state";


export function selectTasksForProject( state: AppState, projectId: ID){

    const taskIds = state.projectTasks[projectId] || [];

    return taskIds.map(id => state.tasks[id]).filter(Boolean)
}

export function selectCommentsForTask( state: AppState, taskId: ID) {

    const commentIds = state.taskComments[taskId] || [];

    return commentIds.map(id => state.comments[id]).filter(Boolean)
}