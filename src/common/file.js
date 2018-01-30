import React from 'react'

function write(text, fileType, fileName) {
  // src: https://gist.github.com/danallison/3ec9d5314788b337b682
  var blob = new Blob([text], { type: fileType });

  var a = document.createElement('a');
  a.download = fileName;
  a.href = URL.createObjectURL(blob);
  a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
}


function upload(label, onUpload, id) {
  // src: https://github.com/Semantic-Org/Semantic-UI-React/issues/2103
  let fileInput = null;
  // If no id was specified, generate a random one
  const uid = id || Math.random().toString(36).substring(7);

  return (
    <span>
      <label htmlFor={uid} className="ui icon large button">
        <i className="upload icon"></i> {label}
      </label>
      <input type="file"
        id={uid}
        accept=".json"
        style={{display: "none"}}
        onChange={() => {
          let file = fileInput.files[0];
          var reader = new FileReader();

          reader.onload = function(e) {
            window.wallet = JSON.parse(reader.result);
            //callback
            onUpload();
          }

          console.log("file got");
          console.log(file);
          if(file) reader.readAsText(file);
        }}
        ref={input => {
          fileInput = input;
        }}
      />
    </span>
  );
}



export { write, upload };
