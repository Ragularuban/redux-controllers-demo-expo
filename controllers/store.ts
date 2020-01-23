import { CounterState, CounterController } from "./counter/counter.controller";
import { Reducer, combineReducers } from "redux";
import { ReduxControllerRegistry } from "redux-controllers";
import { AsyncStorage } from "react-native"


export interface RootState {
    counterState: CounterState,
}

export function initStore() {
    ReduxControllerRegistry.init([
        CounterController,
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