import React from 'react'
import spinner from '../../img/spinner.gif'

const Spinner = () => {
    return (
       <img src={spinner} alt='loading' style={{ width: '120px', margin: 'auto', display:'block'}}/>
    )
}

export default Spinner
