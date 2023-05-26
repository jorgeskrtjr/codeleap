import styles from './YourMind.module.css'
import { useLocation } from 'react-router-dom';


function YourMind(){

    const location = useLocation();
    const { name } = location.state;
    
    console.log("=> " + name)

    return(
        <div className={styles.container}>
            <h2>What´s on your mind ?</h2>
            
            <form onSubmit={handleSubmit} className={styles.form}>

                <div className={styles.form}>
                    <form className={styles.form}>
                        
                        <label>Title</label>
                        <input className={styles.input}type="text" name="name" placeholder='Hello world' />

                        <label className={styles.marg}>Content</label>
                        <textarea className={styles.inputContent} rows="4" cols="50" placeholder='Content here'></textarea>
                                        
                    </form>

                    <div className={styles.submit}>
                        <input className={styles.submitItem} type="submit" value="Create" />
                    </div>
              </div>
            </form>
        </div>
    )
}

export default YourMind