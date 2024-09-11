document.getElementById('formulario').addEventListener('submit', function(event) 
{
    event.preventDefault(); // Evita o comportamento padrão de enviar o formulário

    let campoA = parseFloat(document.getElementById('campoA').value);
    let campoB = parseFloat(document.getElementById('campoB').value);
    let mensagem = document.getElementById('mensagem');

    if (campoB > campoA) 
    {
        mensagem.textContent = 'Perfeito!: Campo B é maior que o Campo A!';
        mensagem.style.color = 'green';
    } 
    else 
    {
        mensagem.textContent = 'Poxa! Houve um erro: Campo B deve ser maior que o Campo A!';
        mensagem.style.color = 'red';
    }
});
