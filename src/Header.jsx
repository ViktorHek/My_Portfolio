import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <Segment inverted>
            <Menu inverted secondary>
                <Menu.Item
                id="header"
                name="my portfolio"
                as={Link}
                to={{pathname: "/" }}
                />
                <Menu.Item
                id="about-tab"
                name="my portfolio"
                as={NavLink}
                to={{ pathname: "/about" }}
                />
                <Menu.Item
                id="projects-tab"
                name="my portfolio"
                as={NavLink}
                to={{ pathname: "/projects" }}
                />
            </Menu>
        </Segment>      
    );
};

export default Header;