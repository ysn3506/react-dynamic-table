import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './manual-override.styles.scss'


const ManualOverRide = ({ handleSubmit, changeState, toggleInput, toggle }) =>


    (<div className='manual-override'>
        <h2>Manual Override</h2>
        <form onSubmit={handleSubmit}>
            <div className='inline'>
                <div className='x-y'>
                    <FormInput id='x'
                        name='x'
                        type='number'
                        label='X : '
                        maxLength="1"
                        size="4"
                        min="1"
                        max="4"


                    />
                    <FormInput
                        id='y'
                        name='y'
                        type='number'
                        label='Y : '
                        maxLength="1"
                        size="4"
                        min="1"
                        max="4"

                    />
                </div>
                <div className='confirm'>
                    <div className='radio'>
                        <h3>Set to:</h3>
                        <FormInput
                            className='radio-button'
                            name='on'
                            type='radio'
                            label='ON'
                            onChange={toggleInput}
                            checked={!toggle}

                        />
                        <FormInput
                            className='radio-button'
                            name='off'
                            type='radio'
                            label='OFF'
                            onChange={toggleInput}
                            checked={toggle}

                        />
                    </div>
                    <div>
                        <CustomButton type='submit' buttonClick={changeState}>Confirm</CustomButton>
                    </div>
                </div>
            </div>

        </form>



    </div>)



export default ManualOverRide