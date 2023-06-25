export default () => {
  const tabContainers = document.querySelectorAll('.row');
  for (let i = 0; i < tabContainers.length; i++) {
    const tabList = tabContainers[i];

    const tabs = tabList.querySelectorAll('[role="tab"]');
    for (let j = 0; j < tabs.length; j++) {
      const tab = tabs[j];

      tab.addEventListener('click', (e) => {
        e.preventDefault();

        const activeTab = tabList.querySelector('.nav-link.active');
        const activeContent = tabList.querySelector('.tab-pane.active');
        const targetTab = tabList.querySelector(tab.getAttribute('data-bs-target'));

        activeTab.classList.remove('active');
        activeContent.classList.remove('active');

        targetTab.classList.add('active');
        tab.classList.add('active');

        console.log(`Clicked tab "${tab.innerText}".`);
      });
    }
  }
};
