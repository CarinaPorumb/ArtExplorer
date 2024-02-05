import React from 'react';
import styles from './Layout.module.css';
import {Header} from './Header';
import {Footer} from './Footer';

export function Layout(props) {
    const {children} = props;

    return (
        <div className={styles.layoutContainer}>
            <div className={styles.linkStyle}>
                <Header/>
            </div>
            <div className={styles.content}>{children}</div>
            <div className={styles.footerStyle}>
                <Footer/>
            </div>
        </div>
    );
}