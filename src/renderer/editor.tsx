// disable eslint for this file
/* eslint-disable */
// @ts-nocheck

import React, { useEffect, useState } from 'react';

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
    <div >
      <textarea id={props.id} class="text-area"></textarea>
    </div>
  );
}

function EditorSaveButton(){

  return (
    <div >
      <button onClick={saveContent} className='save-button'>Save</button>
    </div>
  );
}

export default Editor;
export { EditorSaveButton };
