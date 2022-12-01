import React, { useEffect, useState } from 'react'
import filtre from '../Utils/Utils';
import Find from './Find'
import Tab from './Tab'
const data = [
    { firstname: 'toavina', lastname: 'ranarilala' },
    { firstname: 'Tina', lastname: 'andriamarisoa' },
    { firstname: 'Angela', lastname: 'raherinjato' },
]


export default function Fusion() {

    const [tofind, settofind] = useState('');
    const [show, setshow] = useState(data);

    const methodFind = (rep) => {
        settofind(rep);
    }

    useEffect(() => {
        if (tofind === "") setshow(data);
        let resp = filtre('lastname', data, tofind);
        if (!resp) setshow([]);
        setshow(resp);
    }, [tofind])

    return (
        <div>
            {/* <h1>das</h1> */}
            <Find methodFind={methodFind} ></Find>
            <Tab show={show} />
        </div>
    )
}
