const wrapper = document.querySelector('.wrapper');
const logilink = document.querySelector('.login-link');
const registerlink = document.querySelector('register-link');

registerlink.addEventListener('click', ()=>{wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{wrapper.classList.remove('active');
});