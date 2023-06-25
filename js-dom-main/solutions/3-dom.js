const beautifyPage = () => {
  const bodyElement = document.body;
  const lines = bodyElement.textContent.trim().split('\n'); // Получаем текстовое содержимое и разбиваем его по переводу строк

  bodyElement.innerHTML = ''; // Очищаем содержимое тега <body>

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const paragraphElement = document.createElement('p'); // Создаем новый элемент <p>
    const textNode = document.createTextNode(line); // Создаем текстовый узел с содержимым строки
    paragraphElement.appendChild(textNode); // Добавляем текстовый узел внутрь элемента <p>
    bodyElement.appendChild(paragraphElement); // Добавляем элемент <p> внутрь тега <body>
  }
};

beautifyPage(); // Вызов функции для преобразования страницы
