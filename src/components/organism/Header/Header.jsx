import { Nav } from "../../molecules";
import header from './Header.module.css';

const Header = () => {
    return (
        <header className={header['c-header']}>
            <div className={header['c-logo']}>
                <h6>Blog Frontend</h6>
            </div>
            <Nav />
        </header>
    )
}


export { Header };
