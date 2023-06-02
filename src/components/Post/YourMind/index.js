import styles from './YourMind.module.css'
import { useLocation} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function YourMind(){

    const location = useLocation();
    const { name } = location.state;

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const postData = {
        username: name,
        title: title,
        content: content
      };

      console.log(postData)
   
      try {
        const response = await axios.post('https://dev.codeleap.co.uk/careers/', postData);
  
        if (response.status === 201) {
          console.log('Post criado com sucesso');
          window.location.reload()

          // Lógica adicional, como redirecionar ou atualizar a lista de posts
        } else {
          console.log('Falha ao criar post');
        }
      } catch (err) {
        console.log('Erro ao fazer requisição:', err);
      }

    };
    

    return (
        <div className={styles.container}>
          <h2>What's on your mind?</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.form}>
              <label>Title</label>
              <input className={styles.input} type="text" name="name" placeholder="Hello world" onChange={(e) => setTitle(e.target.value)} />
      
              <label className={styles.marg}>Content</label>
              <textarea className={styles.inputContent} rows="4" cols="50" placeholder="Content here" onChange={(e) => setContent(e.target.value)}></textarea>
      
              <div className={styles.submit}>
                <input className={styles.submitItem} type="submit" value="Create" />
              </div>
            </div>
          </form>
        </div>
      );
}

export default YourMind