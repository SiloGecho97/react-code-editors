import React from 'react'
import MonacoEditor from '@uiw/react-monacoeditor'

function Monaco() {
    return (
        <MonacoEditor
            height="100vh"
            language="javascript"
            value="let i = 'I ♥ react-monacoeditor';"
            options={{
                theme: 'vs-dark',
            }}
        />
    )
}

export default Monaco
