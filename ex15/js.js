// Vitória Karoline de Carvalho Bernardo

const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordCount');

textInput.addEventListener('input', function() {
  const text = textInput.value.trim(); // Remove espaços em branco do início e do fim
  const wordCount = text === '' ? 0 : text.split(/\s+/).length; // Conta o número de palavras separadas por espaços em branco
  wordCountDisplay.textContent = wordCount;
});
