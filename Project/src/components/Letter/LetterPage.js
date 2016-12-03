import React, {Component} from 'react';
import LetterForm from './LetterForm';
import {sendLetter} from '../../models/letter';
import {sendPresent} from '../../models/present'

export default class LetterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            title: '',
            text: '',
            data: '',
            present1: '',
            present2: '',
            present3: '',
            submitDisabled: false
        };
        this.bindEventHandlers();
        sessionStorage.removeItem('letter_id');
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onChangeHandler(event) {
        switch (event.target.name) {
            case 'title':
                this.setState({title: event.target.value});
                break;
            case 'text':
                this.setState({text: event.target.value});
                break;
            case 'present1':
                this.setState({present1: event.target.value});
                break;
            case 'present2':
                this.setState({present2: event.target.value});
                break;
            case 'present3':
                this.setState({present3: event.target.value});
                break;
            default:
                break;
        }
    }

    getCurrentDate() {
        let current = new Date();
        return current.toUTCString();
    }

    getCurrentUsername() {
        return sessionStorage.getItem('username');
    }

    getCurrentLetterId(){
        return sessionStorage.getItem('letter_id');
    }

    getCurrentEmail(){
        return sessionStorage.getItem('email');
    }

    sendPresents() {
        sendPresent(this.getCurrentLetterId(), this.state.present1, this.getCurrentUsername(),this.getCurrentEmail());
        sendPresent(this.getCurrentLetterId(), this.state.present2, this.getCurrentUsername(),this.getCurrentEmail());
        sendPresent(this.getCurrentLetterId(), this.state.present3, this.getCurrentUsername(),this.getCurrentEmail());
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({submitDisabled: true});

        //sends the letter, gets its id
        //then sends all presents with its id
        sendLetter(this.getCurrentUsername(), this.state.title, this.state.text, this.getCurrentDate(), this.onSubmitResponse,this.sendPresents())
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from create letter page
            this.context.router.push('/');
        } else {
            // Something went wrong, let the user try again
            this.setState({submitDisabled: true});
        }
    }

    render() {
        return (
            <div>
                <h1>Create Letter</h1>
                {/*Give the Letter Form some props*/}
                <LetterForm
                    title={this.state.title}
                    text={this.state.text}
                    present1={this.state.present1}
                    present2={this.state.present2}
                    present3={this.state.present3}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}

LetterPage.contextTypes = {
    router: React.PropTypes.object
};