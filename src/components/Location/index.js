import React, { useState } from "react"
import { Helmet } from "react-helmet"
import styles from "./location.module.scss"

import trainIcon from "../../icons/train.svg"
import trainIconActive from "../../icons/train-active.svg"

const Index = props => {
  // Victoria set as default
  const [mapParams, setMapParams] = useState(
    "pb=!1m28!1m12!1m3!1d2373.9709573612404!2d-2.242887684160674!3d53.48684873000868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x487bb1c7b5629105%3A0xb97cf304dc092fdb!2sVictoria%20Station%2C%20Manchester!3m2!1d53.4876223!2d-2.2415118!4m5!1s0x487bb1c79ec42665%3A0xb5b47150c72a31fc!2sFederation%20House%2C%202%20Federation%20St%2C%20Manchester%20M4%204BF!3m2!1d53.4861449!2d-2.2399169999999997!5e0!3m2!1sen!2suk!4v1575225138582!5m2!1sen!2suk"
  )

  const [active, setActive] = useState("Victoria")

  let locations = [
    {
      location: "Victoria",
      param:
        "pb=!1m28!1m12!1m3!1d2373.9709573612404!2d-2.242887684160674!3d53.48684873000868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x487bb1c7b5629105%3A0xb97cf304dc092fdb!2sVictoria%20Station%2C%20Manchester!3m2!1d53.4876223!2d-2.2415118!4m5!1s0x487bb1c79ec42665%3A0xb5b47150c72a31fc!2sFederation%20House%2C%202%20Federation%20St%2C%20Manchester%20M4%204BF!3m2!1d53.4861449!2d-2.2399169999999997!5e0!3m2!1sen!2suk!4v1575225138582!5m2!1sen!2suk",
    },
    {
      location: "Picadilly",
      param:
        "pb=!1m28!1m12!1m3!1d9497.097362463872!2d-2.2440940558761304!3d53.48142783011928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x487a52b13f7d5d27%3A0xf0c99a43ee1b2864!2sManchester%20Piccadilly%2C%20Manchester!3m2!1d53.477374999999995!2d-2.230908!4m5!1s0x487bb1c79ec42665%3A0xb5b47150c72a31fc!2sFederation%20House%2C%202%20Federation%20St%2C%20Manchester%20M4%204BF!3m2!1d53.4861449!2d-2.2399169999999997!5e0!3m2!1sen!2suk!4v1575225254583!5m2!1sen!2suk",
    },
    {
      location: "Oxford Road",
      param:
        "pb=!1m28!1m12!1m3!1d9497.378565667312!2d-2.2469621058768334!3d53.48017163011533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x487bb1ebbb4abcf3%3A0xa6c64f5caf9c42ff!2sOxford%20Road%2C%20Oxford%20Road%2C%20Manchester!3m2!1d53.4740579!2d-2.2422272!4m5!1s0x487bb1c79ec42665%3A0xb5b47150c72a31fc!2sFederation%20House%2C%202%20Federation%20St%2C%20Manchester%20M4%204BF!3m2!1d53.4861449!2d-2.2399169999999997!5e0!3m2!1sen!2suk!4v1575225298469!5m2!1sen!2suk",
    },
    {
      location: "Deansgate",
      param:
        "pb=!1m28!1m12!1m3!1d9497.365761417484!2d-2.2546815558768625!3d53.48022883011558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x487bb1e6281dd63f%3A0xf540b03ce1c8a95c!2sDeansgate%2C%20Manchester!3m2!1d53.4741723!2d-2.251!4m5!1s0x487bb1c79ec42665%3A0xb5b47150c72a31fc!2sFederation%20House%2C%202%20Federation%20St%2C%20Manchester%20M4%204BF!3m2!1d53.4861449!2d-2.2399169999999997!5e0!3m2!1sen!2suk!4v1575225330227!5m2!1sen!2suk",
    },
  ]

  return (
    <div className={styles.location}>
      <Helmet>
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" />
      </Helmet>
      <h2 className="large-text">Location</h2>
      <div className={`${styles.map} shadow-large`}>
        <ul className={`${styles.selector} px-1`}>
          {locations.map(({ location, param }, index) => (
            <li
              key={index}
              onClick={e => {
                setMapParams(param)
                setActive(location)
              }}
              className={active === location ? styles.active : ""}
            >
              {active === location ? (
                <img src={trainIconActive} alt="" />
              ) : (
                <img src={trainIcon} alt="" />
              )}
              <span>{location}</span>
            </li>
          ))}
        </ul>
        <div className={styles.wrap}>
          <iframe
            title="google maps"
            src={`https://www.google.com/maps/embed?${mapParams}`}
            frameBorder="0"
            style={{
              border: 0,
            }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Index
