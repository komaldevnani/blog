import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Komal Devnani'
  const siteDescription = 'Komal Devnani is a Software developer and an enthusiastic and fun-loving person'

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
          Hello! I’m a Software Development Engineer. I enjoy creating, designing, and experimenting with things. 
          I’ve also been developing some interesting and meaningful projects.
         
          <p>I’m always interested in becoming a better Engineer, Contributor, Team member, Human and in meeting interesting people.</p>

          I’m happy to welcome you to my website.
          </p>
          <ul className="actions">
            <li>
              <a href="#two" className="button">
                Show More
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1LyM3nzDDYA4eXSi4grpzUvOJyijYXzhh/view?usp=sharing" 
              target="_blank" rel="noreferrer" className="button">
                Resume
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
          I’m open to job opportunities and would love to collab with you. So let’s just connect.          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form name="contact" method="post" data-netlify-honeypot="bot-field" data-netlify="true">
               <input type="hidden" name="form-name" value="contact" />
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
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:komaldevnani00@gmail.com">komaldevnani00</a>
                </li>
                <br/>
                <a href="https://www.hackerrank.com/komaldevnani" className="icon fa-hackerrank fa-lg" title="HackerRank">                  
                  <span className="label">HackerRank</span>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://angel.co/u/komal-devnani" className="icon fa-angellist fa-lg">
                  <span className="label">Angellist</span>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.interviewbit.com/profile/komal.dev" className="icon fa-trophy fa-lg" title="Interviewbit">
                  <span className="label">Interviewbit</span>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.quora.com/profile/Komal-Devnani" className="icon fa-quora fa-lg">
                  <span className="label">Hackerrank</span>
                </a>
              </ul>     
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
