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
            🏠 4 Tina Ct, Clarinda, Vic 3169 - <strong>ABN: 52 646 094 528</strong>
        </footer>
    );
}

export default FooterComponent
