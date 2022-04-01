import {postRequest} from "../../HttpService";

export function loginService(values) {
    return postRequest("/authenticate",values);
}