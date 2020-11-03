import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css'


function Nav(){
    return(
        <header className={styles.NavContainer} >
            <nav className={styles.NavBody} >
                <Link href="/" >
                    <a className={styles.link} >Home</a>
                </Link>

                <Link href="/notes" >
                    <a className={styles.link} >All Notes</a>
                </Link>
            </nav>
        </header>
    )
}

export default Nav;