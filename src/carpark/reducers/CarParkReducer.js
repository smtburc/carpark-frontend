import {notification} from "antd";

const initialState = {
    listParkingLot:[],
    payment:undefined,
    listMember:[],
    unitPrice:undefined,
    unitPriceModalVisible:false,
};

export const carParkReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIST_PARKING_LOT": {
            let listParkingLot = action.payload.data;
            return { ...state,listParkingLot };
        }
        case "CLEAR_PAYMENT": {
            let payment = undefined;
            return { ...state,payment };
        }
        case "GET_PAYMENT": {
            let payment =  action.payload.data;
            return { ...state,payment };
        }
        case "LIST_MEMBER": {
            let listMember = action.payload.data;
            return { ...state,listMember };
        }
        case "OPEN_UNIT_PRICE_MODAL": {
            let unitPrice = action.payload.data;
            let unitPriceModalVisible = true;
            return { ...state,unitPrice,unitPriceModalVisible };
        }
        case "CLOSE_UNIT_PRICE_MODAL": {
            let unitPriceModalVisible = false;
            return { ...state,unitPriceModalVisible };
        }
        case "NOTIFICATION_SUCCESS": {
            notification["success"]({
                message: 'Başarılı',
                description: action.payload.data,
            });
            return { ...state };
        }
        default:
            return state;
    }
};
