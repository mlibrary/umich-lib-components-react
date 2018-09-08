import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import SideNav from 'sidenav'
import getSideNavData from '../../utils/get-side-nav-data'
import { Header, Alert } from 'umich-lib-components-react'
import WindowSize from "@reach/window-size";

import "../scss/init.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
        allSideNavPagesYaml {
          edges {
            node {
              page
              pages
            }
          }
        }
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                name
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
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="docs-header-container">
          <Header name="Design System" />
          <Alert>This project is in development and not recommended for production use.</Alert>
        </div>
        <WindowSize>
          {(size) => (
            <React.Fragment>
              {(() => {
                const largeScreen = size.width > 620 ? true : false
                const cn = largeScreen ? "docs docs--large-screens" : "docs"

                return (
                  <div className={cn}>
                    <SideNav data={getSideNavData(data)} largeScreen={largeScreen} />
                    <div className="docs__content">
                      <div className="docs__content-inner y-spacing">
                        {children}
                      </div>
                    </div>
                  </div>
                )
              })()}
            </React.Fragment> 
           )}
        </WindowSize>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout