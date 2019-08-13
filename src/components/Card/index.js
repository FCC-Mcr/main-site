import React from "react"
import styles from "./card.module.scss"

/** Card wrapper component
 * @param { string } className class to add to className string
 * @param { Number } height determines box-shadow strength
 */
const Card = ({ children, className, height = 0 }) => {
  const shadowClass = height > 0 ? `u-shadow--${height}` : ""
  return (
    <div className={`${styles.card} ${className} ${shadowClass}`}>
      {children}
    </div>
  )
}
export default Card
