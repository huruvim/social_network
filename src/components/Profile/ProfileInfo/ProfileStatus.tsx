import React, { ChangeEvent } from 'react';
//
type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {

    statusInputRef = React.createRef()

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value

        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.state.status || 'My status is here'}</span>
                </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus