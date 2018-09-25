import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class Todoapp extends Component {



    constructor(props) {
        super(props)
        this.state = {
            input: '',
            todo: ['Reading book', 'Homework mobile', 'Eat a book'],
            lable : '',
        }
    }

    onChande(value) {
        console.log(value.target.value)
        this.setState({

            input: value.target.value

        })

    }
    renderTodoListItem() {
        return (
            this.state.todo.map((todo, index) => {
                return (
                    <a className="panel-block" key={index}>
                        {todo}
                    </a>

                )
            })
        )
    }

    addTask() {

        if(this.state.input !== ''){
            this.setState({
                todo : [...this.state.todo,this.state.input],
                lable : '',
                input:''
                        })

        }else{
            this.setState({
                lable :"Input is empty"
            })
            console.log("Input is empty")
        }

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