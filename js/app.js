// Toggle knopka
const toggle = document.querySelector('.header__toggle'),
menu = document.querySelector('.header__menu'),
header__link = document.querySelectorAll('.header__menu--link');

toggle.addEventListener('click', () =>  {
  menu.classList.toggle('active');
})  


// function hideTabcontent (){
//   header__link.forEach((item) => {
//     item.classList.remove('activee')
//   })
// }
   
// function showTabsContent(i = 0){
//   header__link[i].classList.add('activee')
// }

// hideTabcontent();
// showTabsContent();

// menu.addEventListener('clack', (event) => {
//   if(event.target && event.target.classList.contains('header__menu--link')){
//     console.log(1)
//     // header__link.forEach((item, i) => {
//     //   if (event.target == item){
//     //     hideTabcontent();
//     //     showTabsContent(i);
//     //   }
//     // })
//   }
// })