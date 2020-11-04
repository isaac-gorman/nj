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

                    <a href={process.env.HELP_APP_URL} target="_blank" className={styles.link} >Help</a>
           
            </nav>
        </header>
    )
}

export default Nav;