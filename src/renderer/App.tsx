import './App.css';

// Import React dependencies.
import React from 'react';
import Editor from './editor';
import { EditorSaveButton } from './editor';

// Define the App component.
function App() {
  return (

    <div className="editor">
      <div className="toolbar">
        Please enter your text below. This editor supports markdown shortcuts.
      </div>

      <div className="editor-body">
        <Editor id="test" />
      </div>

      <EditorSaveButton />

      <div className="editor-body">
        <Editor id="result-body" />
      </div>

    </div>
  );
}

// export the app
export default App;
