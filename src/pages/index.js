import * as React from 'react'
import './index.css'
import { Link } from 'gatsby'

import electroLabCover from '../images/electroLab.png'
import moduleCover from '../images/module.png'
import rinsePEEVCover from '../images/rinsePeev.png'
import electronicConsortiumCover from '../images/electronicConsortium.png'
import tremplinAstropolisCover from '../images/tremplinAstropolis.png'
import resonaCover from '../images/resona.png'

const IndexPage = () => {
  return (
    <div>
      <div class="titleContainer">
        <h1 class="title">IVY <span>✌️</span></h1>
      </div>
      <div class="bio">
        <p>Amatrice d’ambiances lourdes et breakées, <b>IVY</b> explore quotidiennement et avec exigence les tréfonds des musiques électroniques tout genre confondu pour n’en ressortir que ce qui la fait vibrer au plus au point. Membre du collectif <a href="https://www.facebook.com/Breakboostaaa" target="_blank" rel="noreferrer"><b>BreakBoost</b></a> à Rennes, aux côtés de ses frères d’armes <a href="https://soundcloud.com/schlossc" target="_blank" rel="noreferrer"><b>Schloss</b></a> et <a href="https://soundcloud.com/mi-ntt" target="_blank" rel="noreferrer"><b>MI:NT</b></a>, elle trouve sa famille de coeur et la volonté de partager ses trésors musicaux.<br/>
        Les yeux rivés sur les scènes émergentes du globe, elle fait constamment évoluer ses influences pour ne jamais se lasser ou bien encore pour assouvir sa soif d’expériences sonores.</p>
      </div>
      <div class="podcasts">
        <h1>Podcasts</h1>
        <Link to="/electroLab" class="podcastsLink">
          <img src={electroLabCover} alt="electroLabCover"/>
        </Link>
        <Link to="/module" class="podcastsLink">
          <img src={moduleCover} alt="moduleCover"/>
        </Link>
        <Link to="/rinsePEEV" class="podcastsLink">
          <img src={rinsePEEVCover} alt="rinsePEEVCover"/>
        </Link>
        <Link to="/electronicConsortium" class="podcastsLink">
          <img src={electronicConsortiumCover} alt="electronicConsortiumCover"/>
        </Link>
        <Link to="/tremplinAstropolis" class="podcastsLink">
          <img src={tremplinAstropolisCover} alt="tremplinAstropolisCover"/>
        </Link>
        <Link to="/resona" class="podcastsLink">
          <img src={resonaCover} alt="resonaCover"/>
        </Link>
      </div>
    </div>
  )
}
// Step 3: Export your component
export default IndexPage