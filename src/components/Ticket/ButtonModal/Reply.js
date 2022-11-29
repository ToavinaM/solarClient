import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

import Swal from 'sweetalert2';

export default function DeleteTicket({ ticket, handleDelete, getTicketReply }) {


    const handleDeleteL = () => {
        Swal.fire({
            toast: true,
            // timer: 4000,
            timerProgressBar: true,
            title: 'Confirm?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Supprimer!'
        }).then((result) => {
            getTicketReply(ticket)
        })
    }

    return (
        <div>
            <OverlayTrigger
                key='top'
                placement='top'
                overlay={
                    <Tooltip id={`tooltip-top`}>
                        <strong>Reply</strong>.
                    </Tooltip>
                }
            >
                <img onClick={handleDeleteL} className='logos' src='../reply.png' />
            </OverlayTrigger>
        </div>
    )
}
