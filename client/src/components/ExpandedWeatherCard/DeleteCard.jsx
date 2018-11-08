import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const DeleteCard = ({ handleClick }) => (
  <section className="delete-card">
    <button type="button" onClick={handleClick}>
      Delete <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  </section>
)

DeleteCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default DeleteCard
