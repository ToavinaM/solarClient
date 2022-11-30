// import http from "./http-common";
import axios from "axios";
import backUrl from "../../config/Config";


export const ServiceFile = {
    getFilePathById: (ticket) => {
        // data
        return axios.get(backUrl + `/file`);
    }
}

export default ServiceFile;