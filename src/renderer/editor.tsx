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
    <textarea id={props.id} class="text-area-editor"></textarea>
  );
}

function EditorSaveButton(){
  return (
    <div >
      <button onClick={saveContent} class='save-button'>Save</button>
    </div>
  );
}

export { EditorSaveButton, Editor, Results };
