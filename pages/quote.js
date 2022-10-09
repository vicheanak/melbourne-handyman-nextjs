import Head from 'next/head'
import Image from 'next/image'
import { Carousel } from '../src/components'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import logoPic from '../public/images/mh_logo.png'
import Link from 'next/link';
import Nav from '../src/components/Nav';
import Header from '../src/components/Header';
import MainComponent from '../src/components/Main';
import FooterComponent from '../src/components/Footer';
import FormComponent from '../src/components/Form';

const Kitchen = ({ posts, error }) => {


    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.heading}>Get Quote</h1>
            <FormComponent />
        </div>
    )
}


export async function getServerSideProps({ params, req, res, query, preview, previewData, resolvedUrl, locale, locales, defaultLocale }) {
    if (query.text) {
        return { redirect: { destination: '/', permanent: false, }, }
    }

    const data = await fetch(`${process.env.HOST}/api/posts/?` + new URLSearchParams({
        CategoryId: "1"
    }));

    const posts = await data.json();
    if (!data) {
        return { notFound: true, }
    }
    return { props: { posts } }
}


export default Kitchen;