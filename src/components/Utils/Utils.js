

export default function filtre(fildsCompare, dataObjectTofecth, toFind) {
    let rep = [];
    dataObjectTofecth.map(data => {
        if (data[fildsCompare].toLowerCase().includes(toFind.toLowerCase())) {
            rep.push(data);
        }
    })
    if (rep.length < 1) return false;
    return rep;
}