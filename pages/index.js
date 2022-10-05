import Head from 'next/head'
import Image from 'next/image'
import { Carousel } from '../src/components'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import logoPic from '../public/images/mh_logo.png'
import Link from 'next/link';
import Header from '../src/components/Header';
import Nav from '../src/components/Nav';

const Home = ({posts, error}) => {
  
  const myLoader=({src})=>{
    return src;
  }
  
  return (
    <div className={styles.container}>
      <Header />
        <Nav />
      <main className={styles.main}>
            <div class={styles.imageContainer}>
            {posts.posts?.map(post => (
                <div class={styles.imageContent}>
                  <Image key={post.id} loader={myLoader} src={post.imageUrl} width={500}
              height={500}/>
                </div>
            ))}
            </div>
      </main>

      <footer className={styles.footer}>
       
          Copyright by Melbourne Handyman 
       
      </footer>
    </div>
  )
}


export async function getServerSideProps({params,req,res,query,preview,previewData,resolvedUrl,locale,locales,defaultLocale}) {
  if (query.text) {
    return { redirect: { destination: '/', permanent: false, },}
  }
  const data = await fetch(`${process.env.HOST}/api/posts`);
  const posts = await data.json();
  if (!data) {
    return {notFound: true,}
  }  
  return { props: { posts } }
}


export default Home;