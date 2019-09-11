import React from "react"

import { storiesOf } from "@storybook/react"

import Card from "./"

storiesOf("Card").add(
  "wibble",
  () => (
    <Card>
      <div>will render content in a basic card component.</div>
    </Card>
  ),
  {
    notes: "hi im notes on the cards",
  }
)
