import { RootState } from "../store";
import { ReduxController, ReduxControllerBase, ReduxAsyncAction, CommitFunction, ReduxAction, AutoUnsubscribe, ReduxEffect, ReduxWatch, ProvidedState, CachedState, Provider, ProvideKey } from "redux-controllers";


export interface TodosState {
    todos: CachedState<string[]>,
    todoMap: {
        [key: string]: CachedState<Todo>
    },
}

export interface Todo {
    id: string,
    text: string,
    isCompleted: boolean
};



@ReduxController((rootState: RootState) => rootState.todosState)
export class TodosController extends ReduxControllerBase<TodosState, RootState> {

    defaultState = {
        todos: ProvidedState([]),
        todoMap: {},
    }

    providers = {
        state: {
            todos: Provider(async () => {
                await new Promise((res, rej) => {
                    setTimeout(() => {
                        res();
                    }, 2000);
                });
                return ['Todo 1', 'Todo 2', 'Todo 3'];
            }, 2000),
            todoMap: ProvideKey(async (key) => {
                await new Promise((res, rej) => {
                    setTimeout(() => {
                        res();
                    }, 2000);
                });
                return {
                    id: key,
                    text: key + "Todo 1",
                    isCompleted: false
                };
            }),
        },
        cacheTimeout: 1 * 60 * 60 * 1000 // 1 Hour
    }

}
