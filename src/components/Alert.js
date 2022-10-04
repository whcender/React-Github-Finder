import React from 'react'

const alert = (props) => {
  return (
    props.alert !== null && (
        <div className="main-div">
            <div className={`alert alertx container alert-${props.alert.type}`}>
                {props.alert.msg}
            </div>
        </div>)
  )
}

export default alert