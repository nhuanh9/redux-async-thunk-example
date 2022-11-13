import {Field, Form, Formik} from "formik";
import React from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {addPlayer} from "../../../services/playerService";

export default function AddPlayer() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleSubmit = async (data) => {
       await dispatch(addPlayer(data));
       navigate('/user')
    }
    return (
        <div className={'row'}>
            <div className={'offset-2 col-6'}>
                <h1>Add new players</h1>
            <Formik
                initialValues={
                    {
                        name: '',
                        champ: '',
                        kda: '',
                        des: ''
                    }
                }
                onSubmit={(values) => handleSubmit(values)}
            >
                <Form className={'form-group d-flex justify-content-center flex-column'}>
                    <Field name={'name'} className={'form-control mb-2'}></Field>
                    <Field name={'champ'} className={'form-control mb-2'}></Field>
                    <Field name={'kda'} className={'form-control mb-2'}></Field>
                    <Field name={'des'} className={'form-control mb-2'}></Field>
                    <button className={'btn btn-primary'}>Save</button>
                </Form>
            </Formik>
            </div>
        </div>
    )
}
