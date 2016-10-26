import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import { Link } from "react-router"

import Page from "../../layouts/Page"
import AuthorCTA from "../../fragments/Author"

import styles from "./index.css"

const numberOfLatestPosts = 6

export default class BlogPage extends React.Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }
  renderBlogPreview(page, i) {
    return (
      <div key={ page.title + "-" + i } className={ styles.post }>
        <div className={ styles.content }>
          <Link className={ styles.title } to={ page.__url }>
            <h3>{ page.title }</h3>
          </Link>
          <div className={ styles.description }>
            { page.description }
          </div>
        </div>
      </div>
    )
  }
  render() {
    const latestPosts = enhanceCollection(this.context.collection, {
      filter: { layout: "Post" },
      sort: "date",
      reverse: true,
    })
      .slice(0, numberOfLatestPosts)
    return (
      <Page {...this.props}>
        <h2 className={ styles.pageTitle }> { "Kelly's Blog" }</h2>
        <div className={ styles.wrapper }>
          <div className={ styles.postList }>
            { latestPosts.map((page, i) => (
              this.renderBlogPreview(page, i)
            )) }
          </div>
          <div className={ styles.sidebar }>
            <AuthorCTA />
          </div>
        </div>
      </Page>
    )
  }
}

// const Homepage = (props, { collection }) => {
//   const latestPosts = enhanceCollection(collection, {
//     filter: { layout: "Post" },
//     sort: "date",
//     reverse: true,
//   })
//     .slice(0, numberOfLatestPosts)
//
//   return (
//     <Page { ...props }>
//       <h2>{ "Latest Posts" }</h2>
//         <div className={ styles.wrapper }>
//           <div className={ styles.postList }>
//
//             <PagesList pages={ latestPosts } />
//           </div>
//         </div>
//     </Page>
//   )
// }
//
// Homepage.contextTypes = {
//   collection: PropTypes.array.isRequired,
// }
//
// export default Homepage
