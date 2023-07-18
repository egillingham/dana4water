import React from "react";
import * as AWS from "aws-sdk";


function sendEmail(message, subject, email, name) {
    const fullMessage = "Email: " + email + "\nName: " + name + "\n" + message;

    const params = {
        Message: fullMessage,
        TopicArn: "arn:aws:sns:us-east-1:189803052433:dana4waterEmail",
        Subject: subject
    };

    const publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31', region: 'us-east-1',
        accessKeyId: 'PLACE', // these creds have no permissions so if you find them HA you can't do anything
        secretAccessKey: 'HOLDER'}).publish(params).promise();

    // Handle promise's fulfilled/rejected states
    publishTextPromise.then(
        function(data) {
            console.log("MessageID successfully sent");
        }).catch(
        function(err) {
            console.error(err, err.stack);
        });
}


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


export default class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            subject: '',
            email: '',
            name: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        if (!this.state.message || !this.state.subject || !this.state.email || !this.state.name) {
            alert('Please fill out all inputs before submitting');
        } else if (!validateEmail(this.state.email)) {
            alert('Please provide a valid email');
        } else {
            sendEmail(this.state.message, this.state.subject, this.state.email, this.state.name);
            alert('Sent!');
        }
        event.preventDefault();
        window.location.reload();
    }

    render() {
        return (
            <div>
                <div className="pb-5">
                    <div className="text-center">
                        <img className="img-fluid"
                             src="https://dana4water-images.s3.us-east-2.amazonaws.com/public/contact-arch.jpg"/>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <h1>Contact Dana</h1>
                        <h5>If you have any concerns or questions regarding your water service and rates feel free to contact me by filling in the form below.</h5>
                    </div>
                </div>
                <hr className="featurette-divider"/>
                <div className="container marketing">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="inputName">Name</label>
                            <input type="text" className="form-control" id="inputName" name="name" placeholder="Enter your full name"
                                   value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail">Email address</label>
                            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"
                                   name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter your email"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                    else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputSubject">Subject</label>
                            <input type="text" className="form-control" id="inputSubject" name="subject" placeholder="Hello Dana!"
                                   value={this.state.subject} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailBody">Message</label>
                            <textarea className="form-control" id="emailBody" rows="10" name="message"
                                      value={this.state.message} onChange={this.handleChange} />
                        </div>
                        <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}


