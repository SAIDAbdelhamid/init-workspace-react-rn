import React, { createContext } from 'react';
import {store} from './store/store';
import {
    setFilterAction
} from './actions/filterActions';
import {
    toggleTodoAction,
    deleteTodoAction,
    addTodoAction
} from './actions/todosActions';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
    let appStore = {
        app:{
            test:"hi",
            toggleTodoAction:toggleTodoAction,
            deleteTodoAction:deleteTodoAction,
            addTodoAction:addTodoAction,
            setFilterAction:setFilterAction
        }
    }
    return (
        <AppContext.Provider value={appStore}>
            {children}
        </AppContext.Provider>
    )
}

export {
    AppContext,
    AppProvider,
    store
}