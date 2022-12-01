// import http from "./http-common";
import axios from "axios";
import backUrl from "../config/Config";


export const Service = {
    getUser: () => {
        console.log(backUrl + `/role`);
        return axios.get(backUrl + `/role`);
    }
}

export default Service;