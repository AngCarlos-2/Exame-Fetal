function result() {
    let f1 = document.getElementById('txtF1');
    let f2 = document.getElementById('txtF2');
    let s = document.querySelector('#selsex')
    let res = document.querySelector("div#res")
    let valor = s.options[s.selectedIndex].value;

    if (f1.value.length == 0 && f2.value.length == 0) {
        window.alert("Há dados não preenchidos!");
    } else {
        window.alert("Deseja confirmar os dados?")
        let img = document.createElement("img")
        img.setAttribute("id", "foto")
    if (valor == 'M') {
        res.innerHTML = 'É menino!'
        img.setAttribute("src", "imagens/Boy.png")
    } else if (valor == 'F') {
        res.innerHTML = 'É menina!'
        img.setAttribute("src", "imagens/Girl.png")
    } else {
        window.alert("Selecione uma das duas opções.");
    }
    res.appendChild(img)

    window.alert("Após clicar no botão 'Verificar Resultado', clique em 'Confirmar resultado'")
    let bConf = document.querySelector('.bConfirm');
    bConf.style.display = 'block';
}
}

function confirm () {
    window.alert("Resultado enviado!");
}