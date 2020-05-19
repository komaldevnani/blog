import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://twitter.com/komal_devnani" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/komaldevnani" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/innovativekomal" className="icon fa-facebook">
            <span className="label">Dribbble</span>
          </a>
        </li>
        <li>
          <a href="mailto:komaldevnani00@gmail.com" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>Powered by <a href="https://github.com/codebushi/gatsby-starter-strata">gatsby</a></li>
      </ul>
    </div>
  </div>
)

export default Footer
