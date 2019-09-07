import React, { useState } from "react"
import { Helmet } from "react-helmet"
import styles from "./location.module.scss"

import trainIcon from "../../icons/train.svg"
import trainIconActive from "../../icons/train-active.svg"

const index = props => {
  // Victoria set as default
  const [mapParams, setMapParams] = useState(
    "pb=!1m28!1m12!1m3!1d8040.475167502979!2d-2.248156931839827!3d53.48747948318092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x487bb1c7b5629105%3A0xb97cf304dc092fdb!2sVictoria+Station%2C+Manchester!3m2!1d53.4876223!2d-2.2415118!4m5!1s0x487bb1beb3938f8f%3A0x49dc3fe46f3357d3!2sThe+Hive%2C+51+Lever+St%2C+Manchester+M1+1FN!3m2!1d53.4833089!2d-2.2329376!5e0!3m2!1sen!2suk!4v1566148827358!5m2!1sen!2suk"
  )

  const [active, setActive] = useState("Victoria")

  let locations = [
    {
      location: "Victoria",
      param:
        "pb=!1m28!1m12!1m3!1d8040.475167502979!2d-2.248156931839827!3d53.48747948318092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x487bb1c7b5629105%3A0xb97cf304dc092fdb!2sVictoria+Station%2C+Manchester!3m2!1d53.4876223!2d-2.2415118!4m5!1s0x487bb1beb3938f8f%3A0x49dc3fe46f3357d3!2sThe+Hive%2C+51+Lever+St%2C+Manchester+M1+1FN!3m2!1d53.4833089!2d-2.2329376!5e0!3m2!1sen!2suk!4v1566148827358!5m2!1sen!2suk",
    },
    {
      location: "Picadilly",
      param:
        "pb=!1m28!1m12!1m3!1d4748.669514059809!2d-2.2368868221792275!3d53.48034825475338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x487a52b13f7d5d27%3A0xf0c99a43ee1b2864!2sManchester+Piccadilly%2C+Manchester+M60+7RA!3m2!1d53.477374999999995!2d-2.230908!4m5!1s0x487bb1beb3938f8f%3A0x49dc3fe46f3357d3!2sThe+Hive%2C+Lever+Street%2C+Manchester!3m2!1d53.4833089!2d-2.2329376!5e0!3m2!1sen!2suk!4v1566156949397!5m2!1sen!2suk",
    },
    {
      location: "Oxford Road",
      param:
        "pb=!1m28!1m12!1m3!1d4748.855146037984!2d-2.242076722179523!3d53.478689705001514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x487bb1ebbb4abcf3%3A0xa6c64f5caf9c42ff!2sOxford+Road%2C+Oxford+Road%2C+Manchester!3m2!1d53.4740579!2d-2.2422272!4m5!1s0x487bb1beb3938f8f%3A0x49dc3fe46f3357d3!2sThe+Hive%2C+Lever+Street%2C+Manchester!3m2!1d53.4833089!2d-2.2329376!5e0!3m2!1sen!2suk!4v1566157731025!5m2!1sen!2suk",
    },
    {
      location: "Deansgate",
      param:
        "pb=!1m28!1m12!1m3!1d4748.84874403667!2d-2.2462927721794745!3d53.478746904993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x487bb1e6281dd63f%3A0xf540b03ce1c8a95c!2sDeansgate%2C+Manchester!3m2!1d53.4741723!2d-2.251!4m5!1s0x487bb1beb3938f8f%3A0x49dc3fe46f3357d3!2sThe+Hive%2C+Lever+Street%2C+Manchester!3m2!1d53.4833089!2d-2.2329376!5e0!3m2!1sen!2suk!4v1566157831459!5m2!1sen!2suk",
    },
  ]

  return (
    <div className={styles.location}>
      <Helmet>
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" />
      </Helmet>
      <h2>Location</h2>
      <div className={`${styles.map} u-shadow--3`}>
        <ul className={`${styles.selector} px-1 py-1 u-shadow--2`}>
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

export default index
