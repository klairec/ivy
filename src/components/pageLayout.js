import * as React from 'react'
import { page, back, iframe, content, list } from './pageLayout.module.css'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"


const Layout = ({ pageTitle, children, link, imageSource }) => {
  return (
    <div className={page}>
      <div className={back}>
        <Link to="/" className="goBack"><FontAwesomeIcon icon={faArrowLeft}/>&nbsp;Retour</Link>
      </div>
      <title>{pageTitle}</title>
      <main>
        <div className={iframe}>
          <iframe width="100%" height="20" scrolling="no" frameBorder="no" allow="autoplay" src={link} title={link}></iframe>
          <div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}></div>
        </div>
        <h2>Tracklist</h2>
        <div className={content}>
          <div className={list}>
            {children}
          </div>
          <img src={imageSource} alt="cover"/>
        </div>
      </main>
    </div>
  )
}
export default Layout