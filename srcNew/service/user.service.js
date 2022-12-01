import backUrl from "../config/config";
import { Http } from "../helper";
export async function getUser() {
    let rep = new Array();
    let role = await Http.get(backUrl + '/role');
    for (let user of role[0].users) rep.push(user);
    for (let user of role[1].users) rep.push(user);
    return rep;
}