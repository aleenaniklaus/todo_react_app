import React from "react"
import MainContent from "./components/MainContent"

import './style.css'

//Class component
class App extends React.Component {  
    render() {
        return (        
            <div>
                <MainContent />
            </div>   
        )
    }
}

export default App