const beautifyPage = () => {
  const bodyElement = document.body;
  const lines = bodyElement.textContent.trim().split('\n'); 

  bodyElement.innerHTML = ''; 

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const paragraphElement = document.createElement('p');
    const textNode = document.createTextNode(line); 
    paragraphElement.appendChild(textNode);
    bodyElement.appendChild(paragraphElement); 
  }
};

beautifyPage(); 
