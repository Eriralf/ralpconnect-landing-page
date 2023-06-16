new TypeIt(".text-digit", {
    speed: 200,
    /* loop: true, */
})
    .type("velocidade.", { delay: 300 })
    .delete(11)
    .type("segurança.", { delay: 300 })
    .delete(11)
    .type("e muito mais!", { delay: 800 })
    .pause(500)
    .go();

window.addEventListener("scroll", function () {
    const header = this.document.querySelector("#header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const selectsCitys = document.getElementById("select-city");
const selectInfo = document.getElementById("select-info");
selectsCitys.addEventListener("change", () => {
    if (selectsCitys.value === "0") {
        selectInfo.textContent = "";
        selectInfo.classList.remove("select-info-green");
        selectInfo.classList.remove("select-info-red");
    } else if (selectsCitys.value === "Praia Norte" || selectsCitys.value === "Buriti do Tocantins") {
        selectInfo.innerHTML = `A cidade de <strong>${selectsCitys.value}</strong> não tem disponibilidade ainda!`;
        selectInfo.classList.add("select-info-red");
        selectInfo.classList.remove("select-info-green");
    } else {
        selectInfo.textContent = `A cidade de ${selectsCitys.value} tem disponibilidade!`;
        selectInfo.innerHTML = `A cidade de <strong>${selectsCitys.value}</strong> tem disponibilidade! <a href="#plans">Veja nossos Planos.<a/>`;
        selectInfo.classList.add("select-info-green");
        selectInfo.classList.remove("select-info-red");
    }
});
