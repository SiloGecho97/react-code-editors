import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../components/About'
import CodeEditor from '../components/CodeEditor'
import Monaco from '../components/Monaco'
import ReactHook from '../components/ReactHook'
import HomePage from '../pages/HomePage'

export const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product" element={<Monaco />} />
                    <Route path='/features' element={<ReactHook />} />
                    <Route path="/market" element={<About/>} />
                    <Route path="/company" element={<HomePage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
