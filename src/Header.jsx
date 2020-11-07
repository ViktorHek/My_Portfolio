import React, { useState }from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

function Header() {
    const[click, setClick] = useState(false);
    return (
        <>
        <nav className="header">
            <div className='header-container'>
                <div className='menu.icon'>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
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