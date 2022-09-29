import CodeMirror from '@uiw/react-codemirror'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { javascript } from '@codemirror/lang-javascript'
import { python } from '@codemirror/lang-python'

import React from 'react'

const extensions = [javascript({ jsx: true })]

function CodeEditor() {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value)
    }, [])
    return (
        <CodeMirror
            className="w-full"
            value="console.log('This is Codemiror')"
            height="100vh"
            theme={dracula}
            extensions={extensions}
            onChange={onChange}
        />
    )
}
export default CodeEditor
