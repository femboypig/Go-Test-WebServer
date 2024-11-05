const texts = [
    'Be A Femboy',
    'Fuck Society',
    'Learn Assembler'
];

const textElement = document.getElementById('text');

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 150; // Скорость печати в миллисекундах
const deletingSpeed = 75; // Скорость удаления в миллисекундах
const pauseTime = 500; // Время паузы между показами текста

function type() {
    const currentText = texts[currentTextIndex];

    if (currentCharIndex < currentText.length && !isDeleting) {
        textElement.innerHTML += currentText.charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, typingSpeed);
    } else if (currentCharIndex === currentText.length && !isDeleting) {
        isDeleting = true;
        setTimeout(type, pauseTime); // Пауза перед удалением текста
    } else if (currentCharIndex > 0 && isDeleting) {
        textElement.innerHTML = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(type, deletingSpeed);
    } else {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length; // Переход к следующему тексту
        currentCharIndex = 0; // Сброс индекса символа
        setTimeout(type, typingSpeed); // Начать печать следующего текста
    }
}

// Начать анимацию
type();