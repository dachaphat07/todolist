import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import axios from 'axios'

class Todoapp extends Component {



    constructor(props) {
        super(props)
        this.state = {
            input: '',
            todo: [],
            lable: '',
        }
    }

    componentDidMount() {
        this.getTodoList();
    }

    getTodoList() {
        axios.get('https://todolist59160089.herokuapp.com/todo').
            then(res => this.setState({
                todo: res.data
            }))

    }


    onChande(value) {
        console.log(value.target.value)
        this.setState({

            input: value.target.value

        })

        if (this.state.input !== '') { } else { }

    }
    renderTodoListItem() {
        return (
            this.state.todo.map((todo, index) => {
                return (
                    <a className="panel-block" key={index}>
                        {todo.text}
                    </a>

                )
            })
        )
    }

    //const {text,check} = newTodo
    postTodoTask({text,check}) {
        axios.get('https://todolist59160089.herokuapp.com/todo', {
            text,
            check
        }).then(res => console.log(res))
    }


    addTask() {
        /*
                if (this.state.input !== '') {
                    this.setState({
                        todo: [...this.state.todo, this.state.input],
                        lable: '',
                        input: ''
                    })
        
                } else {
                    this.setState({
                        lable: "Input is empty"
                    })
                    console.log("Input is empty")
                }
        */

        const newTodo = {
            text: this.state.input,
            check: false
        }
        this.postTodoTask(newTodo)
    }

    render() {
        return (
            <section className="hero is-medium is-info " >
                <div className="container has-text-centered">
                    <div className="hero-body">
                        <h1 className="title"  >TO DO LIST</h1>


                        <div className="columns">


                            <div className="column is-11">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Enter task"
                                    onChange={(value) => this.onChande(value)}
                                    value={this.state.input}
                                />


                            </div>


                            <div className="column">


                                <a className="button is-danger" onClick={() => this.addTask()}> Add </a>

                            </div>


                        </div>
                        <label className="label">
                            {this.state.lable}
                        </label>



                        <div className="columns">

                            <div className="column is-11">

                                <nav className="panel">
                                    {this.renderTodoListItem()}
                                </nav>

                            </div>


                        </div>







                    </div>
                </div>
            </section >
        );
    }
};

export default Todoapp;