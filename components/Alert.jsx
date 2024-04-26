import React from 'react'

function Alert(props) {
    return (
        props.alert && <div className="alert alert-info alert-dismissible fade show" role="alert">
            <b>{props.alert.message}</b>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert