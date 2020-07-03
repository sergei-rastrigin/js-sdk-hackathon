import React from 'react'
import PropTypes from 'prop-types'

const Conversation = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

conversation.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Todo
