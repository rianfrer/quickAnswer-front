import React from "react";
import { ChatEngine } from 'react-chat-engine'
import '../styles/Conversas.css';
import Navbar from '../components/Navbar'


function Conversas() {
    return (
        <>
        <Navbar />
            <div>
                <ChatEngine
                    height="85vh"
                    projectID='078ffa28-018c-4690-b387-0e1c545186c1'
                    userName='daniel'
                    userSecret='admin'
                />
            </div>
        </>
    )
}

export default Conversas