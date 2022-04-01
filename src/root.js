import {combineReducers} from "redux";
import {carParkReducer} from "./carpark/reducers/CarParkReducer";

/**
 * Ana redux reducer dosyası
 */
const rootReducer = combineReducers({
  carParkReducer,
});

export default rootReducer;
