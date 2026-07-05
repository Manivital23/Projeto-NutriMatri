const botaoTemp = document.getElementById('btn-temporario');

botaoTemp.addEventListener('click', () => {
  const textoOriginal = botaoTemp.textContent;
  botaoTemp.textContent = 'Inscrito!';
  botaoTemp.style.backgroundColor =  '#798A65';
  botaoTemp.style.border= '2px solid #D15385';
  botaoTemp.disabled = true; 

  setTimeout(() => {
    botaoTemp.textContent = textoOriginal;
    botaoTemp.style.backgroundColor =  '#D15385';
  botaoTemp.style.border= '2px solid #798A65';
    botaoTemp.disabled = false;
  }, 2000);
});