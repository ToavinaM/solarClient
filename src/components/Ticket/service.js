// import http from "./http-common";
import axios from "axios";
import backUrl from "../config/Config";


export const Service = {
    getTicket: () => {
        return axios.get(backUrl + `/ticket`);
    }
}

export default Service;