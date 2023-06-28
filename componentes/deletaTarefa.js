const BotaoDeleta = () =>{
    const botaoDeleta = document.createElement('button');
    botaoDeleta.classList.add('delete-button');
    botaoDeleta.innerText = 'Deleta';

    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
}

const deletarTarefa = (e) =>{
    const botaoDeleta = e.target;

    const tarefaCompleta = botaoDeleta.parentElement;
    tarefaCompleta.remove();
    //método que remove um elemento
}

export default BotaoDeleta;