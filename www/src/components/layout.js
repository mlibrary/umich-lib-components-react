import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import SideNav from './sidenav'
import Header from '../../../packages/header'
import {
  GlobalStyleSheet,
  MEDIA_QUERIES,
  COLORS
} from '../../../packages/styles'
import "../scss/init.scss"
import styled from '@emotion/styled'
import Alert from '../../../packages/alert'
import favicon from '../../static/favicon.ico'

const DocContainer = styled('div')({
  margin: '0 auto',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'grid',
    height: '100vh',
    gridTemplateColumns: 'auto 16rem',
    gridTemplateRows: 'max-content',
    gridTemplateAreas: `
      "header header"
      "main side"
    `
  }
})

const DocMain = styled('div')({
  [MEDIA_QUERIES.LARGESCREEN]: {
    gridArea: 'main',
    justifySelf: 'stretch'
  }
})

const DocMainContent = styled('div')({
  margin: '0 auto',
  padding: '1rem',
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: '2rem 1rem',
    maxWidth: '52rem',
    margin: '0 auto'
  }
})

const StyledHeaderContainer = styled('div')({
  gridArea: 'header'
})

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                slug
              }
              htmlAst
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Design your service using U-M Library styles, components, and patterns.'
            },
            {
              name: 'theme-color',
              content: `${COLORS.blue[600]}`
            }
          ]}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${favicon}`
            }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <GlobalStyleSheet />

        <Alert intent="informational">
          <div style={{
            fontSize: '1rem'
          }}>
            <p>
              <strong style={{ fontWeight: '600' }}>U-M Design System v1 is live!</strong> <a href="https://design-system.lib.umich.edu/">View v1 documentation</a> and upgrade from v0.
            </p>
          </div>
        </Alert>
        <DocContainer>
          <StyledHeaderContainer role="banner">
            <Header name="Design System" />
          </StyledHeaderContainer>
          <SideNav />
          <DocMain>
            <DocMainContent>
              {children}
            </DocMainContent>
          </DocMain>
        </DocContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
