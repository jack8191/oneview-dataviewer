import React from 'react'

export default function ErrorMessage(props) {
    if(props.error) {
        return <p>Something went wrong. Please try again later</p>
    }
    else return null
}