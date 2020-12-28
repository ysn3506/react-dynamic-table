import React from 'react'

import './switch-button.styles.scss'
const SwitchButton = ({ id, position, handleClick, ...otherProps }) => (

    <div id={id} className={`${position === 'ON' ? 'on' : ''} switch-button`} onClick={handleClick} >
        {position}
    </div>

)

export default SwitchButton