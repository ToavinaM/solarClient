
import axios from "axios";
import backUrl from "../config/Config";

export const AuthService = {
    signin: (data) => {
        return axios.post(backUrl + `/api/auth/signin`, data);
    },
}
export default AuthService;