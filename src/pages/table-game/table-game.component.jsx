import React from 'react'

import TABLE_DATA from './table-data.js'
import './table-game.styles.scss'

import Table from '../../component/table/table.component'
import ManualOverRide from '../../component/manual-override/manual-override.component'
import CustomButton from '../../component/custom-button/custom-button.component'



class TableGamePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cells: TABLE_DATA,
            labels: [{ rank: 1 }, { rank: 2 }, { rank: 3 }, { rank: 4 }],
            toggle: false

        }
    }


    handleClick = (event) => {

        const newCells = this.state.cells
        const el = newCells.filter(cell => cell.id === parseInt(event.target.id))
        el[0].position === 'OFF' ? el[0].position = 'ON' : el[0].position = 'OFF'
        this.setState({ cells: newCells })

    }

    resetTable = () => {
        const newCells = this.state.cells
        newCells.forEach(element => {
            element.position = 'OFF'
        });
        this.setState({ cells: newCells })
    }


    handleSubmit = (event) => {
        event.preventDefault()

    }

    clearInput = (event) => {
        event.target.form[0].value = ''
        event.target.form[1].value = ''
        this.setState({ toggle: false })
    }


    changeState = event => {
        if (parseInt(event.target.form[0].value) > 4 || parseInt(event.target.form[1].value) > 4 || event.target.form[0].value === '' || event.target.form[1].value === '') {
            alert("Please enter compatible number with table size ")
        } else {
            event.preventDefault();
            const newCells = this.state.cells
            const cell = newCells.filter(cell => cell.x === parseInt(event.target.form[0].value) && cell.y === parseInt(event.target.form[1].value))
            !this.state.toggle ? cell[0].position = 'ON' : cell[0].position = 'OFF'
            this.setState({ cells: newCells })

        }

        this.clearInput(event)



    }

    toggleInput = (event) => {

        this.setState({
            toggle: !this.state.toggle
        })
    }



    render() {
        const { cells, labels } = this.state;

        return (
            <div className='game-table'>
                <div className='inline'>
                    <Table labels={labels} cells={cells} handleClick={this.handleClick} />
                    <ManualOverRide className='manual-override' handleSubmit={this.handleSubmit} changeState={this.changeState} toggleInput={this.toggleInput} toggle={this.state.toggle} />

                </div>
                <div className='inline'>
                    <CustomButton onClick={this.resetTable}>Reset</CustomButton>
                </div>
            </div>
        )

    }



}


export default TableGamePage