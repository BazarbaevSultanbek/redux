import { TextField } from '@mui/material'
import { Button, notification } from 'antd'
import './Form.scss'
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

function Form() {
    const form = useForm();
    const [api, contextHolder] = notification.useNotification();
    const { register, handleSubmit, formState, reset } = form;
    const { errors } = formState;
    const [promocode, setPromocode] = useState(false)
    const submitForm = (placement, data) => {
        if (JSON.stringify(data) !== "") {
            api.info({
                message: `Submitted`,
                description: JSON.stringify(data),
                placement
            });
        }
    };

    useEffect(() => {
        if (errors.email) {
            api.info({
                message: errors.email.message,
                placement: 'topRight'
            });
        }
        if (errors.password) {
            api.info({
                message: errors.password.message,
                placement: 'topRight'
            });
        }
        if (errors.promocode) {
            api.info({
                message: errors.promocode.message,
                placement: 'topRight'
            });
        }
        if (errors.Address) {
            api.info({
                message: errors.Address.message,
                placement: 'topRight'
            });
        }
    })
    return (
        <div className='Form'>
            {contextHolder}
            <div className="container">
                <div className="Form-block">
                    <div className="Form-block-inner">
                        <form onSubmit={handleSubmit((data) => submitForm('top', data))} noValidate>
                            <div className="Form-block-inner-email">
                                <span>Email:</span>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email"
                                    style={{
                                        width: "350px",
                                        height: '50px'
                                    }}
                                    {...register("email",
                                        {
                                            required: { value: true, message: 'Email is required field' },
                                            pattern: {
                                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                message: 'Invalid email format'
                                            }
                                        }
                                    )} className={errors.email ? "error-input" : ""} />
                            </div>
                            <div className="Form-block-inner-pass">
                                <span>
                                    Password:
                                </span>
                                <TextField
                                    required
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    style={{
                                        width: "350px",
                                        height: '50px'
                                    }}
                                    {...register("password",
                                        {
                                            required: { value: true, message: 'Password is required field' },
                                        }
                                    )} className={errors.password ? "error-input" : ""} />
                            </div>
                            <div className="Form-block-inner-promocode">
                                <div>
                                    <p>Do you have promo code?</p>
                                    <div>
                                        <span>Yes</span>
                                        <input type="radio" name="promo" id="promo" onClick={() => setPromocode(true)} />
                                        <span>No</span>
                                        <input type="radio" name="promo" id="promo" onClick={() => setPromocode(false)} />
                                    </div>
                                </div>
                                <div className='Form-inner-promocode-navi' style={{
                                    display: promocode ? 'block' : 'none'
                                }}>
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Promocode"
                                            {...register('promocode', {
                                                required: { value: promocode, message: 'Promocode is required field' }
                                            })} className={errors.promocode ? "error-input" : ""}
                                        />
                                        {/* <p className="error-coupon">{errors.coupon?.message}</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="Form-block-inner-address">
                                <span>Address:</span>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Address"

                                    {...register("Address",
                                        {
                                            required: { value: true, message: 'Address is required field' },
                                        }
                                    )} className={errors.password ? "error-input" : ""}
                                />
                                {/* <p className="error-address">{errors.Address?.message}</p> */}
                            </div>
                            <div className="Form-block-inner-btn">
                                <Button onClick={() => reset()}>Reset</Button>
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
