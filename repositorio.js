/**
 * 
const root = document.documentElement;
const btn = document.getElementById("btnTema");
const ano = document.getElementById("ano");

/**preenchendo ano atual */
/*ano.textContent= new Date().getFullYear();/** aqui ele troca o ano */

/** tema */
/*btn.addEventListener("click" , ()=> {
    /** 1 identifico qual e o tema que ja esta (claro ou escuro)
     * 2 vamos criar uma variavel, e selecionar o atributo que ja foi determinado la no css [data-tema="escuro"]
     * se for igual a escuro
     */
/*    const escuro=root.getAttribute("data-tema") === 'escuro';
    if(escuro){/**se tiver escuro , remove se tiver branco ele atribuio escuro */
/*        root.removeAttribute("data-tema");

/*    }else{
        root.setAttribute("data-tema ", "escuro ");
/*    }


});*/
/** */
// selecionar elementos
const root = document.documentElement;
const btn = document.getElementById("btnTema");
const ano = document.getElementById("ano")

// preenchendo ano atual
ano.textContent = new Date().getFullYear()

// tema light/dark
btn.addEventListener("click", () => {
    const escuro = root.getAttribute("data-tema") === 'escuro'

    if (escuro) {
        root.removeAttribute("data-tema")
    } else {
        root.setAttribute("data-tema", "escuro")
    }
})