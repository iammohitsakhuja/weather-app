import { CARD_EXPANDED, CARD_SHRINKED, CARD_DELETED } from './action-types'

const expandCard = id => dispatch => {
  dispatch({
    type: CARD_EXPANDED,
    id,
  })
}

const shrinkCard = () => dispatch => {
  dispatch({
    type: CARD_SHRINKED,
  })
}

const deleteCard = id => dispatch => {
  dispatch({
    type: CARD_DELETED,
    id,
  })
}

export { expandCard, shrinkCard, deleteCard }
