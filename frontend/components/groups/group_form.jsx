import React from 'react';

class GroupForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.group
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault;
        this.props.action(this.state)
        this.resetForm()
    }

    handleChange(field){
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    resetForm() {
        this.setState({
            title: "",
            about: "",
            organizerId: "",
            cityId: ""
        })
    }

    renderErrors() {
        return (
            <div>
                {this.props.errors.map((error, i) => (
                    <div key={i} className="group-errors">{error}</div>
                ))}
            </div>
        )
    }

    render(){
        let isCreate = this.props.formType === "Create";
        let theErrors = !!this.props.errors.length ? this.renderErrors() : "";
        
        return (
            <div className='group-form'>
                <p className='form-name' >{isCreate ? "Create New Group" : "Update Group Details"}</p>
                <form>
                    {theErrors}
                    <label className='group-form-label'>Title:
                    <input
                            type="text"
                            className="session-form-input"
                            placeholder="Title"
                            onChange={this.handleChange("title")}
                            value={this.state.title} />
                    </label>
                    <label className='group-form-label'>About:
                        <textarea
                            cols="30" rows="10"
                            className="session-form-input"
                            placeholder="About"
                            onChange={this.handleChange("about")}
                            value={this.state.about}>
                        </textarea>
                    </label>
                    <label className='group-form-label'>City_ID:
                        <input 
                            type="text" 
                            className="session-form-input"
                            placeholder="City Dropdown will go Here" 
                            onChange={this.handleChange("cityId")}
                            value={this.state.cityId} />
                    </label>
                    <label className='group-form-label'>Cover Photo:
                            <input 
                                type="text" 
                                className="session-form-input"
                                placeholder="Cover Photo Upload will go Here" />
                    </label>
                    <button
                        className="session-submit"
                        onClick={this.handleSubmit}>{isCreate ? "Create Group" : "Update Group"}</button>
                </form>
            </div>
        )
    }

}

export default GroupForm;