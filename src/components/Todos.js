import React, { Component } from 'react'
import axios from 'axios';
import TodoList from  './TodoList';
import {Table} from 'react-bootstrap';

export default class Todos extends Component {
    constructor(props){
        super(props);
        this.state={
            todos:[]
        }
    }
    componentDidMount() {
        this.getTodoList();
    }

    getTodoList(){
            axios.get('http://localhost:2020/todos/todolist')
            .then(response => response.data)
            .then((data)=>{
                this.setState({todos: data});
            })
        }
    

    completeTodo = (id) => {
        const newData ={
            complete : true
        }
            axios.put('http://localhost:2020/todos/update/'+id, newData)
            .then(response => {
                if(response.data != null) {
                window.location.reload()
                }
            })
        }

    deleteTodo = (id) => {
        axios.delete("http://localhost:2020/todos/delete/"+id)
            .then(response => {
                if(response.data != null) {
                    this.setState({
                        todos : this.state.todos.filter(todo => todo.id !== id)
                    })
                }
            })
        }
                
    render() {
        
        const style ={
            color: 'gold'
            }

        return (
            <div style={style}>
                {
                this.state.todos.length === 0 ?
                <h5 className="center">No Record Available</h5> :
                <div>
                <h3>TodoList</h3>
                    <Table striped hover variant="dark">{this.state.todos.map((todo) => (
                        <TodoList key= {todo.id} todo = {todo} completeTodo={this.completeTodo} deleteTodo= {this.deleteTodo}/>
                        ))}
                    </Table>
                </div>
                }
            </div>
                   
            )
        }
    }