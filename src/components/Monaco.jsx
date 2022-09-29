import React from 'react'
import MonacoEditor from '@uiw/react-monacoeditor'

function Monaco() {
    return (
        <MonacoEditor
            height="100vh"
            width="50%"
            language="javascript"
            value="<h1>I ♥ react-monacoeditor</h1>"
            options={{
                theme: 'vs-dark',
            }}
        />
    )
}

export default Monaco
