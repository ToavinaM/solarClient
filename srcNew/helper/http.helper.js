// import http from "./http-common";
import axios from "axios";
export class Http {
    static get(url, option) {
        return axios.get(url, option)
            .then(res => res?.data)
            .catch(err => err?.response?.data?.message || err?.data || err)
    }
    static post(url, data, option) {
        return axios.post(url, data, option)
            .then(res => res?.data)
            .catch(err => err?.response?.data || err?.data || err)
    }
    static put(url, data, option) {
        return axios.put(url, data, option)
            .then(res => res?.data)
            .catch(err => err?.response?.data || err?.data || err)
    }
    static delete(url, data, option) {
        return axios.delete(url, data, option)
            .then(res => res?.data)
            .catch(err => err?.response?.data || err?.data || err)
    }
}