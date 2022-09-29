import logo from './logo.svg'
import './App.css'
import CodeEditor from './components/CodeEditor'
import Monaco from './components/Monaco'

function App() {
    return (
        <div className="flex">
            <CodeEditor />
            <Monaco />
        </div>
    )
}

export default App
