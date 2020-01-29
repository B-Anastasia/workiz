let menu_btn=document.getElementById('menu_btn');
let menu_line=document.getElementById('menu_line');

menu_btn.addEventListener("click", toggleMenu);
function toggleMenu() {
                menu_line.classList.toggle("menu_active");
}