function voltar2() {
    window.location.href = "/SitePrincipal/PRINCIPAL.html";
}

$(document).ready(function (){
    $("#login").click(function (){
    const objs = 
    [
        {
            nome: document.querySelector("#usuario").value,
            email: document.querySelector("#e-mail").value,
            senha: document.querySelector("#senha").value,
        },
    ]
    const json = JSON.stringify(objs);
    console.log(json);
    });
})

