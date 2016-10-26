import React, { PropTypes } from "react"
import cx from "classnames"

import Content from "../../components/Content"

import styles from "./index.css"

const Hero = (props) => (
  <div>
    <div className={ cx({
      [styles.container]: true,
      [styles.big]: props.big,
      [styles.small]: props.small,
      [styles.tiny]: props.tiny,
    }) }
    >
    <Content>
      { props.children }
    </Content>
    </div>
  </div>
)

Hero.propTypes = {
  children: PropTypes.node,
  big: PropTypes.bool,
  small: PropTypes.bool,
  tiny: PropTypes.bool,
}

export default Hero