import {Link} from "react-router-dom";
import styles from './Layout.module.css';
import {useEffect, useState} from "react";

export function Header() {

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const position = window.scrollY;
        setIsScrolled(position > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`${styles.fixedHeader} ${isScrolled ? styles.scrolled : ''}`}>
            <Link to="/" className={`${styles.linkStyle} ${isScrolled ? styles.scrolledLink : ''}`}>Home</Link>
            <Link to="/artists"
                  className={`${styles.linkStyle} ${isScrolled ? styles.scrolledLink : ''}`}>Artists</Link>
            <Link to="/artworks"
                  className={`${styles.linkStyle} ${isScrolled ? styles.scrolledLink : ''}`}>Artworks</Link>
        </div>
    );

}