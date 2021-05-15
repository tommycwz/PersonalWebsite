// Splash Screen
const splash = document.querySelector('.splash');

splash.onanimationend = () => {
    console.log('Animation ended');
    setTimeout(()=>{
        splash.classList.add('display-none');
    },100);
};