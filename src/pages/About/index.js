import React from "react"
import { Link } from "react-router"
import Page from "../../layouts/Page"
import about1 from "../../assets/about1.jpg"

import styles from "./index.css"

export default class About extends React.Component {
  render() {
    return (
      <Page { ...this.props }>
        <h2 className={ styles.pageTitle }> { "About Kelly" }</h2>
        <div className={ styles.wrapper }>
          <div className={ styles.about }>
            { "Hello hello, I'm Kelly!" }
            <br /> <br />
            { "I'm 23, live in San Francisco, and am a Software Engineer at Quicken." }
            <br /> <br />
            { "I graduated in June of 2015 from UC San Diego, where I majored in Psychology and Business." }
            <br /> <br />
            { "I'm sure you're asking yourself: 'Wait, but you are a Software Engineer...how?' Well, you can " +
            "read more about that on my blog post - " }
            <Link to="/blog/marketing-to-software" className={ styles.link }>
              { "How I Went from Marketing to Software Engineering" }
            </Link>
            { "." }
            <br /> <br />
            { "I work a lot; when I am not working on work related projects I am working on personal " +
            "projets to advance and broaden my learning." }
            <br /> <br />
            { "Some facts about me:" }
            <br />
            <ul>
              <li>
                { "I love to travel, but have definitely not done enough of it. I have made it my goal to travel " +
                "more in my twenties, especially outside of the country." }
              </li>
              <li>
                { "I love being active, I try to 'sweat everyday', whether it be" +
                " by going on a run, hitting the gym, going to a class, and hiking outdoors." }
              </li>
              <li>
                { "I am the eldest sibling and family is huge to me. Unfortunately we are spead across the US right now, " +
                "but try to see each other as much as possible." }
              </li>
              <li>
                { "I've bounced back and forth between northern and southern California. I was born in San Jose and " +
                "moved to San Diego when I was 15. I then went to UC Davis for my first two years of college before " +
                "transferring to UC San Diego for my last two years of college. I then worked in San Diego for a year " +
                "before moving back to the Bay Area." }
              </li>
              <li>
                { "I am a total health nut. I spend a couple hours every Sunday prepping all of my meals for the upcoming week." }
              </li>
              <li>
                { "My weaknesses are nut butters and cookie dough ice cream, which is unfortunate since dairy doesn't agree with me." }
              </li>
            </ul>

          </div>
          <div className={ styles.sidebar }>
            <img className={ styles.image1 } src={ about1 } alt="Kelly Joyner" />
          </div>
        </div>
      </Page>
    )
  }
}