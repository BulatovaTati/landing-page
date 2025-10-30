const skills = {
  'Frontend Development': [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Redux',
    'TypeScript',
    'Figma',
  ],
  'Frameworks & Libraries': [
    'Vite.js',
    'Axios',
    'Izitoast',
    'Simplelightbox',
    'Swiper.js',
    'Firebase',
    'Jquery',
    'Lodash',
    'Notiflix',
    'Tui-pagination',
  ],
  Tools: [
    'Vercel',
    'Render',
    'Slack',
    'Jira',
    'Postman',
    'Trello',
    'Netlify',
    'Vite.js',
  ],
};

const listContainer = document.querySelector('.hard-list');

Object.entries(skills).forEach(([category, items]) => {
  const listItem = document.createElement('li');
  listItem.classList.add('hard-item');

  const title = document.createElement('p');
  title.classList.add('hard-item-title');
  title.textContent = category;

  const sublist = document.createElement('ul');
  sublist.classList.add('hard-item-list');

  items.forEach(skill => {
    const sublistItem = document.createElement('li');
    sublistItem.classList.add('hard-item-list-item');
    sublistItem.textContent = skill;
    sublist.appendChild(sublistItem);
  });

  listItem.appendChild(title);
  listItem.appendChild(sublist);
  listContainer.appendChild(listItem);
});
