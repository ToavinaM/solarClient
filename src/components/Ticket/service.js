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
    deleteTicket: (data) => {
        console.log('in service', data);
        return axios.delete(backUrl + `/ticket/${data.code}`);
    },
}

export default Service;