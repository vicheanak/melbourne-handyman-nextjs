import Head from 'next/head'
import Image from 'next/image'
import { Carousel } from '../src/components'
import styles from '../styles/Home.module.css'
import axios from 'axios';

const Home = ({posts, error}) => {
  
  const myLoader=({src})=>{
    return src;
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Melbourn Handyman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <h1>Melbourne Handyman</h1>
            {posts.posts.map(post => (
              <Image key={post.id} loader={myLoader} src={post.imageUrl} width={500}
              height={500}/>
            ))}
      </main>

      <footer className={styles.footer}>
       
          Copyright by Melbourne Handyman 
       
      </footer>
    </div>
  )
}

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get(`${process.env.HOST}/api/posts`)
    const posts = res.data;
    return { posts };
  } catch (error) {
    return { error };
  }
};

export default Home;