import {getRequest, postRequest} from "../../HttpService";

export function listVehicleService() {
    return getRequest("/listVehicle");
}

export function vehicleInService(values) {
    return postRequest("/vehicleIn",values);
}

export function vehicleOutService(values) {
    return postRequest("/vehicleOut",values);
}

export function getPaymentService(values) {
    return postRequest("/getPayment",values);
}

export function doPayService(values) {
    return postRequest("/doPay",values);
}

export function getUnitPriceService() {
    return getRequest("/getUnitPrice");
}

export function updateUnitPriceService(values) {
    return postRequest("/updateUnitPrice",values);
}

export function listMemberService() {
    return getRequest("/listMember");
}

export function saveMemberService(values) {
    return postRequest("/saveMember",values);
}

export function deleteMemberService(values) {
    return postRequest("/deleteMember",values);
}
