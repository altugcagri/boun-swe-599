import React, {Component} from 'react'
import {deleteNodeTypeWeight} from "../redux/actions/graphActions";
import {connect} from "react-redux";

class NodeTypeEditorTable extends Component {
    render() {
        const weights = this.props.weights;
        const Table = <table className="table table-striped">
            <TableHeader/>
            <TableBody weights={weights} removeItem={this.removeItem}/>
        </table>

        return (
            <div className="table-responsive">{Table}</div>
        )
    }

    removeItem = index => {
        this.props.deleteNodeTypeWeight(this.props.elementId, index);
    }
}

const TableHeader = () => {
    return (
        <thead>
        <tr><h4>Weights</h4></tr>
        <tr>
            <th scope="col">#</th>
            <th>Name</th>
            <th>Weight</th>
            <th>Remove</th>
        </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.weights.map((weight, i) => {
            return <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{weight.name}</td>
                <td>{weight.value}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => props.removeItem(i)}>Delete</button>
                </td>
            </tr>
        }
    )
    return <tbody>{rows}</tbody>
}


function mapStateToProps(state) {
    const nodeType = state.nodeTypes.entities[1];
    return {
        elementId: 1,
        weights: nodeType.weights
    }
}

const mapDispatchToProps = {
    deleteNodeTypeWeight
}

export default connect(mapStateToProps, mapDispatchToProps)(NodeTypeEditorTable)