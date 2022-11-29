// import http from "./http-common";
import axios from "axios";
import backUrl from "../config/Config";


export const Service = {
    getTicket: () => {
        return axios.get(backUrl + `/ticket`);
    },
    saveTicket: (data) => {
        // console.log('in service', data);
        return axios.post(backUrl + `/ticket`, data);
    },
}

export default Service;