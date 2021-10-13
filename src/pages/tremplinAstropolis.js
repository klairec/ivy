import * as React from 'react'
import PageLayout from '../components/pageLayout'
import cover from '../images/tremplinAstropolis.png'

const TremplinAstroPage = () => {
  return (
    <PageLayout 
      pageTitle="Tracklist Tremplin Astropolis" 
      link="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/757220389&color=%2308ff08&inverse=true&auto_play=false&show_user=true"
      imageSource={cover}
    >
      <p>00:00 J. G. Biberkopf - Technocracy</p>
      <p>02:20 Acre && Filter Dread ‎– Interference [PAN]</p>
      <p>06:05 Ivo - Cloudnine [CNCPT]</p>
      <p>08:10 Starkey - Technicolor [RWINA]</p>
      <p>10:00 iTAL tEK - Blood Line [PLANET MU]</p>
      <p>13:40 Boylan - Licence [NOMINE SOUND]</p>
      <p>18:01 Vex'd && Search & Destroy - End Of Line [PLANET MU]</p>
      <p>22:54 Sega Bodega ‎– Nivea</p>
      <p>26:06 Y1640 - Spit Intent</p>
      <p>29:50 Om Unit - Patterning</p>
      <p>32:48 Luke Vibert - Don't Fuck Around [PLANET MU]</p>
    </PageLayout>
  )
}
export default TremplinAstroPage