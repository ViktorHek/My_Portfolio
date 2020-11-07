import React, { useState }from "react";
/* import { Menu, Segment } from "semantic-ui-react"; */
import { NavLink, Link } from "react-router-dom";
import './Header.css'
import { Button } from './Button';


function Header() {
    const[click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)

    return (
        <>
        <nav className="header">
            <div className='header-container'>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                    <Link to='/' className='nav-links' >
                        Home
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link
                        to='/about'
                        className='nav-links'
                    >
                        Who?
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link
                        to='/projects'
                        className='nav-links'
                    >
                        What?
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link
                        to='/why'
                        className='nav-links'
                    >
                        Why?
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link
                        to='/how'
                        className='nav-links'
                    >
                        How?
                    </Link>
                    </li>

                </ul>
            </div>
        </nav>
        </>
    );
};

export default Header;
 
/*
        <Segment inverted>
            <Menu inverted secondary>
                <Menu.Item
                    id="header"
                    name="Home"
                    as={Link}
                    to={{ pathname: "/" }}
                />
                <Menu.Item
                    id="about-tab"
                    name="Who?"
                    as={NavLink}
                    to={{ pathname: "/about" }}
                />

                    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

            {button && <Button buttonStyle='bts--outline'>Contact Me!</Button>}


                <Menu.Item
                    id="project-tab"
                    name="What?"
                    as={NavLink}
                    to={{ pathname: "/projects" }}
                />
                 <Menu.Item
                    id="why-tab"
                    name="Why?"
                    as={NavLink}
                    to={{ pathname: "/why" }}
                />
                <Menu.Item
                    id="how-tab"
                    name="How?"
                    as={NavLink}
                    to={{ pathname: "/how" }}
                />
            </Menu>
        </Segment>
*/