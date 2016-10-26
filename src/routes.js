import React from "react"
import { Route } from "react-router"

import AppContainer from "./AppContainer"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import Page from "./layouts/Page"
import PageError from "./pages/PageError"
import PageLoading from "./pages/PageLoading"
import Homepage from "./pages/Homepage"
import Post from "./layouts/Post"
import Blog from "./pages/Blog"
import About from "./pages/About"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={ {
      Page,
      PageError,
      PageLoading,
      Homepage,
      Post,
      Blog,
      About,
    } }
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
