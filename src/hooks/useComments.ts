import { useContext } from "react";
import type { ID } from "../types/models";
import { AppContext } from "../context/AppProvider";
import { selectCommentsForTask } from "../selectors/taskSelectors";


export function useComments(taskId: ID) {
    const ctx = useContext(AppContext);

    if(!ctx) throw new Error("Missing provider");

    const { state, dispatch } = ctx;

    const comments = selectCommentsForTask(state, taskId)

    function addComment(content: string) {
        dispatch({
            type: "ADD_COMMENT",
            taskId,
            content
        })
    }

    return { comments, addComment}
}