// Получаем элемент стиля по ID
const customStyles = document.getElementById('customStyles');

// Получаем элементы управления для изменения стилей
const bgColorInput = document.getElementById('bgColorInput');
const textColorInput = document.getElementById('textColorInput');
const fontSelect = document.getElementById('fontSelect');
const fontSizeInput = document.getElementById('fontSizeInput');
const lineHeightInput = document.getElementById('lineHeightInput');

// Создаем кнопку "Применить стили"
const applyStylesBtn = document.createElement('button');
applyStylesBtn.textContent = 'Применить стили';

// Добавляем обработчик события на кнопку "Применить стили"
applyStylesBtn.addEventListener('click', () => {
	// Получаем значения из элементов управления
	const bgColor = bgColorInput.value;
	const textColor = textColorInput.value;
	const font = fontSelect.value;
	const fontSize = fontSizeInput.value;
	const lineHeight = lineHeightInput.value;

	// Изменяем стили элемента
	customStyles.innerHTML = `
		body {
			background-color: ${bgColor};
			color: ${textColor};
			font-family: ${font};
			font-size: ${fontSize}px;
			line-height: ${lineHeight};
			margin: 0;
			padding: 0;
			text-align: center;
		}
		h1 {
			font-size: ${fontSize * 1.5}px;
			margin-bottom: ${fontSize}px;
		}
	`;

});

// Добавляем кнопку "Применить стили" на страницу
document.body.appendChild(applyStylesBtn);
