import React from 'react'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
import Image from 'next/image';

const MainComponent = (props) => {

    const myLoader=({src})=>{
        return src;
    }
    
    return (
        <main className={styles.main}>
            <div className={styles.imageContainer}>
                {props?.posts?.posts?.map(post => (
                    <div key={post.id} className={styles.imageContent}>
                        <Image  
                            objectFit="cover" 
                            unoptimized={true} 
                            alt={post.title} 
                            loader={myLoader} 
                            src={post.imageUrl} 
                            width={500}
                            height={500} 
                            />
                    </div>
                ))}
            </div>
        </main>
    );
}

export default MainComponent
