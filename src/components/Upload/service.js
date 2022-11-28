
// import http from "./http-common";
import axios from "axios";
import backUrl from "../config/Config";

export const Service = {
    upload: () => {
        return axios.post(backUrl + `/upload`);
    }
}

export default Service;