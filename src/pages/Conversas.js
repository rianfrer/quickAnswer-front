import React from "react";
import { ChatEngine } from 'react-chat-engine'
import '../styles/Conversas.css';

function Conversas() {
    return (
        <div>
            <ChatEngine
                height="100vh"
                projectID='9cef1784-6789-4e99-bf7b-3f4106620650'
                userName='admin'
                userSecret='1234'
            />
        </div>
    )
}

export default Conversas