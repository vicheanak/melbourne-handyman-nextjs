import React from 'react'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
import Image from 'next/image';

const FooterComponent = (props) => {

    const myLoader = ({ src }) => {
        return src;
    }

    return (
        <footer className={styles.footer}>
            <Link href="/quote">
                <a>
                    <div className={styles.getQuote}>
                        Quote
                    </div>
                </a>
            </Link>
            {/* <div className={styles.footerLabelContainer}> */}
                <p className={styles.footerLabel}>POBox 22, Clarinda</p> 
                <p className={styles.footerLabel}>ABN: 52 646 094 528</p>
            {/* </div> */}
        </footer>
    );
}

export default FooterComponent
