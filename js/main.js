// 메뉴 이동 
function setMenu(_menu) {
 var menus = document.querySelectorAll("nav li");
 menus.forEach(function (menu) {
  menu.classList.remove('on');
});
document.querySelector("nav li." + _menu).classList.add("on");
document.querySelector("main").className = _menu;
 
}

function showVideoClips() {
  var video = document.querySelector(".video-list");

  videos.forEach(function(index) {
    var videosed = document.querySelector
    (".video-item[hidden]").cloneNode(true);
    videosed.hidden = false;
    videosed.querySelector(".title").innerHTML = 
    index.title;
    videosed.querySelector(".stat").innerHTML = 
    index.stat;
    videosed.querySelector(".author").innerHTML = 
    index.author;
    videosed.querySelector(".profile").src = 
    './img/profile/' + index.profile_src;
    videosed.querySelector(".thumbnail").src = 
    './img/thumbnail/' + index.thumbnail_src;
    video.appendChild(videosed); 
  });
}

function init() {
  showVideoClips();
}


document.addEventListener('DOMContentLoaded', () => {
  // DOM이 load되면 init함수 실행
  init();
});