import React from 'react'
import PropTypes from 'prop-types'

import '../base.css'

const PageTemplate = ({ header, children }) => {
  return (
    <div className="app-wrapper">
      <header className="header-wrapper">{header}</header>
      <div className="content-wrapper">{children}</div>
    </div>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
}

export default PageTemplate
