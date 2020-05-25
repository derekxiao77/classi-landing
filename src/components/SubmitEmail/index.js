import React from 'react';
import stylesWeb from './SubmitEmail.module.css';
import stylesMobile from './SubmitEmailMobile.module.css';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const styles = { ...stylesWeb, ...stylesMobile }

const CustomForm = ({ status, message, onValidated }) => {
    let email;
    let inputText;
    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value
        });

    if (status === "sending") {
        inputText = <div className={styles.confirmationText} style={{color: "#334E68"}}>
            Please wait one second, we are adding you to the list for exclusive access...
        </div>    
    }
    else if (status === "error") {
        inputText = <div className={styles.confirmationText} style={{color: "#A0041E"}}>
            This email is already in line for exclusive access. Please try another email.
        </div> 
    }
    else if (status === "success") {
        inputText = <div className={styles.confirmationText} style={{color: "#5C913B"}}>
            Thank you for signing up! We will contact you soon with details for exclusive access.
        </div>       
    }
    return (
        <div>
        {inputText}
        <div className={styles.emailContainer}>
            <input
                className={styles.inputFieldMobile}
                ref={node => (email = node)}
                type="email"
                placeholder="Your Email"
            />
            <button className={styles.submitEmailButtonMobile} onClick={submit}>
                Get Early Access
             </button>
        </div>
        </div>
    );
};

function SubmitEmail() {
    return (
        <MailchimpSubscribe
            url={process.env.REACT_APP_MAILCHIMP_URL}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
        />
    );
};

export default SubmitEmail;