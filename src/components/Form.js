import React from 'react'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
import Image from 'next/image';

const FormComponent = (props) => {

    const myLoader=({src})=>{
        return src;
    }
    
    return (
        <main className={styles.main}>
            <div className={styles.formContainer}>
                <form>
                    <input className={styles.formInput} type="text" name="name" placeholder='Name' />
                    <input className={styles.formInput} type="text" name="email" placeholder='Email' />
                    <input className={styles.formInput} type="text" name="name" placeholder='Phone Number' />
                    <input className={styles.formInput} type="text" name="name" placeholder='Address' />
                    <textarea className={styles.formInputTextArea} type="textarea" name="name" placeholder='Description' />
                    <input className={styles.button} type="submit" value="Submit" />
                </form>
            </div>
        </main>
    );
}

export default FormComponent
