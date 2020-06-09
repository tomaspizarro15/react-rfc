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

        headerTools: {
            store: {
                title: "Store",
                href: "/features/store"
            },
            groups: {
                title: "Groups",
                href: "/featured/groups"
            },
            gallery: {
                title: "Gallery",
                href: "/featured/gallery"
            }
        }
    }

    render() {

        let auth = false; 
        let headerTools = []; 

        if(auth === false){

            const headerTools = {...this.state.headerTools}; 
            const headerArray = []
            for(let id in headerTools){

              headerArray.push(
                  {href : headerTools[id].href}
              )
                
            }

        }

        for (let id in this.state.headerTools) {

            headerTools.push({
            ...this.state.headerTools[id],
                id: id,
            })
            
        }
        return (
            <div className="app_header">
                <div className="header_logo"><NavLink to ="/">RFC</NavLink></div>
                <div className="header_search_bar">
                    <SearchBar />
                </div>
                <div className="header_tools">
                   <NavLink to = "/features/store">Features</NavLink>
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