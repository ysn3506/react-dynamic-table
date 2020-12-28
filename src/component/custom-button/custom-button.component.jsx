import React from 'react'

import './custom-button.styles.scss'


const CustomButton = ({ children, buttonClick, ...otherProps }) => (

    <button className='custom-button' onClick={buttonClick} {...otherProps}>
        {children}
    </button>
)


export default CustomButton