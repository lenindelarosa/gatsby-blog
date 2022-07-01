/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header";
import "./layout.css";
import NavBar from "./navbar";
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: #fcfcfc;
  opacity: 1;
  background-image:  radial-gradient(#20bb15 1.4500000000000002px, transparent 1.4500000000000002px), radial-gradient(#20bb15 1.4500000000000002px, #fcfcfc 1.4500000000000002px);
  background-size: 58px 58px;
  background-position: 0 0,29px 29px;
  min-height: 650px;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <PageContainer>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <NavBar />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: `var(--size-content)`,
            padding: `var(--size-gutter)`,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              marginTop: `var(--space-5)`,
              fontSize: `var(--font-sm)`,
              // position: `absolute`,
              // bottom: `0`,
              // width: `100%`,
              // height: `2.5rem`,
            }}
          >
            © {new Date().getFullYear()} &middot; Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </PageContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
