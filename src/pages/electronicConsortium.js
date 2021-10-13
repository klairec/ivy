import * as React from 'react'
import PageLayout from '../components/pageLayout'
import cover from '../images/electronicConsortium.png'

const ElectronicConsortiumPage = () => {
  return (
    <PageLayout 
      pageTitle="Tracklist Electronic Consortium" 
      link="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/783031561&color=%2308ff08&inverse=true&auto_play=false&show_user=true"
      imageSource={cover}
    >
      <p>00:00 Distance - Fallen (Vex'd Remix) [PLANET MU]</p>
      <p>04:44 iTAL tEK ‎– Massive Error [PLANET MU]</p>
      <p>08:40 dBridge - Digital Dread [SENTRY]</p>
      <p>12:53 Akkord - RCVR [HOUNDSTOOTH]</p>
      <p>17:27 Aaron Spectre - Say More Fire</p>
      <p>23:10 Objekt - Ganzfeld</p>
      <p>27:34 Luke Vibert - Knockout [PLANET MU]</p>
      <p>32:13 iTAL tEK ‎– Ultra [PLANET MU]</p>
      <p>35:10 DJ Rashad - Pass That Shit (feat. Spinn & Taso) [HYPERDUB]</p>
      <p>38:33 Machinedrum - Gunshotta</p>
      <p>41:53 Commix - Belleview (dBridge Belle-Rewiewed Remix) [METALHEADZ]</p>
      <p>46:05 Rognvald - Whistle Posse</p>
    </PageLayout>
  )
}
export default ElectronicConsortiumPage