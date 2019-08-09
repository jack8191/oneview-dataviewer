import React from 'react'

export default function Message(props) {
    if(props.error) {
        return <p>Something went wrong. Please try again later</p>
    }
    else if(props.submitting) {
        return <p>Working...</p>
    }
    else return null
}