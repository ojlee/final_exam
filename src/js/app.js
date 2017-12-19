
console.log('my-note app.js');

var txtbox = initNote();
var locastg;

addListen();

function initNote(){
  txtbox = document.getElementById('memo');
  txtbox.value = localStorage.getItem('txt');
  return txtbox;
}

function addListen(){
  var btn_newnote = document.getElementsByClassName('btn-newnote');
  var btn_savenote = document.getElementsByClassName('btn-savenote');
  var btn_downloadnote = document.getElementsByClassName('btn-downloadnote');
  var btn_about = document.getElementsByClassName('btn-about');
  var btn_fullscreen = document.getElementsByClassName('btn-fullscreen');

  console.log(btn_newnote);
  btn_newnote[0].addEventListener('click', clrNote);
  btn_savenote[0].addEventListener('click', saveNote);
  btn_downloadnote[0].addEventListener('click', downNote);
  btn_about[0].addEventListener('click', About);
  btn_fullscreen[0].addEventListener('click', fullscreen);
}

function clrNote(event){
  console.log('새노트');
  txtbox.value='';
}

function saveNote(event){
  localStorage.setItem('txt', txtbox.value);
}

function downNote(event){

  var blob = new Blob([txtbox.value], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "note.txt");
}

function About(event){

  if(document.getElementById('about_txt')==null){
    var div = document.createElement('div');
    div.id = "about_txt";
    div.style.fontSize = "24pt";
    div.style.textAlign = "center";
    div.innerHTML = "2013106137 이오주 Note 웹앱";
    document.body.appendChild(div);
  }
}

function fullscreen(event){
    if (screenfull.enabled) {
  	   screenfull.request();
    }
}
