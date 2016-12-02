import React, {Component} from 'react';

export default class RegisterForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        value={this.props.username}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={this.props.password}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Repeat Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="repeat"
                        value={this.props.repeat}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="email"
                        value={this.props.email}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>I am:</label>
                    <select
className="form-control "
                        name="type"
                        value={this.props.type}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    >
                         <option selected value="child">Child</option>
                        <option value="parent">Parent</option>

                    </select>
                </div>
                <input className="btn btn-default" type="submit" value="Register" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}