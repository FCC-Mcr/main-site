import React from "react"
import styles from "./card.module.scss"

/** Card wrapper component
 * @param { string } className class to add to className string
 * @param { Number } height determines box-shadow strength
 */
const Card = ({ children, className, shadowSize = "large" }) => {
  const shadowClass = shadowSize ? `shadow-${shadowSize}` : ""

  return (
    <div className={`${styles.card} ${className} ${shadowClass}`}>
      {children}
    </div>
  )
}
export default Card
