import React, {Component} from 'react'
import {addNodeTypeWeight} from "../redux/actions/graphActions";
import {connect} from "react-redux";

class NodeTypeEditorForm extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            value: '',
        }

        this.state = this.initialState
    }

    handleNameChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
        this.setState({name: event.target.value});
    }

    handleValueChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
        this.setState({value: event.target.value});
    }

    handleSubmit = () => {
        this.props.addNodeTypeWeight(this.props.elementId, this.state.name, this.state.value);
        this.setState(this.initialState)
    }

    render() {
        const {name, value} = this.state;

        return (
            <form className="row" onSubmit={e => {
                e.preventDefault()
                this.handleSubmit()
            }}>
                <div className="col-md-4">
                    <input
                        type="text"
                        name="name"
                        placeholder= "Name"
                        value={name}
                        onChange={this.handleNameChange}/>

                </div>
                <div className="col-md-4">
                    <input
                        type="number"
                        name="value"
                        value={value}
                        placeholder= {0}
                        onChange={this.handleValueChange}/>
                </div>

                <div className="col-md-4">
                    <input type="submit" className="btn btn-success" value="Add Weight"/>
                </div>

            </form>
        );
    }
}

function mapStateToProps(state) {

    return {
        elementId: 1,
    }

}

const mapDispatchToProps = {
    addNodeTypeWeight
}

export default connect(mapStateToProps, mapDispatchToProps)(NodeTypeEditorForm);