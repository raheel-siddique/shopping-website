import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import {  message } from 'antd';
import { useState } from "react";
import "./Register.css"

const Register=()=>{
    const [phoneValue,setPhoneValue]=useState('')
    const [passwordValue,setPasswordValue]=useState('')
    const [phoneError, setPhoneError]=useState(false)
    const [passwordError, setPasswordError]=useState(false)


    const handleChangePhone=(e)=>{
        setPhoneValue(e.target.value)

    }
    const handleChangePassword=(e)=>{
        setPasswordValue(e.target.value)
    }

    const submitForm=()=>{
          if(!phoneValue){
            setPhoneError(true)
          }else{
            setPhoneError(false)

          }
          if(!passwordValue){
            setPasswordError(true)
          }else{
            setPasswordError(false)

          }
          
          if(phoneValue && passwordValue){
            message.open({
                type: 'success',
                content: 'form has been submitted',
              });
          }
    }
    return(
        <>
        <Row>
            <Col lg={16} xs={0}>
 <img src="assets/form/photo-1515378791036-0648a3ef77b2.avif" className="img_sec"  />

            </Col>
            <Col lg={8} xs={24} className='login_form'>
            <Form
            
            className="form_register"
            >
                <h1>
                    Sign Up For Shopping
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quidem aspernatur </p>
      <Form.Item
      >
        <label htmlFor="textField">Phone No</label>
        <Input type="text" id="textField" onChange={handleChangePhone} />
         {phoneError?(
            <p style={{color:'red'}}>Plz fill phone field</p>
         ):<></>}
      </Form.Item>

      <Form.Item
      >
        <label htmlFor="passwordField">Password</label>

        <Input.Password id="passwordField"  onChange={handleChangePassword}  />
        {passwordError?(
            <p style={{color:'red'}}>Plz fill password field</p>
         ):<></>}
      </Form.Item>

    

      <Form.Item>
        <Button block type="primary" htmlType="submit" onClick={submitForm}>
          Submit
        </Button>
      </Form.Item>
    </Form>
            </Col>

        </Row>
        </>
    )
}
export default Register