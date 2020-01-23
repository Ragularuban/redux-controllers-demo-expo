import { RootState } from "../store";
import { ReduxController, ReduxControllerBase, ReduxAsyncAction, CommitFunction, ReduxAction, AutoUnsubscribe, ReduxEffect, ReduxWatch } from "redux-controllers";


export interface CounterState {
    counter: number,
}

@ReduxController((rootState: RootState) => rootState.counterState)
export class CounterController extends ReduxControllerBase<CounterState, RootState> {

    defaultState = {
        counter: 0
    }

}