import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        };
        this.demoUser = { "firstName": "demo2", "email": "demo2@aa.io", "password": "password" }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.processForm(this.state)
        this.resetForm();
    }

    handleDemo(e) {
        e.preventDefault()
        this.props.processDemo(this.demoUser)
    }

    resetForm() {
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        })
    }
    render() {
        let isSignup = this.props.formType === "signup";
        let showName = isSignup ? (
            <div>
                <label className='session-label'>First Name:
                    <input 
                        type="text" 
                        className="session-form-input"
                        placeholder="First Name"
                        onChange={this.handleChange("firstName")} 
                        value={this.state.firstName} />
                </label>
                <label className='session-label'>Last Name:
                    <input 
                    type="text" 
                    className="session-form-input"
                    placeholder="Last Name"
                    onChange={this.handleChange("lastName")} 
                    value={this.state.lastName} />
                </label>
            </div>
            ) : "";

        return (
            <div className='session-form'>
                <p className='form-name' >{isSignup ? "Sign Up" : "Log In"}</p>
                <form>
                    {showName}
                    <label className='session-label'>Email Address:
                    <input 
                        type="text" 
                        className="session-form-input"
                        placeholder="Email"
                        onChange={this.handleChange("email")} 
                        value={this.state.email} />
                    </label>
                    <label className='session-label'>Password:
                        <input 
                            type="password" 
                            className="session-form-input"
                            placeholder="Password"
                            onChange={this.handleChange("password")} 
                            value={this.state.password} />
                    </label>
                    <button 
                        className="session-submit" 
                        onClick={this.handleSubmit}>{isSignup ? "Log In" : "Continue"}</button>
                    <button 
                        className="session-submit"
                        onClick={this.handleDemo}>Sign in as a Demo User</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;