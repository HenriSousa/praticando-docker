// Exibir o valor no display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Limpar o display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Apagar o último dígito
  function deleteLast() {
    var display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
  }
  
  // Calcular o resultado
  function calculateResult() {
    try {
      var result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Erro';
    }
  }
  