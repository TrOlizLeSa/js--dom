// BEGIN
export default (document) => {
  const divElements = document.querySelectorAll('div');
  for (let i = 0; i < divElements.length; i++) {
    const divElement = divElements[i];
    const textNodes = [];
    for (let j = 0; j < divElement.childNodes.length; j++) {
      const node = divElement.childNodes[j];
      if (node instanceof Text) {
        textNodes.push(node);
      }
    }
    for (let k = 0; k < textNodes.length; k++) {
      const textNode = textNodes[k];
      const trimmedText = textNode.textContent.trim();
      if (trimmedText !== '') {
        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = trimmedText;
        textNode.replaceWith(paragraphElement);
      }
    }
  }
};
// END
