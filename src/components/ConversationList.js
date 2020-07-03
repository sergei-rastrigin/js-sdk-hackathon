import React, { useState, useContext, useEffect } from "react"
import NexmoClient from 'nexmo-client'
import axios from 'axios';

function App() {
  const [data, setData] = useState({ conversations: [] });

  useEffect(async () => {
    const result = await window.nexmoApp

    setData(result.data);
  });

const ConversationList = (conversations) => {
    const { user, setUser } = useContext(UserContext)

    return (
            conversations.map((conversation) => {
                <Conversation key={conversation.id} {...conversation} onClick={() => enterConversation(conversation.id)} />
            })
        )
    }
}

export default ConversationList