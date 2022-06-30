import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => (
    <Layout>
      <Seo title="Page two" />
      <h1>Contact information</h1>
      
      <p>If you are interested in talking with me, I put here below my social medias. I don't bite! </p>

      <a href="https://www.instagram.com/lenindelarosa/"
          className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          &nbsp; 
      </a>
      
      <a href="https://www.linkedin.com/in/lenindelarosa/"
          className="linkedin social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          &nbsp; 
      </a>
      
      <a href="https://github.com/lenindelarosa"
          className="github social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          &nbsp; 
      </a>
  <br/>
  <br/>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Contact;
