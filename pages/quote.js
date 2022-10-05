import Head from 'next/head'
import Image from 'next/image'
import { Carousel } from '../src/components'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import logoPic from '../public/images/mh_logo.png'
import Link from 'next/link';
import Nav from '../src/components/Nav';

const Quote = ({posts, error}) => {
  
  const myLoader=({src})=>{
    return src;
  }
  
  return (
    <div className={styles.container}>
        <Header />
        <Nav />
        <MainComponent posts={posts}/>
        <FooterComponent />
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


export default Quote;