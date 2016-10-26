import React from "react"

import styles from "./index.css"

const Homepage = () => {
  return (
    <div>
      <div className={ styles.about }>
        <div className={ styles.content }>
          <p className={ styles.header }>
            { " Welcome to My Site!" }
          </p>
          <p className={ styles.subheader }>
            { " Kelly Joyner | Front End Software Engineer" }
          </p>
        </div>
      </div>
      <div className={ styles.pageContent }>
        <div className={ styles.contentSection1 }>
          <p>
            { "Front End Languages" }
          </p>
          { "HTML" }
          <br />
          { "CSS" }
          <br />
          { "JavaScript" }
          <br />
          { "jQuery" }
          <br />
          { "React.js" }
          <br />
          { "LESS" }
          <br />
          { "SASS" }
        </div>
        <div className={ styles.contentSection2 }>
          <p>
            { "Work Related Non-technical Skills" }
          </p>
          { "Product Management" }
          <br />
          { "Project Management" }
          <br />
          { "Estimate, Strategize, Execute " }
          <br />
          { "Time Management" }
        </div>
        <div className={ styles.contentSection3 }>
          <p>
            { "Soft Skills" }
          </p>
          { "Teamwork" }
          <br />
          { "Leadership" }
          <br />
          { "Communication" }
          <br />
          { "Passionate" }
          <br />
          { "Responsible" }
          <br />
          { "Time Management" }
        </div>
      </div>
    </div>
  )
}

export default Homepage

// const Homepage = (props) => {
//   return (
//     <Page { ...props } fullWidth>
//       <div className={ styles.wrapper }>
//         <div className={ styles.top }>
//           <div className={ styles.bg }>
//             <div className={ styles.hero }>
//                 <div className={ styles.headline }>
//                   Welcome Header
//                 </div>
//               </div>
//             </div>
//             <div className={ styles.power }>
//               <span>Content</span>
//             </div>
//           </div>
//         </div>
//     </Page>
//   )
// }
//
// export default Homepage

// const Homepage = (props, { collection }) => {
//   const latestPosts = enhanceCollection(collection, {
//     filter: { layout: "Post" },
//     sort: "date",
//     reverse: true,
//   })
//   .slice(0, numberOfLatestPosts)
//
//   return (
//     <div>
//     <Hero big> HIIII </Hero>
//       <Page { ...props } >
//         <div className={ styles.homepageContent } >
//           <h3>{ "Latest Blog Posts" }</h3>
//           <PagesList pages={ latestPosts } />
//         </div>
//       </Page>
//     </div>
//   )
// }
//
// Homepage.contextTypes = {
//   collection: PropTypes.array.isRequired,
// }
//
// export default Homepage
