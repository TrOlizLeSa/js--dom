export default () => {
  const alertGeneratorButton = document.getElementById('alert-generator');
  const alertsContainer = document.querySelector('.alerts');

  let alertCounter = 1;

  alertGeneratorButton.addEventListener('click', generateAlert);

  function generateAlert() {
    const alertDiv = createAlertElement();
    prependAlert(alertDiv);
    alertCounter++;
  }

  function createAlertElement() {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-primary';
    alertDiv.textContent = 'Alert ' + alertCounter;
    return alertDiv;
  }

  function prependAlert(alertDiv) {
    alertsContainer.insertBefore(alertDiv, alertsContainer.firstChild);
  }
};
