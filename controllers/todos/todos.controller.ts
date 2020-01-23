import { RootState } from "../store";
import { ReduxController, ReduxControllerBase, ReduxAsyncAction, CommitFunction, ReduxAction, AutoUnsubscribe, ReduxEffect, ReduxWatch, ProvidedState, CachedState, Provider } from "redux-controllers";


export interface TodosState {
    todos: CachedState<string[]>,
}

@ReduxController((rootState: RootState) => rootState.todosState)
export class TodosController extends ReduxControllerBase<TodosState, RootState> {

    defaultState = {
        todos: ProvidedState([]),
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
        },
        cacheTimeout: 1 * 60 * 60 * 1000 // 1 Hour
    }

}
