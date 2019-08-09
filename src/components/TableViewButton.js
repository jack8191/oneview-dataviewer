import React from 'react'

export default function TableViewer(props) {
    return (
        <button className='view-table' onClick={props.onClick}>
            Click here to view user data
        </button>
    )
}