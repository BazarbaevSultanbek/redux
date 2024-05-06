import { TextField } from '@mui/material'
import { Button } from 'antd'
import './Form.scss'
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Form() {
    const form = useForm();
    const { register, handleSubmit, formState, reset } = form;
    const { errors } = formState;
    const [coupon, setCoupon] = useState(false)
    const submitForm = (data) => {
        alert(JSON.stringify(data));
        reset();
    };

    return (
        <div className='Form'>
            <div className="container">
                <div className="Form-block">
                    <div className="Form-block-inner">
                        <form onSubmit={handleSubmit(submitForm)} noValidate>
                            
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
                                <p className="error">{errors.email?.message}</p>
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
                                <p className="error">{errors.password?.message}</p>
                            </div>

                            <div className="Form-block-inner-promocode">
                                <div>
                                    <p>Do you have promo code?</p>
                                    <div>
                                        <span>Yes</span>
                                        <input type="radio" name="promo" id="promo" onClick={() => setCoupon(true)} />
                                        <span>No</span>
                                        <input type="radio" name="promo" id="promo" onClick={() => setCoupon(false)} />
                                    </div>
                                </div>
                                <div className='Form-inner-promocode-navi' style={{
                                    display: coupon ? 'block' : 'none'
                                }}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Promocode"
                                        {...register('coupon', {
                                            required: { value: coupon, message: 'Coupon is required field' }
                                        })} className={errors.coupon ? "error-input" : ""}
                                    />
                                </div>
                                <p className="error-coupon">{errors.coupon?.message}</p>
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
                                <p className="error-address">{errors.Address?.message}</p>
                            </div>
                            <div className="Form-block-inner-btn">
                                <Button onClick={() => reset()}>Reset</Button>
                                <Button type="primary">Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
