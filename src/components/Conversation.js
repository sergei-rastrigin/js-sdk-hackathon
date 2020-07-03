const Conversation = ({ onClick, text }) => (
    <li
      onClick={onClick}
      style={{

      }}
    >
      {text}
    </li>
  )

  Conversation.propTypes = {
    onClick: PropTypes.func.isRequired
  }

  export default Conversation