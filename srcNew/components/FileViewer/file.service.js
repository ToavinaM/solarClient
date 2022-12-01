import axios from "axios";
import backUrl from "../config/Config";


export async function getFile(files) {
    let res = await axios.get(backUrl + "/" + files.filesPath, { responseType: "arraybuffer" });
    files.src = "data:" + files.mimetype + ";base64," + btoa(
        new Uint8Array(res.data)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
    return files
}
