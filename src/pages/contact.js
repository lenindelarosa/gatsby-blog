import * as React from "react"
import { Link } from "gatsby"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => (
    <Layout>
      <Seo title="Contact me" />
      <h1>Contact information</h1>
      
      <p>If you are interested in talking with me, I put here below my social medias. I don't bite! </p>

      <a href="https://www.instagram.com/lenindelarosa/"
          className="instagram social">
          <FaInstagram size={30}/>
          &nbsp; 
      </a>
      
      <a href="https://www.linkedin.com/in/lenindelarosa/"
          className="linkedin social">
          <FaLinkedin size={30}/>
          &nbsp; 
      </a>
      
      <a href="https://github.com/lenindelarosa"
          className="github social">
          <FaGithub size={30}/>
          &nbsp; 
      </a>
      <br/>
      <br/>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Contact;
