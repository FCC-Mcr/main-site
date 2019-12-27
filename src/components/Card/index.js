import React from "react"
import styles from "./card.module.scss"

/** Card wrapper component
 * @param { string } className class to add to className string
 * @param { Number } height determines box-shadow strength
 */
const Card = ({ children, className, shadowType = "large" }) => {
  const shadowClass = shadowType ? `shadow-${shadowType}` : ""

  return (
    <div
      className={`${styles.card} ${className ? className : ""} ${shadowClass}`}
    >
      {children}
    </div>
  )
}
export default Card
