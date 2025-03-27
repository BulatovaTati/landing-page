import movies from '../img/projects/movies.png';
import yachts from '../img/projects/jet.jpg';
import chocolate from '../img/projects/chocolate.png';
import harvest from '../img/projects/veges.jpg';
import food from '../img/projects/food.png';
import barber from '../img/projects/barber.jpg';
import ice from '../img/projects/ice.jpg';
import donuts from '../img/projects/donuts.jpg';
import landing from '../img/projects/landing.jpg';
import filmoteka from '../img/projects/filmoteka.jpg';
import backend from '../img/projects/backend.jpg';

const projects = [
  {
    title: 'Contacts APP',
    image: backend,
    alt: 'Contacts APP',
    description:
      'A backend service for contact management, featuring authentication, authorization, and REST API endpoints.',
    codeLink: 'https://github.com/BulatovaTati/nodejs-hw',
    projectLink: 'https://nodejs-hw-nq50.onrender.com/api-docs/',
  },
  {
    title: 'Filmoteka',
    image: filmoteka,
    alt: 'Landing Page',
    description:
      'A user-friendly movie library where you can search for films, view details, and add favorites to your collection.',
    codeLink: 'https://github.com/BulatovaTati/filmoteka',
    projectLink: 'https://filmoteka-nine.vercel.app/',
  },
  {
    title: 'Landing Page',
    image: landing,
    alt: 'Landing Page',
    description:
      'This website is Lloyd`s  personal portfolio where He can not only demonstrate his skillset, but also talk about his experiences and past projects that have brought him to where He is now.',
    codeLink: 'https://github.com/BulatovaTati/landing-page-2.0',
    projectLink: 'https://bulatovatati.github.io/landing-page-2.0/',
  },

  {
    title: 'Yacht Jet',
    image: yachts,
    alt: 'Yacht Jet',
    description:
      'A luxury yacht rental platform showcasing various yachts available for rent.',
    codeLink: 'https://github.com/BulatovaTati/Yacht-Jet',
    projectLink: 'https://bulatovatati.github.io/Yacht-Jet/',
  },
  {
    title: 'Movies Source',
    image: movies,
    alt: 'Movies Source',
    description:
      'A movie information platform that pulls data from a public API for movie details.',
    codeLink: 'https://github.com/BulatovaTati/movies-source',
    projectLink: 'https://bulatovatati.github.io/movies-source/',
  },
  {
    title: 'SIMPLY CHOCOLATE',
    image: chocolate,
    alt: 'SIMPLY-CHOCOLATE',
    description:
      'A responsive website for a chocolate brand, featuring smooth scroll for navigation.',
    codeLink: 'https://github.com/BulatovaTati/Simply-Chocolate',
    projectLink: 'https://bulatovatati.github.io/SIMPLY-CHOCOLATE/',
  },
  {
    title: 'Green Harvest',
    image: harvest,
    alt: 'Green Harvest',
    description:
      'A project focused on promoting healthy eating with engaging content and resources.',
    codeLink: 'https://github.com/BulatovaTati/GreenHarvest',
    projectLink: 'https://bulatovatati.github.io/GreenHarvest/',
  },
  {
    title: 'Food Delivery',
    image: food,
    alt: 'Food Delivery',
    description:
      'A food delivery app that allows users to browse menus, place orders, and track deliveries.',
    codeLink: 'https://github.com/BulatovaTati/food-delivery',
    projectLink: 'https://bulatovatati.github.io/food-delivery/',
  },
  {
    title: 'Barber Shop',
    image: barber,
    alt: 'Barber Shop',
    description:
      'A stylish and functional website for a barbershop, featuring a booking system.',
    codeLink: 'https://github.com/BulatovaTati/BarberShop',
    projectLink: 'https://bulatovatati.github.io/BarberShop/',
  },
  {
    title: 'Ice Cream',
    image: ice,
    alt: 'Ice Cream',
    description:
      'A visually appealing website showcasing a range of ice cream products.',
    codeLink: 'https://github.com/BulatovaTati/IceCream',
    projectLink: 'https://bulatovatati.github.io/IceCream/',
  },
  {
    title: 'Donats',
    image: donuts,
    alt: 'Donats',
    description: 'A fun and interactive website for ordering donuts online.',
    codeLink: 'https://github.com/BulatovaTati/Donats',
    projectLink: 'https://bulatovatati.github.io/Donats/',
  },
];

let PROJECTS_PER_PAGE;
let currentPage = 1;
const loadMoreBtn = document.querySelector('.load-more');
const projectsList = document.querySelector('.projects-list');

function setProjectsPerPage() {
  if (window.innerWidth >= 1280) {
    PROJECTS_PER_PAGE = 3;
  } else if (window.innerWidth >= 768) {
    PROJECTS_PER_PAGE = 4;
  } else {
    PROJECTS_PER_PAGE = 2;
  }

  currentPage = 1;

  const projectItems = document.querySelectorAll('.projects-item');

  projectItems.forEach((project, index) => {
    project.style.display = index < PROJECTS_PER_PAGE ? 'flex' : 'none';
  });

  loadMoreBtn.style.display =
    PROJECTS_PER_PAGE < projectItems.length ? 'block' : 'none';
}

function onLoadMore() {
  const projectItems = document.querySelectorAll('.projects-item');

  const startIndex = currentPage * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;

  for (let i = startIndex; i < endIndex && i < projectItems.length; i++) {
    projectItems[i].style.display = 'flex';
  }

  currentPage++;
  smoothScrolling();

  if (endIndex >= projectItems.length) {
    loadMoreBtn.style.display = 'none';
  }
}

function smoothScrolling() {
  const { height: cardHeight } = document
    .querySelector('.projects-list')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight,
    behavior: 'smooth',
  });
}

loadMoreBtn.addEventListener('click', onLoadMore);
window.addEventListener('resize', setProjectsPerPage);
projectsList.insertAdjacentHTML(
  'beforeend',
  productMarkup(projects, 0, PROJECTS_PER_PAGE)
);

setProjectsPerPage();

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
        <div class="btn-wrapper">
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
        </div>
      </li>`
        );
      },
      ''
    );
}
