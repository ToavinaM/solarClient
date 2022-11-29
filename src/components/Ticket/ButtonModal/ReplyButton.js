import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

import Swal from 'sweetalert2';

export default function ReplyButton({ ticket, getTicketReply }) {

    function getL(ticket) {
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
                <img onClick={() => getL(ticket)} className='logos' src='../reply.png' />
            </OverlayTrigger>
        </div>
    )
}
