import React from 'react'

import Label  from '../label/label.component'
import SwitchButton from '../switch-button/switch-button.component'

import './table.styles.scss'


const Table=({cells,labels,handleClick})=>(

    <div className='table'>
    <div className='flex'>
        <div className='row-label'>
                {labels.map(({rank})=>(
                    <Label key={rank} rank={rank}/>
                ))} 
            
        </div>
        <div className='button-table'>
            {cells.map(({id, ...otherCellProps})=>(
                    <SwitchButton id={id} key={id} handleClick={handleClick}{...otherCellProps}/>
                ))}
        </div>
    </div>
    <div >
        <div className='column-label flex'>
                {labels.map(({rank})=>(
                    <Label key={rank} className='column-label'  rank={rank}/>
                ))} 
        </div>
    </div>
</div>





)

export default Table