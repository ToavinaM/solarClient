import { serialize } from "object-to-formdata";
import backUrl from "../config/config";
import { Http } from "../helper";
export async function getTicket(where) {
    let parsed = where ? JSON.stringify(where) : '{}'
    console.log(parsed);
    return await Http.get(backUrl + `/ticket?where=${parsed}`);
}

export function saveTicket({ data, files }) {
    let formData = serialize(data);
    // console.log(formData);
    for (let i = 0; i < files.length; i++)
        formData.append("files", files[i]);
    return Http.post(backUrl + `/ticket`, formData);
}

export function deleteTicket(data) {
    // console.log('in service', data);
    return Http.delete(backUrl + `/ticket/${data.code}`);
}
export function getDataToReply(data) {
    return Http.get(backUrl + `/ticket/${data.code}`);
}
export function update(data) {
    return Http.put(backUrl + `/ticket/${data.code}`, data);
}