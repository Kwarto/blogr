const menuList = document.querySelector('.menu__list');
const menuOn = document.querySelector('.menuOn');
const menuOf = document.querySelector('.menuOf');

menuOn.onclick = () => {
    menuList.style.display = 'flex';
    menuOn.style.display = 'none';
    menuOf.style.display = 'block';
}

menuOf.onclick = () => {
    menuList.style.display = 'none';
    menuOn.style.display = 'block';
    menuOf.style.display = 'none';
}