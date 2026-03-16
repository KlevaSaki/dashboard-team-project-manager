import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export function useProjects() {
    const ctx = useContext(AppContext)

    if(!ctx) throw new Error("Context not found");

    const { state, dispatch } = ctx;

    return {
        projects: Object.values(state.projects),

        createProject(name: string) {
            dispatch( { type: "CREATE_PROJECT", name} )
        }
    }
}