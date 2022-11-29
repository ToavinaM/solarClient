import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

import Swal from 'sweetalert2';

export default function DeleteTicket({ ticket, handleDelete }) {


  const handleDeleteL = () => {
    Swal.fire({
      toast: true,
      // timer: 4000,
      timerProgressBar: true,
      title: 'Confirm?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {

        Swal.fire({
          toast: true,
          title: 'Supprimer?',
          icon: 'success',
        }
        ).then(() => {
        })
      }
      handleDelete(ticket)
    })
  }

  return (
    <div>
      <OverlayTrigger
        key='top'
        placement='top'
        overlay={
          <Tooltip id={`tooltip-top`}>
            <strong>Delete</strong>.
          </Tooltip>
        }
      >
        <img onClick={handleDeleteL} className='logos' src='../delete.png' />
      </OverlayTrigger>
    </div>
  )
}
