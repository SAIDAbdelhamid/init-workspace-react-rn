//Required import for reselect
//import { createSelector } from "reselect"
//import { todosSelector } from "./todosSelectors"

//Selector
export const filterSelector = ({filter}) => filter

//Selector filtredTodo with reselect
/*
export const filtredTodoSelector = createSelector(
    todosSelector,
    filterSelector,
    (todos,filter)=>{
        if (filter === null) {
            return todos
        }
        return todos.filter(todo => todo.completed === filter)
    }
)
*/

//Selector filtredTodo without reselect
export const filtredTodoSelector = ({todos, filter})=>{
    if (filter === null) {
        return todos
    }

    return todos.filter(todo => todo.completed === filter)
}
