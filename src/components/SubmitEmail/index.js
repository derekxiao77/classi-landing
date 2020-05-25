import React from 'react';
import stylesWeb from './SubmitEmail.module.css';
import stylesMobile from './SubmitEmailMobile.module.css';
import { useFormik } from 'formik';
import {isMobile} from 'react-device-detect'

const styles = {...stylesWeb, ...stylesMobile}

function SubmitEmail() {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    if (isMobile) {
        return (
            <form onSubmit={formik.handleSubmit} className= {styles.emailContainerMobile}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Your Email"
                    className={styles.inputFieldMobile}
                />
                <button type="submit" className={styles.submitEmailButtonMobile}>Get Early Access</button>
            </form>
        );
    }
    return (
        <form onSubmit={formik.handleSubmit} className= {styles.emailContainer}>
            <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Your Email"
                className={styles.inputField}
            />
            <button type="submit" className={styles.submitEmailButton}>Submit</button>
        </form>
    );
};
/*
const container =
    <div className={styles.emailContainer}>
        <div className={styles.placeholderText}>
            Your email
            </div>
        <button className={styles.submitEmailButton}>
            Get Notified
            </button>
    </div>;
return container;
}*/

export default SubmitEmail;