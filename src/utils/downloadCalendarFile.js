export default event => {
  let formatTime = time => {
    let date = new Date(time)
    date = date.toISOString()

    let formattedDate = date.replace(/\W/g, "")
    formattedDate = formattedDate.slice(0, -4)

    return `${formattedDate}Z`
  }

  let content = () => `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${formatTime(event.start)}
DTEND:${formatTime(event.end)}
SUMMARY:${event.title}
DESCRIPTION:${event.description.replace(/\r?\n|\r/g, "")}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`

  content()

  let element = document.createElement("a")
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(content())
  )
  element.setAttribute("download", "freecodecamp.ics")

  element.style.display = "none"
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}
