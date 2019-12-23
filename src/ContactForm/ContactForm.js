import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
        this.updateInput = this.updateInput.bind(this);
        this.submit = this.submit.bind(this);

    }

    updateInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            ...this.state,
            [name]: value,
        })
    }

    submit(event) {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        const { name, email, message } = this.state;

        return (
            <div className='feedback-container'>

                <form className="feedback-form" onSubmit={this.submit}>
                    <div className="feedback-form_container">

                        <input className="feedback__input--name general-setting" onChange={this.updateInput} value={name} type="text" name='name' placeholder='Name' />

                        <input className="feedback__input--email general-setting" onChange={this.updateInput} value={email} type="text" name="email" placeholder='Email' />

                        <textarea className="feedback__input--message" onChange={this.updateInput} value={message} type="text"
                            placeholder="Your message" name='message' />

                        <input className="feedback__send" type="submit" value='Send' />
                    </div>

                </form>
            </div>
        )
    }
}

export default ContactForm;
