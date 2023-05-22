import styles from './Login.module.css'
import React from 'react'
import { useState } from 'react' 
import { useNavigate } from 'react-router-dom'

function Login() {
     
    const [name, setName] = useState('') 

    const navigate = useNavigate();
 
    const handleChange = (event) => {
       setName(event.target.value)
    }

    const handleClick = () => {
        navigate('/', { state: { name } });
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerContent}>
                <div>
                    <h2 className={styles.title}>Welcome to CodeLeap network!</h2>
                </div>
                <div className={styles.form}>
                    <form className={styles.form}>
                        
                        <label>Please enter your name</label>
                        <input className={styles.input} type="text" name="name" placeholder='Nathan'  value={name} onChange={handleChange}/>
                        
                    </form>

                    <div className={styles.submit}>
                        <input className={styles.submitItem} type="submit" value="ENTER" onClick={handleClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login