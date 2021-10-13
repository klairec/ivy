import * as React from 'react'
import PageLayout from '../components/pageLayout'
import cover from '../images/rinsePeev.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const RinsePEEVPage = () => {
  return (
    <PageLayout 
      pageTitle="Tracklist Rinse PEEV" 
      link="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/814924108&color=%2308ff08&inverse=true&auto_play=false&show_user=true"
      imageSource={cover}
    >
      <p>00:00 <FontAwesomeIcon icon={faArrowRight}/>&nbsp;01:01:47 PEEV</p>
      <br/>
      <p>01:01:47 ProtoU ‎– The Escape</p>
      <p>01:07:54 Ryo Murakami - Deist [BEDOUIN]</p>
      <p>01:11:11 Rognvald - Tranquilizer</p>
      <p>01:15:15 Scorn - Talk Whiff (feat. Jason Williamson)</p>
      <p>01:19:55 Ossia - Devil's Dance [BLACKEST EVER BLACK]</p>
      <p>01:22:46 Sol Ring - Shadow Heart</p>
      <p>01:25:47 Thegn ‎– Conjure</p>
      <p>01:28:48 Friday Dunard & Ian Hatcher - Ymas Feel Bient [SPA]</p>
      <p>01:33:46 Toxe - Honey Island [PAN]</p>
      <p>01:35:37 iTAL tEK - Ex</p>
      <p>01:39:47 Yosi Horikawa - Wandering</p>
      <p>01:42:58 Drombeg - Handsfuls Of Clay</p>
      <p>01:46:23 Tryphème - Lava [CPU]</p>
      <p>01:49:15 Mingle - Wreck [KVITNU]</p>
      <p>01:52:33 Death Kneel - Moral Inventory [TOTAL BLACK]</p>
      <p>01:55:14 Bobby Jewell - Semi-Metal Framework [BIO FUTURE LABORATORY]</p>
    </PageLayout>
  )
}
export default RinsePEEVPage