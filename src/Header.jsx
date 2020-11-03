import React from "react"
import { Menu, Segment } from "semantic-ui-react";

const Header = () => {
    return (
        <Segment inverted>
            <Menu inverted secondary>
                <Menu.Item
                name="My Portfolio"
                />
            </Menu>
        </Segment>
        
    );
};

export default Header;