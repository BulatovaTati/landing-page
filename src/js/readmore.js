const projects = [
  {
    title: 'Movies Source',
    image: 'https://bulatovatati.github.io/img/projects/movies.png',
    alt: 'Movies Source',
    description:
      'A movie information platform that pulls data from a public API for movie details.',
    codeLink: 'https://github.com/BulatovaTati/movies-source',
    projectLink: 'https://bulatovatati.github.io/movies-source/',
  },
  {
    title: 'Yacht Jet',
    image: 'https://bulatovatati.github.io/img/projects/jet.jpg',
    alt: 'Yacht Jet',
    description:
      'A luxury yacht rental platform showcasing various yachts available for rent.',
    codeLink: 'https://github.com/BulatovaTati/Yacht-Jet',
    projectLink: 'https://bulatovatati.github.io/Yacht-Jet/',
  },
  {
    title: 'SIMPLY CHOCOLATE',
    image: 'https://bulatovatati.github.io/img/projects/chocolate.png',
    alt: 'SIMPLY-CHOCOLATE',
    description:
      'A responsive website for a chocolate brand, featuring smooth scroll for navigation.',
    codeLink: 'https://github.com/BulatovaTati/Simply-Chocolate',
    projectLink: 'https://bulatovatati.github.io/SIMPLY-CHOCOLATE/',
  },
  {
    title: 'Green Harvest',
    image: 'https://bulatovatati.github.io/img/projects/veges.jpg',
    alt: 'Green Harvest',
    description:
      'A project focused on promoting healthy eating with engaging content and resources.',
    codeLink: 'https://github.com/BulatovaTati/GreenHarvest',
    projectLink: 'https://bulatovatati.github.io/GreenHarvest/',
  },
  {
    title: 'Food Delivery',
    image: 'https://bulatovatati.github.io/img/projects/food.png',
    alt: 'Food Delivery',
    description:
      'A food delivery app that allows users to browse menus, place orders, and track deliveries.',
    codeLink: 'https://github.com/BulatovaTati/food-delivery',
    projectLink: 'https://bulatovatati.github.io/food-delivery/',
  },
  {
    title: 'Barber Shop',
    image: 'https://bulatovatati.github.io/img/projects/barber.jpg',
    alt: 'Barber Shop',
    description:
      'A stylish and functional website for a barbershop, featuring a booking system.',
    codeLink: 'https://github.com/BulatovaTati/BarberShop',
    projectLink: 'https://bulatovatati.github.io/BarberShop/',
  },
  {
    title: 'Ice Cream',
    image: 'https://bulatovatati.github.io/img/projects/ice.jpg',
    alt: 'Ice Cream',
    description:
      'A visually appealing website showcasing a range of ice cream products.',
    codeLink: 'https://github.com/BulatovaTati/IceCream',
    projectLink: 'https://bulatovatati.github.io/IceCream/',
  },
  {
    title: 'Donats',
    image: 'https://bulatovatati.github.io/img/projects/donuts.jpg',
    alt: 'Donats',
    description: 'A fun and interactive website for ordering donuts online.',
    codeLink: 'https://github.com/BulatovaTati/Donats',
    projectLink: 'https://bulatovatati.github.io/Donats/',
  },
];
const PROJECTS_PER_PAGE = 3;
let currentPage = 1;
const loadMoreBtn = document.querySelector('.load-more');
const projectsList = document.querySelector('.projects-list');

projectsList.insertAdjacentHTML(
  'beforeend',
  productMarkup(projects, 0, PROJECTS_PER_PAGE)
);

loadMoreBtn.addEventListener('click', onLoadMore);

function productMarkup(projects, startIndex, endIndex) {
  return projects
    .slice(startIndex, endIndex)
    .reduce(
      (acc, { title, image, alt, description, codeLink, projectLink }) => {
        return (
          acc +
          ` <li class="projects-item">
        <img
          class="projects-img"
          src="${image}"
          alt="${alt}"
        />
        <h3 class="projects-item-title">${title}</h3>
        <p class="projects-item-text">
         ${description}
        </p>
        <a
          href="${codeLink}"
          class="projects-code-link"
          target="_blank"
          >View Code</a
        >
        <a
         href="${projectLink}"
          class="projects-project-link"
          target="_blank"
          >View Project</a
        >
      </li>`
        );
      },
      ''
    );
}

function onLoadMore() {
  const startIndex = currentPage * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;

  projectsList.insertAdjacentHTML(
    'beforeend',
    productMarkup(projects, startIndex, endIndex)
  );

  currentPage++;
  smoothScrolling();

  if (endIndex >= projects.length) {
    loadMoreBtn.style.display = 'none';
  }
}

function smoothScrolling() {
  const { height: cardHeight } = document
    .querySelector('.projects-list')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}