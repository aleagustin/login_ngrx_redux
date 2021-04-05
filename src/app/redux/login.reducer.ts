import { createReducer, on } from '@ngrx/store' 
import * as states from './login.actions'

export const initial = false

const _loginReducer = createReducer(

    initial, 
    on(states.is_login, state => true),
    on(states.not_login, state => false),

)


export function loginReducer(state, action) {
    return _loginReducer(state, action)
}