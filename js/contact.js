// const userName = document.querySelector('#name');
// const email = document.querySelector('#email');
// const phone = document.querySelector('#phone');
// const message = document.querySelector('#message');
// const submit = document.querySelector('#submit');

// const idChk = /^[a-z0-9]$/;

// submit.addEventListener('click', () => {
//   valCheck();
// });


// function nullCheck() {
//   let nameValue = userName.value.replaceAll(' ','');
//   let emailValue = email.value.replaceAll(' ','');
//   let phoneValue = phone.value.replaceAll(' ','');
//   if(nameValue == null || nameValue == '') {
//     alert('이름을 입력해주세요.');
//     userName.focus();
//   } else if(emailValue == null || emailValue == '') {
//     alert('이메일을 입력해주세요.');
//     email.focus();
//   } else if(phoneValue == null || phoneValue == '') {
//     alert('연락처를 입력해주세요.');
//     phone.focus();
//   }
// }


// function valCheck() {
//   let nameValue = userName.value;
//   let emailValue = email.value;
//   let phoneValue = phone.value;

//   if(!idChk.test(nameValue)) {
//     console.log(idChk.test(nameValue));
//   }
//   console.log('지나감');
// }