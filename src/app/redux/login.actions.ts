import { createAction, props } from '@ngrx/store' 

export const is_login = createAction('islogin', 
                        props<{login: Boolean}>() );

export const not_login = createAction('notlogin',
                         props<{login: Boolean}>() );