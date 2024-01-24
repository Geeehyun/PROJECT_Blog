import Message from "./messages/Message.js";
// aboutme 사진 변경
const profileImaage = ['profile1', 'profile2', 'profile3', 'profile4', 'profile5', 'profile6', 'profile7'];

const mainProfile = document.querySelector('#main_profile');
const images = document.querySelectorAll('.images');
const buttons = document.querySelectorAll('.img-list > button')
let target ='';
let currentImg = '';


for(let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', () => {
    target = '';
    currentImg = '';
    currentImg = mainProfile.className;
    currentImg = currentImg.replace('profile', '');
    currentImg = parseInt(currentImg);
    target = images[i].className;
    target = target.substring(target.length-1);
    target = parseInt(target);
    if (target > 0) {
      mainProfile.classList.remove('profile' + currentImg);
      mainProfile.classList.add('profile' + target);
      //이미지 리스트 바꾸기
      for(let i = 0; i < images.length; i++) {
        if((target + i) > 7) {
          images[i].classList.remove('profile' + (currentImg + i));
          images[i].classList.add('none');
        } else {
          images[i].classList.remove('none');
          images[i].classList.remove('profile' + (currentImg + i));
          images[i].classList.add('profile' + (target + i));
        }
      }
    }
  })
}


for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {prevNext(buttons[i].className)})
}

function prevNext(step) {
  //메인 이미지 바꾸기
  target ='';
  currentImg = '';
  currentImg = mainProfile.className;
  currentImg = currentImg.replace('profile', '');
  currentImg = parseInt(currentImg);
  // console.log(currentImg);
  if(step == 'prev') {
    if(currentImg == 1) {
      target = profileImaage.length;
    } else {
      target = currentImg - 1;
    }
  } else if(step == 'next') {
    if(currentImg == profileImaage.length) {
      target = 1;
    } else {
      target = currentImg + 1;
    }
  } 
  mainProfile.classList.remove('profile' + currentImg);
  mainProfile.classList.add('profile' + target);

  //이미지 리스트 바꾸기
  for(let i = 0; i < images.length; i++) {
    if((target + i) > 7) {
      images[i].classList.remove('profile' + (currentImg + i));
      images[i].classList.add('none');
    } else {
      images[i].classList.remove('none');
      images[i].classList.remove('profile' + (currentImg + i));
      images[i].classList.add('profile' + (target + i));
    }
  }
}


//몽이 사진 토글
const monguri = document.querySelectorAll('#monguri li');
// monguri.addEventListener('click', () => {
//   if(monguri.className == 'fold') {
//     monguri.classList.remove('fold');
//     monguri.classList.add('open');
//   } else {
//     monguri.classList.add('fold');
//     monguri.classList.remove('open');
//   }
// })

for(let i = 0; i < monguri.length; i++) {
  monguri[0].addEventListener('click',() => {
    if(monguri[i].className == 'fold') {
      monguri[i].style.transform = 'translateX(' + (i * 200) + 'px)';
      monguri[i].classList.remove('fold');
      monguri[i].classList.add('open');
    } else if(monguri[i].className == 'open') {
      monguri[i].style.transform = 'translateX(' + (0) + 'px)';
      monguri[i].classList.add('fold');
      monguri[i].classList.remove('open');
    }
  })
}

//info 레이어팝업
const infoes = document.querySelectorAll('.profile_area .info li');
const layerPop = document.querySelector('#layer');
const layerButton = document.querySelector('#layer .button');
const popTitle = document.querySelector('.pop-title');
const popText = document.querySelector('.pop-text');
for(let i = 0; i < infoes.length; i++) {
  infoes[i].addEventListener('click', () => {
    let title = (Message[(infoes[i].className)]['title']);
    let content = (Message[(infoes[i].className)]['content']);
    popTitle.innerText = title;
    popText.innerText = content;
    clickMe();
  })
}

layerButton.addEventListener('click', () => {
  clickMe();
})

function clickMe() {
  layerPop.classList.toggle('hidden');
}

let test = Message.pet.title;
console.log(test);