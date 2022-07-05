import React from 'react'

export default function Alert(props) {
    return (
        //  props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        //     <strong>{(props.alert.type).toUpperCase()}</strong> :  {props.alert.msg}

        // </div>
        <>
        <div style={{height :"4rem"}}></div>

        {props.alert !== null ?


            <div className={`alert myalertc alert-${props.alert.type} alert-dismissible fade show`} style={{marginTop:"0",position:"absolute"}} role="alert">
            <strong>{(props.alert.type).toUpperCase()}</strong> :  {props.alert.msg}
            
            </div> :
            <div></div>}
        
        </>
    )
}
