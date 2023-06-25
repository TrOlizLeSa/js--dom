import camelCase from 'lodash/camelCase';

// BEGIN
export default (document) => {
  
    const elements = document.body.getElementsByTagName('*');
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const classNames = [];
      const classList = element.classList;
      for (let j = 0; j < classList.length; j++) {
        const className = classList[j];
        classNames.push(className);
      }
      for (let k = 0; k < classNames.length; k++) {
        const className = classNames[k];
        const normalizedClassName = camelCase(className);
        element.classList.replace(className, normalizedClassName);
      }
    }
  };
// END
