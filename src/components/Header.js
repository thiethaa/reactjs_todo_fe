import React, { Component } from 'react'

export default class Header extends Component {
    render() {

        const style ={
            background :'grey',
            color: 'rgb(70, 57, 31)',
            padding : '2px',
            textAlign : 'center',
            borderRadius : '40px 0 0 0'
        }
        const spanStyle ={
            fontSize:'14px',
            color: 'gold'
        }
        let today = new Date(),
        date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
        
        return (
            <div style ={style}>
                <h1> My-TodoList Today{' '}<span style={spanStyle}>{date}</span></h1>
            </div>
        )
    }
}
