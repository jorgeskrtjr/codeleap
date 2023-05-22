import styles from './Post.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Content from './Content';
import YourMind from './YourMind';


function Post(props) {
  
  const { name } = props

  console.log(" ===> " + name)

  const [data, setData] = useState([])

  const getData = async () => {

    try {

      const response = await axios.get('https://dev.codeleap.co.uk/careers/')
      setData(response.data.results)

    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles.container}>
      
            <YourMind></YourMind>
            
         {
            data.map(issue => {
              return(
                <Content issue={issue}></Content>
              )
           })
         }
    </div>
  );
}

export default Post