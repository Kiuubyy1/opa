function fuja() {
    var botaoNao = document.querySelector('#nao');

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - botaoNao.offsetWidth; // Corrigido offsetwidth para offsetWidth
    var maxY = alturaJanela - botaoNao.offsetHeight; // Corrigido offsetheeight para offsetHeight

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = aleatorioX + "px"; // Corrigido computedStyleMap para style
    botaoNao.style.top = aleatorioY + "px";  // Corrigido computedStyleMap para style
}
