document.getElementById('encryptButton').addEventListener('click', () => handleText('encrypt'));
document.getElementById('decryptButton').addEventListener('click', () => handleText('decrypt'));
document.getElementById('copyButton').addEventListener('click', copyToClipboard);

function handleText(action) {
    const inputText = document.getElementById('inputText').value;
    if (document.getElementById('lowercase').checked && !/^[a-z\s]*$/.test(inputText)) {
        alert('El texto solo debe contener letras minúsculas y sin acentos.');
        return;
    }
    const outputText = action === 'encrypt' ? encrypt(inputText) : decrypt(inputText);
    displayResult(outputText);
}

function encrypt(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function displayResult(text) {
    const outputTextArea = document.getElementById('outputText');
    const resultMessage = document.getElementById('resultMessage');
    const copyButton = document.getElementById('copyButton');

    if (text) {
        outputTextArea.value = text;
        outputTextArea.style.display = 'block';
        resultMessage.style.display = 'none';
        copyButton.style.display = 'block';
    } else {
        outputTextArea.style.display = 'none';
        resultMessage.style.display = 'block';
        copyButton.style.display = 'none';
    }
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText').value;
    navigator.clipboard.writeText(outputText)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => alert('Error al copiar el texto: ' + err));
}
