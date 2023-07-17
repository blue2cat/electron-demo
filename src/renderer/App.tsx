import './App.css';
import { EditorSaveButton, Editor, Results } from './editor';

// Define the App component.
function App() {
  return (

    <div class="editor">
      <div class="toolbar">
        Please enter your text below. This editor supports markdown shortcuts.
      </div>

      <div class="editor-body">
        <Editor id="test" />
      </div>

      <EditorSaveButton />

      <div class="editor-body">
        <Results id="result-body" />
      </div>

    </div>
  );
}

// export the app
export default App;
