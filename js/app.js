function initNote(){return txtbox=document.getElementById("memo"),txtbox.value=localStorage.getItem("txt"),txtbox}function addListen(){var e=document.getElementsByClassName("btn-newnote"),t=document.getElementsByClassName("btn-savenote"),n=document.getElementsByClassName("btn-downloadnote"),o=document.getElementsByClassName("btn-about"),l=document.getElementsByClassName("btn-fullscreen");console.log(e),e[0].addEventListener("click",clrNote),t[0].addEventListener("click",saveNote),n[0].addEventListener("click",downNote),o[0].addEventListener("click",About),l[0].addEventListener("click",fullscreen)}function clrNote(e){console.log("새노트"),txtbox.value=""}function saveNote(e){localStorage.setItem("txt",txtbox.value)}function downNote(e){var t=new Blob([txtbox.value],{type:"text/plain;charset=utf-8"});saveAs(t,"note.txt")}function About(e){if(null==document.getElementById("about_txt")){var t=document.createElement("div");t.id="about_txt",t.style.fontSize="24pt",t.style.textAlign="center",t.innerHTML="2013106137 이오주 Note 웹앱",document.body.appendChild(t)}}function fullscreen(e){screenfull.enabled&&screenfull.request()}console.log("my-note app.js");var locastg,txtbox=initNote();addListen();