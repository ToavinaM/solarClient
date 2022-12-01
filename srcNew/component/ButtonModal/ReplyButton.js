import React from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'

import Swal from 'sweetalert2';

export default function ReplyButton({ selectTicket, ticket }) {
    function setTicket() {
        selectTicket(ticket);
    }
    return (
        <div onClick={() => setTicket()}>
            <OverlayTrigger
                key='top'
                placement='top'
                overlay={
                    <Tooltip id={`tooltip-top`}>
                        <strong>Reply</strong>.
                    </Tooltip>
                }
            >
                {/* <Button variant="success" onClick={setTicket}> */}
                <img className='logos' src='../reply.png' />
                {/* </Button> */}
            </OverlayTrigger>
        </div>
    )
}
