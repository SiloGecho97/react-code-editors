import logo from './logo.svg'
import './App.css'
import CodeEditor from './components/CodeEditor'
import Monaco from './components/Monaco'

import React from 'react'
import { Router } from './routes/router'

function App() {
    return (
        <div>
            <Router/>
        </div>
    )
}

export default App
