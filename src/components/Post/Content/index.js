import styles from './Content.module.css'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

function Content({ issue }) {
    console.log("=>" + issue)
    return (
        <div className={styles.container}>

            <div className={styles.topo}>
                
                <h3 className={styles.title}>{issue.title}</h3>

                <div className={styles.containerIcons}>
                    <AiOutlineEdit className={styles.icon}/>
                    <AiOutlineDelete className={styles.icon}/>
                </div>

            </div>

            <p className={styles.contentMid}>{issue.content}</p>

        </div>
    )
}

export default Content