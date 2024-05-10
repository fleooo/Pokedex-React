import React from 'react';
import { Formik, Form, Field } from 'formik';

const PopupForm = ({ onClose }) => {
    const handleSubmit = (values, actions) => {
        
        console.log(values);
        onClose();
    };

    return (
        <div className="popup rounded-3">
            <div className="popup-inner">
                <button className="btn bttn ll" onClick={onClose}>X</button>
                <h2>Formulaire</h2>
                <Formik onSubmit={handleSubmit}>
                    <Form>
                        <table>
                            <tr className="form-group">
                                <td><label className='mx-auto' htmlFor="name">Name : </label></td>
                                <td><Field type="text" id="name" name="name" /></td>
                            </tr><br />

                            <tr className="form-group">
                                <td><label className='mx-auto' htmlFor="email">Email : </label></td>
                                <td><Field type="email" id="email" name="email" /></td>
                            </tr><br />

                            <tr class="form-group">
                                <td><label htmlFor="subject">Objet:</label></td>
                                <td><Field type="text" id="subject" name="subject" /></td>
                            </tr><br />
                            <tr className="form-group">
                                <td><label htmlFor="message">Message:</label></td>
                                <td><textarea id="message" name="message" /></td>
                            </tr>
                            <button className='btn bttn' type="submit">Submit</button>
                        </table>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default PopupForm;