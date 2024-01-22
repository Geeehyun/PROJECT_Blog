//배경랜덤
let bg;
let randomNum;
const bgImaage = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10', 'bg11', 'bg12', 'bg13', 'bg14', 'bg15'];
function createRandomNum(max) {
  return Math.floor(Math.random()*max+1);
}

function setBackground() {
  bg = document.querySelector('.bg');
  randomNum = createRandomNum(bgImaage.length);
  bg.style.backgroundImage = "url(/src/img/bg" + randomNum + ".jpg)";
}

window.onload = setBackground();


// window.addEventListener('scroll',() => {
//   goUpDisplay();
// })

//go up 이동
const goUp = document.querySelector('#goup');
function goUpDisplay() {
  if(scrollY <= 300) {
    goUp.classList.add('hidden');
    goUp.classList.remove('show');
  } else {
    goUp.classList.remove('hidden');
    goUp.classList.add('show');
  }
}
goUp.addEventListener('click', () => {
  window.scrollTo({
    top, behavior : "smooth"
  });
})

//링크 이동
const url = [
  ['Insta', 'https://www.instagram.com/geeee_hyuny?igsh=Mjk5eWluMWQyZDZj&utm_source=qr'],
  ['blog', 'https://velog.io/@wkdwl578/posts'], 
  ['github', 'https://github.com/Geeehyun']
];
const zIndex1 = document.querySelector('#zindex1');
for(let i = 0; i < 3; i++) {
  zIndex1.children[i].addEventListener('mouseover',() => {
    zIndex1.children[i].innerHTML = '&nbsp';
  })
  zIndex1.children[i].addEventListener('mouseout',() => {
    zIndex1.children[i].innerHTML = url[i][0];
  })
  zIndex1.children[i].addEventListener('click',() => {
    window.open(url[i][1]);
  })
}

//사이드바 토글
const toggle = document.querySelector('#toggle');

toggle.addEventListener('click', () => {
  if(toggle.className == 'on' || toggle.className == '') {
    for(let i = 0; i < 3; i++) {
      zIndex1.children[i].style.transform = 'translateX(500px)';
    }
    toggle.classList.remove('on');
    toggle.classList.add('off');
  } else if(toggle.className == 'off') {
    for(let i = 0; i < 3; i++) {
      zIndex1.children[i].style.transform = 'translateX(0)';
    }
    toggle.classList.remove('off');
    toggle.classList.add('on');
  }
})


