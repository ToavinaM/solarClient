import React, { useState } from 'react'


export default function Find({ methodFind }) {

    return (
        <input onChange={(rep) => methodFind(rep.target.value)}></input >
    )
}
