import React, { PropTypes } from "react"
import { Link } from "react-router"

import Block from "../../components/Block"

import styles from "./index.css"

const AuthorCTA = (props) => {
  return (
    <Block className={ props.className } style={ props.style }>
      <h3>
        { "About Kelly Joyner" }
      </h3>
      <p>
        { "23 | Software Engineer | San Francisco" }
      </p>
      <p>
        <Link to="/about" className={ styles.link }>
          { "Read More" }
        </Link>
      </p>
    </Block>
  )
}

AuthorCTA.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}
export default AuthorCTA
