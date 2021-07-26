import Link from "next/link";
import classes from '../../styles/main-header.module.css';

const MainHeader = (props) => {
    return <header className={classes.header}>
        <div className={classes.logo}>
            <Link href="/">NextEvent</Link>
        </div>
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <Link href='/events'>All Events</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainHeader;