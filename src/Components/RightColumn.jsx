import React from "react"
import SalesItem from "./SalesItem"
import WebAnalytics from "./WebAnalytics"
import ScoreList from "./ScoreList"

const RightColumn = () => {
  return (
    <section className="w-full p-2">
      <SalesItem />
      <WebAnalytics />
      <ScoreList />
    </section>
  )
}

export default RightColumn
