import React from 'react'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'

const Nav = () => {
  return (
    <nav>
        <ul className={styles.ul}>
            <Link href="/kitchen">
            <a>
                <li className={styles.li} key={1}>Kitchen</li>
            </a>
            </Link>
            <Link href="/bathroom">
                <a>
                <li className={styles.li} key={2}>Bathroom</li>
                </a>
            </Link>
            <Link href="/painting">
                <a>
                <li className={styles.li} key={4}>Painting</li>
                </a>
            </Link>
            <Link href="/fence">
                <a>
                <li className={styles.li} key={5}>Fence</li>
                </a>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav
