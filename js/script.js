const botaoMenu = document.querySelector(".botao-menu");
const menu = document.querySelector(".menu");
const linksMenu = document.querySelectorAll(".menu a");

botaoMenu.addEventListener("click", function () {

    menu.classList.toggle("ativo");

    const menuAberto = menu.classList.contains("ativo");

    botaoMenu.setAttribute("aria-expanded", menuAberto);

});

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("ativo");

        botaoMenu.setAttribute("aria-expanded", "false");

    });
});

const botaoTopo = document.querySelector(".botao-topo");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        botaoTopo.classList.add("visivel");
    }else{
        botaoTopo.classList.remove("visivel");
    }
});

botaoTopo.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});