// import http from "./http-common";
import axios from "axios";
import backUrl from "../config/Config";
import { serialize } from 'object-to-formdata';


export const Service = {
    getTicket: (where) => {
        return axios.get(backUrl + `/ticket?where=${JSON.stringify(where)}`,);
    },

    saveTicket: ({ data, files }) => {
        let formData = serialize(data);

        for (let i = 0; i < files.length; i++)
            formData.append("files", files[i]);
        return axios.post(backUrl + `/ticket`, formData);
    },
    deleteTicket: (data) => {
        // console.log('in service', data);
        return axios.delete(backUrl + `/ticket/${data.code}`);
    },
    getDataToReply: (data) => {
        return axios.get(backUrl + `/ticket/${data.code}`);
    }
}

export default Service;