import React from 'react';
var moment = require('moment-timezone');

class EventForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.event
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        if (this.props.formType === 'Update') {
            formData.append('event[id]', this.state.id);
        }
        formData.append('event[name]', this.state.name);
        formData.append('event[details]', this.state.details);
        formData.append('event[day]', this.state.day);
        formData.append('event[startTime]', new moment(this.state.startTime, "HH:mm").utc());
        formData.append('event[duration]', this.state.duration);
        formData.append('event[digital]', this.state.digital);
        formData.append('event[address]', this.state.address);
        formData.append('event[address2]', this.state.address2);
        formData.append('event[city]', this.state.city);
        formData.append('event[state]', this.state.state);
        formData.append('event[zip]', this.state.zip);
        formData.append('event[groupId]', this.state.groupId);
        formData.append('event[hostId]', this.state.hostId);

        if (this.state.photoFile) {
            formData.append('event[photo]', this.state.photoFile);
        }
        this.props.action(formData)
            .then(() => this.props.history.push(`/groups/${this.state.groupId}`))
    }

    handleChange(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] })
    }

    // resetForm() {
    //     this.setState({
    //         title: "",
    //         about: "",
    //         organizerId: "",
    //         cityId: "",
    //         category: "",
    //         photoFile: null
    //     })
    // }

    renderErrors() {
        return (
            <div>
                {this.props.errors.map((error, i) => (
                    <div key={i} className="group-errors">{error}</div>
                ))}
            </div>
        )
    }

    render() {
        
        let addressDetails = this.state.digital === 'false' ? (
            <div>
                <label>Street Address:
                        <input type="text"
                        placeholder="Street Address"
                        className="session-form-input"
                        onChange={this.handleChange("address")}
                        value={this.state.address} />
                </label>
                <label>Apartment Number:
                        <input type="text"
                        placeholder="Apartment Number"
                        className="session-form-input"
                        onChange={this.handleChange("address2")}
                        value={this.state.address2} />
                </label>
                <label>City:
                        <input type="text"
                        placeholder="City"
                        className="session-form-input"
                        onChange={this.handleChange("city")}
                        value={this.state.city} />
                </label>
                <label>State:
                        <input type="text"
                        placeholder="State"
                        className="session-form-input"
                        onChange={this.handleChange("state")}
                        value={this.state.state} />
                </label>
                <label>Zip Code:
                        <input type="text"
                        placeholder="Zip Code"
                        className="session-form-input"
                        onChange={this.handleChange("zip")}
                        value={this.state.zip} />
                </label>
            </div>
        ) : "";

        let isCreate = this.props.formType === "Create";
        let theErrors = !!this.props.errors.length ? this.renderErrors() : "";
        
        return (
            <div className='group-form'>
                <p className='form-name' >{isCreate ? "Create New Event" : "Update Event Details"}</p>
                <form>
                    {theErrors}
                    <label className='group-form-label'>Event Name:
                    <input
                            type="text"
                            className="session-form-input"
                            placeholder="Event Name"
                            onChange={this.handleChange("name")}
                            value={this.state.name} />
                    </label>
                    <label className='group-form-label'>Event Details:
                        <textarea
                            cols="30" rows="10"
                            className="session-form-input"
                            placeholder="Event Details"
                            onChange={this.handleChange("details")}
                            value={this.state.details}>
                        </textarea>
                    </label>
                    <label>Date:
                        <input type="date"
                            onChange={this.handleChange("day")}
                            value={this.state.day} />
                    </label>
                    <br/>
                    <label>Start Time:
                        <input type="time"
                            onChange={this.handleChange("startTime")}
                            value={this.state.startTime} />
                    </label>
                    {/* <label>Duration:
                        <input type="time"
                            onChange={this.handleChange("duration")}
                            value={this.state.duration} />
                    </label> */}
                    <div>
                        <p>Is this Event In Person?</p>
                        <label>Yes:
                            <input type="radio"
                                name="digital"
                                onChange={this.handleChange("digital")}
                                value={false} />
                        </label>
                        <label>No:
                            <input type="radio"
                                name="digital"
                                onChange={this.handleChange("digital")}
                                value={true} />
                        </label>
                    </div>
                    {addressDetails}
                    <label className='group-form-label'>Upload Cover Photo:
                            <input
                            type="file"
                            onChange={this.handleFile.bind(this)}
                            className="session-form-input"
                        />
                    </label>
                    <button
                        className="session-submit"
                        onClick={this.handleSubmit}>{isCreate ? "Create Event" : "Update Event"}</button>
                </form>
            </div>
        )
    }

}

export default EventForm;