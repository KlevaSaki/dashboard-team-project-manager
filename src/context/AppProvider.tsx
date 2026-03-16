import { createContext, useEffect, useReducer, type PropsWithChildren } from "react"
import type { Action } from "../types/actions"
import type { AppState } from "../types/state"
import { appReducer } from "../reducers/appReducer"


type ContextType = {
    state: AppState
    dispatch: React.Dispatch<Action>
}

export const AppContext = createContext<ContextType | null>(null)

const initialState: AppState = {
    projects: {},
    tasks: {},
    comments: {},
    users: {},

    projectTasks: {},
    taskComments: {},

    activity: []
}

export const AppProvider = ({children}: PropsWithChildren) => {

    const [ state, dispatch ] = useReducer(appReducer, initialState);

    useEffect(() => {
        localStorage.setItem("app-state", JSON.stringify(state))
    }, [state]);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            { children}
        </AppContext.Provider>
    )
}