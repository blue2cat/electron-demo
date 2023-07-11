import './App.css';


// Import React dependencies.
import React, { useState } from 'react';

// Import the Slate components and React plugin.
import { withReact, ReactEditor } from 'slate-react';
import { BaseEditor, createEditor } from 'slate';
import Editor from './editor';

// Define our own custom set of helpers.
type CustomText = { text: string };
type CustomElement = { type: 'paragraph'; children: CustomText[] };

// Define our own custom editor.
declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

function App() {
  const [editor] = useState(() => withReact(createEditor()))
  return (
    <div className="editor">
      <div className="toolbar">
        Please enter your text below. This editor supports markdown shortcuts.
      </div>
      <div className="editor-body">
        <Editor editor={editor} />
      </div>
    </div>
  );
}

// export the app
export default App;
