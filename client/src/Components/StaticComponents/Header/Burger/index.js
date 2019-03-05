import React, {Component} from 'react'
import './style.css';
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import {Link} from "react-router-dom";

class MenuContent extends Component {
    state = {
        linkArray: [
            {link: "/", name: "Публикации"},
            {link: "/publish", name: "Опубликовать"},
            {link: "/users", name: "Пользователи"}
        ]
    };

    render() {
        const {linkArray} = this.state;
        return (
            <div className="menu-item">
                {linkArray.map((el, i) => {
                    return (
                        <Link
                            key={i}
                            to={el.link}
                            onClick={this.props.closeCallback}
                        >
                            {el.name}
                        </Link>
                    )
                })}
            </div>
        )
    }
}

export default class Burger extends Component {

    state = {
        menuOpen: false,
    };

    openMenu() {
        this.setState({menuOpen: true})
    }

    closeMenu() {
        this.setState({menuOpen: false})
    }

    render() {
        return (
            <div className="mobile_burger">
                <CheeseburgerMenu
                    isOpen={this.state.menuOpen}
                    closeCallback={this.closeMenu.bind(this)}>
                    <MenuContent closeCallback={this.closeMenu.bind(this)}/>
                </CheeseburgerMenu>
                <HamburgerMenu
                    isOpen={this.state.menuOpen}
                    menuClicked={this.openMenu.bind(this)}
                    width={25}
                    height={15}
                    strokeWidth={3}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.2}
                />
            </div>
        )
    }
}