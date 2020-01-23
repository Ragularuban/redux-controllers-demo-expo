import { CounterState, CounterController } from "./counter/counter.controller";
import { Reducer, combineReducers } from "redux";
import { ReduxControllerRegistry } from "redux-controllers";
import { AsyncStorage } from "react-native"
import { TodosState, TodosController } from "./todos/todos.controller";


export interface RootState {
    counterState: CounterState,
    todosState: TodosState
}

export function initStore() {
    ReduxControllerRegistry.init([
        CounterController,
        TodosController
    ], {
        environment: 'REACT_NATIVE',
        persistance: {
            active: true,
            throttle: 200,
            asyncStorageRef: AsyncStorage
        }
    });
    ReduxControllerRegistry.load();

}