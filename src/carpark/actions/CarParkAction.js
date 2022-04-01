import {
    deleteMemberService, doPayService,
    getPaymentService, getUnitPriceService,
    listMemberService,
    listVehicleService, saveMemberService, updateUnitPriceService,
    vehicleInService,
    vehicleOutService
} from "../services/CarParkService";

export const listVehicleAction = () => {
    return async function (dispatch) {
        let res = await listVehicleService();
        if (res != null && res.data != null) {
            dispatch({
                type: "LIST_PARKING_LOT",
                payload: { data: res.data },
            });
        }
    };
};

export const vehicleInAction = (values) => {
    return async function (dispatch) {
        let res = await vehicleInService(values);
        if (res != null && res.data != null) {
            if(res.data == true){
                dispatch(listVehicleAction());
                dispatch({
                    type: "NOTIFICATION_SUCCESS",
                    payload: { data:"Araç Girişi Başarı ile Gerçekleştirilmiştir" },
                });
            }
        }
    };
};


export const vehicleOutAction = (values) => {
    return async function (dispatch) {
        let res = await vehicleOutService(values);
        if (res != null && res.data != null) {
            if(res.data == true){
                dispatch(listVehicleAction());
                dispatch({
                    type: "NOTIFICATION_SUCCESS",
                    payload: { data:"Araç Çıkışı Başarı ile Gerçekleştirilmiştir" },
                });
            }
        }
        dispatch({
            type: "CLEAR_PAYMENT",
        });
    };
};

export const clearPaymentAction = () => {
    return async function (dispatch) {
        dispatch({
            type: "CLEAR_PAYMENT",
        });
    };
};

export const getPaymentAction = (values) => {
    return async function (dispatch) {
        let res = await getPaymentService(values);
        if (res != null && res.data != null) {
            dispatch({
                type: "GET_PAYMENT",
                payload: { data: res.data },
            });
        }
    };
};


export const doPayAction = (values) => {
    return async function (dispatch) {
        let res = await doPayService(values);
        if (res != null && res.data != null) {
            if(res.data == true){
                dispatch(vehicleOutAction(values));
                dispatch({
                    type: "NOTIFICATION_SUCCESS",
                    payload: { data :"Ödeme İşlemi Başarı ile Gerçekleştirilmiştir" },
                });
            }
        }
    };
};

export const openUnitPriceModalAction = () => {
    return async function (dispatch) {
        let res = await getUnitPriceService();
        if (res != null && res.data != null) {
            dispatch({
                type: "OPEN_UNIT_PRICE_MODAL",
                payload: { data: res.data },
            });
        }
    };
};


export const updateUnitPriceAction = (values) => {
    return async function (dispatch) {
        let res = await updateUnitPriceService(values);
        if (res != null && res.data != null) {
            if(res.data == true){
                dispatch(closeUnitPriceModalAction());
                dispatch({
                    type: "NOTIFICATION_SUCCESS",
                    payload: { data:"Birim Fiyat Başarı ile Güncellenmiştir" },
                });
            }
        }
    };
};

export const closeUnitPriceModalAction = () => {
    return async function (dispatch) {
        dispatch({
            type: "CLOSE_UNIT_PRICE_MODAL",
        });
    };
};


export const listMemberAction = () => {
    return async function (dispatch) {
        let res = await listMemberService();
        if (res != null && res.data != null) {
            dispatch({
                type: "LIST_MEMBER",
                payload: { data: res.data },
            });
        }
    };
};

export const saveMemberAction = (values) => {
    return async function (dispatch) {
        let res = await saveMemberService(values);
        if (res != null && res.data != null) {
            if(res.data == true) {
                dispatch(listMemberAction());
                dispatch({
                    type: "NOTIFICATION_SUCCESS",
                    payload: { data:"Üye Kaydı Başarı ile Gerçekleştirilmiştir" },
                });
            }
        }
    };
};

export const deleteMemberAction = (values) => {
    return async function (dispatch) {
        let res = await deleteMemberService(values);
        if (res != null && res.data != null) {
            if(res.data == true) {
                dispatch(listMemberAction());
                dispatch({
                    type: "NOTIFICATION_SUCCESS",
                    payload: { data:"Üyelik Başarı ile Silinmiştir" },
                });
            }
        }
    };
};
