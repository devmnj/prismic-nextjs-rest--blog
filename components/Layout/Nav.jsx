import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import SocialIcons from "./SocialIcons"
export default function Nav() {
  return (
    <Container>
      <div className="lg:flex lg:items-center">
        <div className="flex items-center justify-between">
          <Logo>Dev Blog</Logo>
        </div>
        <Menu>
          <MenuItem caption="Home" />
          <MenuItem
            path="https://javascriptsu.wordpress.com/"
            caption="JS Blog"
          />
          <MenuItem
            path="https://www.flickr.com/photos/flowersandmacros/albums/72157711552332141"
            caption="Gallery"
          />
          <MenuItem path="https://unsplash.com/@manojap" caption="Unsplash" />
        </Menu>
      </div>
      <SocialIcons/>
    </Container>
  );
}
