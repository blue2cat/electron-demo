// disable eslint for this file
/* eslint-disable */
// @ts-nocheck
function saveContent() {
  try {
    let content = document.getElementById('test').value;

    console.log(content);

    if (content != null){
      document.getElementById('result-body').innerHTML = content;
    }


  } catch (error) {
    console.log(error);
  }
}

function Editor(props){
  return (
      <textarea id={props.id} class="text-area-editor"></textarea>
  );
}

function Results(props){
  return (
      <div id={props.id} class="text-area-results"></div>
  );
}

function EditorSaveButton(){

  return (
    <div >
      <button onClick={saveContent} class='save-button'>Save</button>
    </div>
  );
}

export default Editor;
export { EditorSaveButton, Editor, Results };
