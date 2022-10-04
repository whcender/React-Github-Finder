import React, { Fragment } from 'react'
import Gif from '../images/loading.gif'

export const Loading = () => {
  return (
    <Fragment className="maingif">
      <div className="loadinggif">
        <img src={Gif} alt="31" />
      </div>
    </Fragment>
  )
}

export default Loading
