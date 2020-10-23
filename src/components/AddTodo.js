import React, { Component } from 'react'
import { Button,Card,Form,Row,Col} from 'react-bootstrap';

import axios from 'axios';

export default class AddTodo extends Component {

   state = {
        title: '', date:'', time: ''
    }

    submit = () => {
        let today = new Date()
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        const newData ={
            title :this.state.title,
            date :date,
            time : this.state.time,
            }

        axios.post('http://localhost:2020/todos/add', newData)
        .then(response => {
            if(response.data !== null){
                this.setState({title :'', time:''});
               
            }
        });
                
    }
          

    textChange = (event) => {
        if (event.target.name === "title") {
            this.setState({
            title: event.target.value
            });
        }
        if (event.target.name === "date") {
            this.setState({
            date: event.target.value
            });
        }
    }

    selectChange = (event) => {
       if (event.target.name === 'time') {
            this.setState({
              time : event.target.value
            });
          }
      }


    render() {
        const {title,time} = this.state;

        const formCss ={
            marginTop:'5%',
            marginBottom : '35px',
            color:'gold'
             };
        const style ={
            color: 'rgb(163,132,68)'
        }
        const footerStyle ={
            textAlign:'right'
        }
        return (
        <div>
            <Card className="border border-dark bg-dark text-white">
            <Card.Header style={formCss}><h5><i className="fas fa-plus-square">  Add New TodoList</i></h5></Card.Header>
                <Form onSubmit={this.submit}>
                    <Card.Body style={style} >
                        <Form.Group as={Row}>
                        <Form.Label column sm="2">Name</Form.Label>
                        <Col sm="10">
                            <Form.Control autoComplete="off" size="sm" type="text" id="title" name="title" value={title} onChange={this.textChange}  placeholder="Enter New Todo" required/>
                        </Col>
                            </Form.Group>

                        <Form.Group as={Row}>
                        <Form.Label column sm="2">Choose Time</Form.Label>
                            <Col sm="10">
                                <Form.Control as="select" htmlSize={3} size="sm" id="time" name="time" value={time} onChange={this.selectChange}>
                                    <option>01.00</option>
                                    <option>02.00</option>
                                    <option>03.00</option>
                                    <option>04.00</option>
                                    <option>05.00</option>
                                    <option>06.00</option>
                                    <option>07.00</option>
                                    <option>08.00</option>
                                    <option>09.00</option>
                                    <option>10.00</option>
                                    <option>11.00</option>
                                    <option>12.00</option>
                                    <option>13.00</option>
                                    <option>14.00</option>
                                    <option>15.00</option>
                                    <option>16.00</option>
                                    <option>17.00</option>
                                    <option>18.00</option>
                                    <option>19.00</option>
                                    <option>20.00</option>
                                    <option>21.00</option>
                                    <option>22.00</option>
                                    <option>23.00</option>
                                    <option>24.00</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Card.Body>
                    <Card.Footer className="border border-white text-black" style={footerStyle}>
                        <Button type="submit" variant="warning" size="sm"><i className="far fa-save">  Submit</i></Button>
                    </Card.Footer>
                </Form>
            </Card>
        </div>
        )
    }
}