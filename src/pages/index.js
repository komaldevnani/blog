import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Komal Devnani | Personal blog'
  const siteDescription = 'Komal Devnani is a web developer with excellent design sense.'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Get to know me before dive into my content
            </h2>
          </header>
          <p>
            I am a computer science undergraduate student and a web developer who like to dig deep into the concepts and foundations. 
            The languages i focus most on are Python and Ruby with having some knowledge of java and c++.
            I'am happy to welcome you on my page. 
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="https:/github.com/komaldevnani" className="button">
                Show more
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            Would you like to know me more or you have any questions, do leave a message below. Also i'm open for job opportunities and would like to know if you have something for me.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" netlify-honeypot="bot-field" data-netlify="true">
               <input type="hidden" name="bot-field" />
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  7597290832
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:komaldevnani00@gmail.com">komaldevnani00@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
