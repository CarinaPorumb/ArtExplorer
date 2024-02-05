import {Link} from "react-router-dom";
import styles from './Layout.module.css';

export function Footer() {
    return (
        <div>
            <Link to={'/about'} className={`${styles.footerStyle} ${styles.linkStyle}`}>
                About
            </Link>
        </div>
    );
}