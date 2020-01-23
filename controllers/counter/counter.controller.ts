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

    @ReduxAction()
    setCounter(counter: number) {
        this.state.counter = counter;
    }

    @ReduxAction()
    increaseCounter(increaseBy?: number) {
        if (increaseBy) {
            this.state.counter = this.state.counter + increaseBy;
        } else {
            this.state.counter++;
        }
    }

    @ReduxAsyncAction()
    async loadCounterFromBackend() {
        const counterValue: number = await new Promise(resolve => {
            setTimeout(() => {
                resolve(100);
            }, 2000);
        });

        this.commit(state => {
            state.counter = counterValue;
        });
    }

    async loadCounterFromBackend2() {
        const counterValue: number = await new Promise(resolve => {
            setTimeout(() => {
                resolve(100);
            }, 2000);
        });
        this.setCounter(counterValue);
    }

}
