import React from 'react'
import propTypes from 'prop-types'
import { AutoComplete } from 'antd'

// Render search bar according to state
const SearchBar = ({ state, dataSource, handleSelect, handleSearch }) => {
  if (!state) {
    return null
  }

  return (
    <AutoComplete
      allowClear
      autoFocus
      dataSource={dataSource}
      onSelect={handleSelect}
      onSearch={handleSearch}
      optionLabelProp="label"
      placeholder="City, state, country"
    />
  )
}

SearchBar.propTypes = {
  state: propTypes.bool.isRequired,
  dataSource: propTypes.arrayOf(propTypes.element).isRequired,
  handleSelect: propTypes.func.isRequired,
  handleSearch: propTypes.func.isRequired,
}

export default SearchBar
