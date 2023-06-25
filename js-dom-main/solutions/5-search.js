export default (document) => {
  
  const titleElement = document.querySelector('.content h1');
  let title = '';
  if (titleElement) {
    title = titleElement.textContent;
  }


  const descriptionElement = document.querySelector('.content .description');
  let description = '';
  if (descriptionElement) {
    description = descriptionElement.textContent;
  }

  
  const items = [];
  const articleElements = document.querySelectorAll('.content .links > div');
  for (let i = 0; i < articleElements.length; i++) {
    const articleElement = articleElements[i];
    const articleTitleElement = articleElement.querySelector('h2 a');
    const articleDescriptionElement = articleElement.querySelector('p');
    if (articleTitleElement && articleDescriptionElement) {
      const articleTitle = articleTitleElement.textContent;
      const articleDescription = articleDescriptionElement.textContent;
      items.push({ title: articleTitle, description: articleDescription });
    }
  }

  return { title, description, items };
};
