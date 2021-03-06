import React from 'react';
import {connect} from 'react-redux';

import {saveFile, loadFile, downloadSmt, postSmt} from '../redux/actions/fileActions';
import {clearGraph, startEditingNodeType} from '../redux/actions/graphActions'

class GraphOperations extends React.Component {

    render() {
        return (
            <div className="well">

                <div className="btn-group mr-2" role="group" aria-label="First group">
                    <label className="btn btn-info" onClick={this.props.clearGraph}>
                        <i className="glyphicon glyphicon-erase"/> Clear Graph
                    </label>
                </div>
                <div className="btn-group mr-2" role="group" aria-label="First group">
                    <label className="btn btn-info" onClick={this.props.startEditingNodeType}>
                        <i className="glyphicon glyphicon-edit"/> Edit Goal Types
                    </label>
                </div>
                <div className="btn-group mr-2" role="group" aria-label="First group">
                    <label className="btn btn-info" onClick={this.props.saveFile}>
                        <i className="glyphicon glyphicon-floppy-save"/> Download Json File
                    </label>
                </div>
                <div className="btn-group mr-2" role="group" aria-label="First group">
                    <label className="btn btn-info">
                        <i className="glyphicon glyphicon-upload"/>
                        Upload Json File <input type="file" accept=".json" hidden
                                                onChange={(event) => this.props.loadFile(event.target.files[0])}/>
                    </label>
                </div>
                <div className="btn-group mr-2" role="group" aria-label="First group">
                    <label className="btn btn-info" onClick={this.props.downloadSmt}>
                        <i className="glyphicon glyphicon-floppy-save"/> Save SMT2 File
                    </label>
                </div>
                <div className="input-group">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <label className="btn btn-info">
                            <i className="glyphicon glyphicon-play"/>
                            Solve <input type="text" className="form-control"
                                         onClick={(event) => this.props.postSmt(event.target.value)}/>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const nodeTypes = state.nodeTypes.array;
    return {
        nodeTypes,
    };
}

const mapDispatchToProps = {
    saveFile,
    loadFile,
    clearGraph,
    downloadSmt,
    postSmt,
    startEditingNodeType

}

export default connect(mapStateToProps, mapDispatchToProps)(GraphOperations);
