import React, { useState, useContext } from "react"

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import ConversationList from '../components/ConversationList'

import NexmoWidget from '../components/NexmoWidget'
import { generateUserToken, generateBEToken } from '../utils/token'

export const UserContext = React.createContext({}); //Initialise

const config = {
    private_key: "",
    application_id: "",
    user_name: ""
}

const userToken = generateUserToken(config)
console.log(userToken)

const App = () => {
    const [user, setUser] = useState();
    const value = { user, setUser }

    return (
        <div>
            <UserContext.Provider value={value}>
                <AddTodo />
                <NexmoWidget token={userToken} />
                <ConversationList />
                <Footer />
            </UserContext.Provider>
        </div>
    )
}

export default App
