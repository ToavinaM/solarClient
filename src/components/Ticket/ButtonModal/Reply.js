import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

import Swal from 'sweetalert2';

export default function DeleteTicket({ ticket, getTicketReply }) {


    const handleDeleteL = () => {
        getTicketReply(ticket);
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
