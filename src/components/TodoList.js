import React, { Component } from 'react'
import {Button} from 'react-bootstrap';

export default class TodoList extends Component {
    render() {
        const {id,title,date,time,complete} = this.props.todo

        const style ={
            textDecoration : (complete)? 'line-through':'none',
            color : (complete)? 'rgb(163,132,68)':'gold',
            borderRadius:'0 0 40px 0',
            textAlign: 'center'
        }
        const style2 ={
            color : (complete)? 'gold':'white',
        }

        const checkBtn ={
            background : (complete)? 'grey' :'green',
            border :'none'
        }
        const checkBtn2 ={
            background : (complete)? 'red' :'grey',
            border :'none'
        }

        return (
            <div>
                <tbody>
                    <th style ={style2}>Title</th> 
                    <td style ={style}>{title}</td>
                    <th style ={style2}>Date</th>
                    <td style ={style}>{date}</td>
                    <th style ={style2}>Time</th>
                    <td style ={style}>{time}</td>
                    <td>
                    <Button style={checkBtn} disabled ={(complete)} type="submit"  variant="success" size="sm" onClick={this.props.completeTodo.bind(this,id)}><i className="fas fa-check-square"></i></Button>
                    <Button style={checkBtn2} disabled ={(!complete)} type="submit" variant="danger" size="sm" onClick={this.props.deleteTodo.bind(this,id)} ><i className="fas fa-trash-alt"></i></Button>
                    </td>
                </tbody>
            </div>
        )
    }
}
