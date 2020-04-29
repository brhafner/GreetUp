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
        this.handleSubmit = this.handleSubmit.bind(this);
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
                <label>First Name:
                    <input type="text" onChange={this.handleChange("firstName")} value={this.state.firstName} />
                </label>
                <label>Last Name:
                    <input type="text" onChange={this.handleChange("lastName")} value={this.state.lastName} />
                </label>
            </div>
            ) : "";

        return (
            <div>
                <h2>{isSignup ? "Sign Up" : "Log In"}</h2>
                <form>
                    {showName}
                    <label>Email:
                    <input type="text" onChange={this.handleChange("email")} value={this.state.email} />
                    </label>
                    <label>Password:
                        <input type="password" onChange={this.handleChange("password")} value={this.state.password} />
                    </label>
                    <button onClick={this.handleSubmit}>{isSignup ? "Sign Up" : "Log In"}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;