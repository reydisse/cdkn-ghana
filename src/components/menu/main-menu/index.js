import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import { HeaderNavigationArea, Navbar, Navitem, Socials } from "./style";

const MainMenu = ({ allmenuData }) => {
    const menuarr = allmenuData;
    return (
        <HeaderNavigationArea>
            {/* Add social media links here */}
            {/* <Socials>
                <li>
                    <a
                        className="color-twitter"
                        href="https://twitter.com/cdknghana"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="social_twitter"></i>
                    </a>
                </li>
                <li>
                    <a
                        className="color-linkedin"
                        href="https://www.linkedin.com/company/climate-and-development-knowledge-network/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="social_linkedin"></i>
                    </a>
                </li>
                <li>
                    <a
                        className="color-dribbble"
                        href="https://www.instagram.com/cdkn_ghana/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="social_instagram"></i>
                    </a>
                </li>
                <li>
                    <a
                        className="color-pinterest"
                        href="https://www.youtube.com/channel/UCjUGT9Xbqcb20ELeF-ElTmA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="social_youtube"></i>
                    </a>
                </li>
                <li>
                    <a
                        className="color-facebook"
                        href="https://www.facebook.com/cdknghana/?_rdc=1&_rdr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="social_facebook"></i>
                    </a>
                </li>
            </Socials> */}
            <Navbar className="main-menu">
                {menuarr.map((menu) => {
                    const hasSubmenu = menu.node.isSubmenu ? true : false;
                    const submenu = menu.node.submenu;
                    return (
                        <Navitem
                            key={`menu-${menu.node.id}`}
                            className={`${hasSubmenu ? "has-submenu" : ""}`}
                        >
                            <Link activeClassName="active" to={menu.node.link}>
                                {menu.node.text}
                            </Link>
                            {submenu && (
                                <ul className="submenu-nav">
                                    {submenu.map((submenu, i) => {
                                        return (
                                            <Navitem key={`submenu${i}`}>
                                                <Link to={submenu.link}>
                                                    {submenu.text}
                                                </Link>
                                            </Navitem>
                                        );
                                    })}
                                </ul>
                            )}
                        </Navitem>
                    );
                })}
            </Navbar>
        </HeaderNavigationArea>
    );
};

MainMenu.propTypes = {
    allmenuData: PropTypes.array,
};

export default MainMenu;
