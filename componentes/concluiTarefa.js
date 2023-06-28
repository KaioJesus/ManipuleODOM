const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-burron');
    botaoConclui.innerText = 'Feito';
    //Conteúdo que vai ser mostrado quando gerar o botão

    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui;
}

const concluirTarefa = (e) => {
    const botaoConcluir = e.target;
    //saber o alvo que selecionei, cliquei

    const tarefaFeita = botaoConcluir.parentElement;
    //pegando o pai do elemento, no caso a li

    tarefaFeita.classList.toggle('done');
    //toggle devolve verdadeiro ou falso, o efeito de risco é o 'done' que dá;
}

export default BotaoConclui;
//Transformando em modulo