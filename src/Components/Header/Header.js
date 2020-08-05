import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import HeaderTools from './HeaderTools/HeaderTools';
import SearchBar from './HeaderInput/SearchBar';
import BurgerButton from './BurgerButton/BurgerButton';
import ProfileButton from './ProfileButton/ProfileButton';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    state = {
        headerTools: [
            {
                title  : 'Features',
                path: '/features/store',
            },

            {
                title  : 'Log In',
                path: '/login',
            }

        ]

    }

    render() {

        let auth = false;
        let featuredTools = [];
        let tools = [];
        if (auth === false) {

            const featuredTools = { ...this.state.featuredTools };
            const headerArray = []
            for (let id in featuredTools) {

                headerArray.push(
                    { href: featuredTools[id].href }
                )
            }
        }

        for (let id in this.state.featuredTools) {
            featuredTools.push({
                ...this.state.featuredTools[id],
                id: id,
            })
        }



        return (
            <div className="app_header">
                <div className="header_logo"><NavLink to="/">RFC</NavLink></div>
                <div className="header_search_bar">
                    <SearchBar />
                </div>
                <div className="header_tools">
                    {this.state.headerTools.map(headerTool => {
                        console.log("Header tools", headerTool.path)
                        return (
                        <NavLink to={headerTool.path}>{headerTool.title}</NavLink>
                        )
                    })}
                </div>
                <div className="header_profile_button">
                    <ProfileButton />
                </div>
                <div className="header_burger_button">
                    <BurgerButton />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {

    return {
        results: state.results,
    }
}

export default connect(mapStateToProps)(Header); 