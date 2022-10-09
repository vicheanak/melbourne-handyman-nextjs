import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
import Image from 'next/image';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const FormComponent = (props) => {

    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [isValidForm, setIsValidForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [isDisable, setIsDisabled] = useState(false);

    const onChangeFullname = (event) => {
        setFullName(event.target.value);
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangePhonenumber = (event) => {
        setPhonenumber(event.target.value);
    }

    const onChangeAddress = (event) => {
        setAddress(event.target.value);
    }

    const onChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }


    const handleSubmit=async (event)=>{
        event.preventDefault();
        setIsValidForm(true);
        setIsDisabled(true);
        let isValid = true;
        if (!isValidEmail(email)){
            setIsValidForm(false);
            isValid = false;
            setErrorMessage('Your email is incorrect');
        }

        if (!fullname || !email || !phonenumber || !address || !description) {
            setIsValidForm(false);
            isValid = false;
            setErrorMessage('We need all your information');
        }

        if (isValid){
            const data = {
                fullname: fullname,
                email: email,
                phonenumber: phonenumber,
                address: address,
                description: description
              }
          
              const JSONdata = JSON.stringify(data)
              const endpoint = '/api/quotes'
              const options = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSONdata,
              }
          
              const response = await fetch(endpoint, options)
              const result = await response.json()
              setOpen(true);
              console.log({result});
              setIsDisabled(false);
              
              
        }
            

    }

    const isValidEmail = (mail) => {
        let isValid = false;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            isValid = true;
        }
        return isValid;
    }

    
    return (
        <main className={styles.main}>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <input className={styles.formInput} type="text" name="fullname" placeholder='Name' onChange={onChangeFullname}/>
                    <input className={styles.formInput} type="text" name="email" placeholder='Email' onChange={onChangeEmail}/>
                    <input className={styles.formInput} type="text" name="phonenumber" placeholder='Phone Number' onChange={onChangePhonenumber}/>
                    <input className={styles.formInput} type="text" name="address" placeholder='Address' onChange={onChangeAddress}/>
                    <textarea className={styles.formInputTextArea} type="textarea" name="description" placeholder='Description' onChange={onChangeDescription}/>
                    {!isValidForm && (
                            <label className={styles.errorLabel}>{errorMessage}</label>
                        )}
                    <input disabled={isDisable} className={styles.button} type="submit" value="Submit" />
                </form>
            </div>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className={styles.modal}>
                    <p>Thanks, we will ll get back soon!</p> 
                </div>
            </Popup>
        </main>
    );
}

export default FormComponent
