import React from "react"
import { Link } from "react-router"

import handleClickAway from "../../utils/handleClickAway"
import styles from "./index.css"
import Svg from "react-svg-inline"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"

export default class Header extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      openMobileNav: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.closeMobileNav = this.closeMobileNav.bind(this)
  }
  componentDidMount() {
    document.body.addEventListener("click", this.closeMobileNav)
  }
  componentWillUnmount() {
    document.body.removeEventListener("click", this.closeMobileNav)
  }
  closeMobileNav(e) {
    const toggle = this.refs.toggle
    const outsideClick = handleClickAway(toggle, e)
    if (toggle && outsideClick) {
      this.setState({
        openMobileNav: false,
      })
    }
  }
  handleClick() {
    this.setState({
      openMobileNav: !this.state.openMobileNav,
    })
  }
  render() {
    const { openMobileNav } = this.state
    const mobileNav = (openMobileNav) ? styles.open : ""
    const openClass = (openMobileNav) ? styles.animate : ""
    return (
      <header className={ styles.header }>
        <div className={ styles.bumper } />
        <div className={ styles.navFixed }>
          <div className={ styles.navWrapper }>
            <div className={ styles.navLeft }>
              <Link to="/" className={ styles.link }>
                { "Home" }
              </Link>
            </div>

            <div ref="toggle" onClick={ this.handleClick } className={ styles.toggle }>
              <div className={ styles.ham }>
                <div className={ styles.bar + " " + openClass }></div>
              </div>
            </div>

            <nav className={ styles.navRight + " " + mobileNav }>
              <ul className={ styles.navItems }>
                <li className={ styles.navItem }>
                  <Link to="/about" className={ styles.link }>
                    { "About" }
                  </Link>
                </li>
                <li className={ styles.navItem }>
                  <Link to="/blog" className={ styles.link }>
                    { "Blog" }
                  </Link>
                </li>
                <li className={ styles.navItem }>
                  <a href="https://www.linkedin.com/in/joynerkelly" target="_blank" className={ styles.link }>
                    { "LinkedIn" }
                  </a>
                </li>
                <li className={ styles.navItem }>
                  <a href="https://www.github.com/kellyjoyner" target="_blank" className={ styles.link }>
                    <Svg svg={ gitHubSvg } cleanup />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}
