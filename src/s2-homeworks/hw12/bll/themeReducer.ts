export type ActionType = {
    type: 'SET_THEME_ID',
    id: number
}

export type themeReducerType = {
    themeId: number
}

const initState: themeReducerType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): any => {// fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            let newState = {...state}
            newState.themeId = Number(action.id)
            return newState
        default:
            return state
    }
}

export const changeThemeId = (id: any): ActionType => ({ type: 'SET_THEME_ID', id }as const) // fix any
