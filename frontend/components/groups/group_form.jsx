import React from 'react';

class GroupForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.group
        this.state.cityId = 1
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault;
        this.props.action(this.state)
            .then(() => this.props.history.push('/groups'))
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
        if (this.state.toIndex === true) {
            return <Redirect to='/' />
        }
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
                    {/* <label className='group-form-label'>City_ID:
                        <input 
                            type="text" 
                            className="session-form-input"
                            placeholder="City Dropdown will go Here" 
                            onChange={this.handleChange("cityId")}
                            value={this.state.cityId} />
                    </label> */}
                    <label className='group-form-label'>Group Category:
                        <select 
                            defaultValue="none"
                            className="session-form-input"
                            onChange={this.handleChange("category")}>
                            <option value="none" disabled hidden >
                                Select a Category to help people find your group
                            </option>
                            <option value="Outdoors &amp; Adventure">Outdoors &amp; Adventure</option>
                            <option value="Pets">Pets</option>
                            <option value="Learning">Learning</option>
                            <option value='Movement'>Movements</option>
                            <option value="Food &amp; Drink">Food &amp; Drink</option>
                            <option value="Sports &amp; Fitness">Sports &amp; Fitness</option>
                            <option value="Photography">Photography</option>
                            <option value="Language &amp; Culture">Language &amp; Culture</option>
                        </select>
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