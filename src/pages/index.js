import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import { Image } from "react-bootstrap"
import Seo from "../components/seo"



// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//   },
//   {
//     text: "Examples",
//     url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
//     description:
//       "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     description:
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//   },
// ]

// const samplePageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
//   { text: "TypeScript", url: "using-typescript" },
//   { text: "Server Side Rendering", url: "using-ssr" },
//   { text: "Deferred Static Generation", url: "using-dsg" },
// ]

// const moreLinks = [
//   { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
//   {
//     text: "Documentation",
//     url: "https://gatsbyjs.com/docs/",
//   },
//   {
//     text: "Starters",
//     url: "https://gatsbyjs.com/starters/",
//   },
//   {
//     text: "Showcase",
//     url: "https://gatsbyjs.com/showcase/",
//   },
//   {
//     text: "Contributing",
//     url: "https://www.gatsbyjs.com/contributing/",
//   },
//   { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
// ]

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const BlogLink = styled(Link)`
  text-decoration: none;
`;

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: inherit;
`;

const ContactLink = styled.a`
text-decoration: none;
`;

const IndexPage =  ({ data }) => (
  <Layout>    
    <Seo title="Home" />
    <div>
      <h1> Lenin's animals blog! 🦮 🦅 🐬 </h1>

      <p>
      My name is Lenin and I'm currently working in becoming a fullstack web developer. As a part of my programming practices I'm making this blog with Gatsby to display my favorite animals. As a heads up, I'm a dog person, love sea animals and birds, well that covers a lot! Hope you enjoy it!

      PS: this is a blog in progress... 😊

      If you want, you can check my linkedIn profile with the following <ContactLink href="https://www.linkedin.com/in/lenindelarosa/">link.</ContactLink>

      You can also contact me <ContactLink href="mailto:leninmanueld@gmail.com">here!</ContactLink>
      </p>

      {
        data.allMarkdownRemark.edges.map(({ node })=> (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title}
              </BlogTitle>
              <Image src={node.frontmatter.imageUrl} alt={node.frontmatter.title} fluid rounded/>
            </BlogLink>
            <p>{node.excerpt}</p>
          </div>
        ))
      }
    </div>
  </Layout>
)

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            imageUrl
          }
          fields {
            slug
          }
          excerpt
          children {
            ... on ImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`