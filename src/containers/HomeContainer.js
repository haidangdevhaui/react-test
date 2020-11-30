import React from "react"
import { connect } from "react-redux"
import HomeComponent from "../components/HomeComponent"

const HomeContainer = () => {
  return <HomeComponent />
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)