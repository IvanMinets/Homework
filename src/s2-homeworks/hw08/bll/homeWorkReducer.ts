import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            return [...state].sort((a,b) => a.age-b.age)
            // need to fix
        }
        case 'check': {
            return [...state].filter(obj => obj.age > 18) // need to fix
        }
        default:
            return state
    }
}
