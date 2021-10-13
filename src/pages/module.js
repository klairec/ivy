import * as React from 'react'
import PageLayout from '../components/pageLayout'
import cover from '../images/module.png'

const ModulePage = () => {
  return (
    <PageLayout 
      pageTitle="Tracklist Module Show" 
      link="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/829821178&color=%2308ff08&inverse=true&auto_play=false&show_user=true"
      imageSource={cover}
    >
      <p>00:00 Raime - Soil And Colts [BLACKEST EVER BLACK]</p>
      <p>04:52 Kryptic Minds – Six Degree [SWAMP81]</p>
      <p>09:00 Drone - Fear (SP:MC Remix)</p>
      <p>13:10 Circa - Tyrant</p>
      <p>16:50 Boofy, Rocks FOE - SelfDestruct</p>
      <p>19:35 eo eintu - Every Morning [COMIC SANS]</p>
      <p>24:18 James Shinra - Gyorgy [CRAIGIE KNOWES]</p>
      <p>28:07 Christopher Joseph ‎– Nothing69</p>
      <p>32:37 Microthol - Hostile Invasion [TRUST]</p>
      <p>36:00 DL/MS - Cinnamon [FRUSTRATED FUNK]</p>
      <p>40:04 DJ Stingray - Ego Assault</p>
      <p>42:50 Fracture - On Right Now</p>
      <p>46:10 Fracture - Soundboy Get Nervous [EXIT]</p>
      <p>49:23 Sam Binga - Chessington</p>
      <p>52:06 Fixate - Focus [EXIT]</p>
      <p>56:10 Shadow Unit - Jungle</p>
      <p>58:20 Aaron Spectre - Computorr</p>

    </PageLayout>
  )
}
export default ModulePage