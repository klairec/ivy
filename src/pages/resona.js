import * as React from 'react'
import PageLayout from '../components/pageLayout'
import cover from '../images/resona.png'

const ResonaPage = () => {
  return (
    <PageLayout 
      pageTitle="Tracklist Resona" 
      link="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/662071571&color=%2308ff08&inverse=true&auto_play=false&show_user=true"
      imageSource={cover}
    > 
      <p>00:00 To Remain - Subsided & Jan Nemeček [low income $quad]</p>
      <p>05:36 Saturnine - Rings Around Saturn [brokntoys]</p>
      <p>07:48 What I Can See (feat. Micachu) - Ben Vince [Where To Now?]</p>
      <p>10:40 Dialoq 2 (Timestretch) - Lanark Artefax [Cong Burn]</p>
      <p>13:24 Blooz - Naaahhh [Blackest Ever Black]</p>
      <p>16:40 Dreaming of you - KWC92 [LIES]</p>
      <p>21:03 Perpetuum - Qluster [Bureau B]</p>
      <p>25:10 Time To Tell - Cosey Fanni Tutti [Conspiracy International]</p>
      <p>30:48 City Hearts - Carl Matthews [Bureau B]</p>
      <p>33:45 4G - Neel [Stroboscopic Artefacts]</p>
      <p>39:18 Chaos Engine (Shapednoise Shatter Remix) - Mumdance;Logos [Tectonic]</p>
      <p>45:38 Within My Vulnerable Thoughts - Evitceles [Opal Tapes]</p>
      <p>49:21 People - Tetelepta [ESHU]</p>
      <p>51:25 Slagplum _Rubick V.5 - Brainwaltzera [Furthur Electronix]</p>
    </PageLayout>
  )
}
export default ResonaPage