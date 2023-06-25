function extractData(element) {
  const paragraphs = element.getElementsByTagName('p');
  const data = [];
  
  for (let i = 0; i < paragraphs.length; i++) {
  const paragraph = paragraphs[i];
  const textContent = paragraph.textContent.trim();
  data.push(textContent);
  }
  
  return data;
  }
  
  export default extractData;