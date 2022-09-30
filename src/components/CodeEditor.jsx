import CodeMirror from '@uiw/react-codemirror'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { javascript } from '@codemirror/lang-javascript'
import { python } from '@codemirror/lang-python'
import React, { useState } from 'react'

const extensions = [javascript({ jsx: true }), python()]

function CodeEditor() {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value)
    }, [])
    return (
        <div className="w-full">
            <CodeMirror
                className="w-full"
                value="console.log('This is Codemiror')"
                height="100vh"
                theme={dracula}
                extensions={extensions}
                onChange={onChange}
            />
        </div>
    )
}
export default CodeEditor
