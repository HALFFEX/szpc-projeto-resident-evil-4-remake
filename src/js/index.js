const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);

        mudarAsDescricoes(indice);
    })
})

function mudarAsDescricoes(indice) {
    if (imagens[indice] == imagens[0]) {
        document.querySelector('.descricao').innerHTML = 'Resident Evil 4 é um remake do Resident Evil 4 original de 2005. Reimaginado para 2023 para trazer horror de sobrevivência de última geração. Resident Evil 4 preserva a essência do jogo original enquanto apresenta jogabilidade modernizada, enredo reimaginado e gráficos vívidamente detalhados para fazer deste o mais recente jogo de horror de sobrevivência, onde a vida e a morte, o terror e a catarse se cruzam.';
    }
    if (imagens[indice] == imagens[1]) {
        document.querySelector('.descricao').innerHTML = "HISTÓRIA, Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes do incidente, foi recrutado como agente, respondendo diretamente ao presidente dos Estados Unidos. Com a experiência de várias missões em suas costas, Leon é enviado para resgatar a filha sequestrada do presidente. Ele a rastreia até uma vila europeia isolada, onde há algo terrivelmente errado com os aldeões. E a cortina se abre nessa história de um ousado resgate e horror de sobrevivência extenuante.";
    }
    if (imagens[indice] == imagens[2]) {
        document.querySelector('.descricao').innerHTML = "Leon S. Kennedy, um policial novato quando o incidente de Raccoon City ocorreu há 6 anos, tornou-se um agente trabalhando diretamente sob o presidente. Tendo passado por diversas missões desde o incidente, Leon amadureceu significativamente.";
    }
    if (imagens[indice] == imagens[3]) {
        document.querySelector('.descricao').innerHTML = 'Ashley Graham, a filha desaparecida do presidente dos Estados Unidos. Leon parte para uma vila isolada na Europa em busca dela.';
    }
    if (imagens[indice] == imagens[4]) {
        document.querySelector('.descricao').innerHTML = 'Luis Serra, Leon se depara com este homem misterioso na vila. Ele parece saber algo sobre o paradeiro da filha do presidente dos Estados Unidos, mas será que ele é confiável...?';
    }
    if (imagens[indice] == imagens[5]) {
        document.querySelector('.descricao').innerHTML = 'Jack Krauser, Um ex-membro das forças militares dos Estados Unidos. Ele e Leon desenvolveram um vínculo após este tornar-se um agente.';
    }
    if (imagens[indice] == imagens[6]) {
        document.querySelector('.descricao').innerHTML = 'Ada Wong, Juntou-se a Leon durante o Incidente em Raccoon City, mas desapareceu durante a destruição do laboratório subterrâneo da Umbrella. Ela reaparece subitamente, mas seu verdadeiro objetivo permanece um mistério.';
    }
    if (imagens[indice] == imagens[7]) {
        document.querySelector('.descricao').innerHTML = 'Aldeões(Ganado), Uma vez humanos, os Ganado veneram o líder de um culto religioso, e agora só há loucura em seus olhos...';
    }
    if (imagens[indice] == imagens[8]) {
        document.querySelector('.descricao').innerHTML = 'Mercador, Um misterioso comerciante de armas que aparece em vários locais. Ele não apenas compra e vende armas e itens, mas também é capaz de aprimorar as armas que já estão em posse de Leon, bem como trocar por mercadorias especiais.';
    }
    if (imagens[indice] == imagens[9]) {
        document.querySelector('.descricao').innerHTML = 'Osmund Saddler, O atual líder de Los Iluminados, um poderoso culto religioso que há muito existe na região.';
    }
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}