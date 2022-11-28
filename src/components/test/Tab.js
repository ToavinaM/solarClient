import React from 'react'

export default function Tab({ show }) {
    return (
        <div>
            <hr></hr>
            <table border={2}>
                <th >firstname</th>
                <th >lastname</th>
                {
                    show.length > 0 && show.map(rep => {
                        return <tr >
                            <td>{rep.firstname}</td>
                            <td>{rep.lastname}</td>
                        </tr>
                    })
                }

            </table>
        </div>
    )
}
