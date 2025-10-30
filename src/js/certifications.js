import coursera from '../img/education/Coursera.jpg';
import ielts from '../img/education/IELTS.jpg';
import francais from '../img/education/Francais.jpg';
import advanced from '../img/education/Advanced.jpg';
import advanced2 from '../img/education/Advanced2.png';
import upperGF from '../img/education/UpperGF.jpg';
import yappi from '../img/education/Yappi.png';
import friends from '../img/education/Friends.jpg';
import fullstack from '../img/education/Fullstack.jpg';

const certifications = [
  {
    title: 'Fullstack Developer',
    org: 'GoIT',
    img: fullstack,
    alt: 'Fullstack',
  },
  {
    title: 'Google AI Essentials',
    org: 'Coursera',
    img: coursera,
    alt: 'Coursera',
  },

  {
    title: 'French Intermediate',
    org: 'French etc.',
    img: francais,
    alt: 'Intermediate',
  },
  {
    title: 'Advanced II',
    org: 'Green Forest',
    img: advanced2,
    alt: 'Advanced II',
  },
  { title: 'English IELTS', org: 'Green Forest', img: ielts, alt: 'Advanced' },
  {
    title: 'Advanced I',
    org: 'Green Forest',
    img: advanced,
    alt: 'Advanced I',
  },
  {
    title: 'Upper-Intermediate',
    org: 'FRIENDS English Club',
    img: friends,
    alt: 'Upper-Intermediate',
  },
  {
    title: 'Upper-Intermediate',
    org: 'Green Forest',
    img: upperGF,
    alt: 'Upper-Intermediate',
  },
  {
    title: 'Upper-Intermediate',
    org: 'Yappi Language School',
    img: yappi,
    alt: 'Upper-Intermediate',
  },
];

const CERTS_PER_PAGE = 2;
let currentCertPage = 1;

const certList = document.querySelector('.certifications-list');
const loadMoreCertBtn = document.querySelector('.load-more-btn');

function renderCertifications(startIndex, endIndex) {
  const markup = certifications.slice(startIndex, endIndex).reduce(
    (acc, { title, org, img, alt }) =>
      acc +
      `<li class="certifications-item">
          <p class="certifications-text">${title}</p>
          <p class="certifications-text">${org}</p>
          <img class="certifications-img" src="${img}" alt="${alt}" />
      </li>`,
    ''
  );
  certList.insertAdjacentHTML('beforeend', markup);
}

renderCertifications(0, CERTS_PER_PAGE);

function onLoadMore() {
  const startIndex = currentCertPage * CERTS_PER_PAGE;
  const endIndex = startIndex + CERTS_PER_PAGE;

  renderCertifications(startIndex, endIndex);
  currentCertPage++;
  smoothScrolling();

  if (endIndex >= certifications.length) {
    loadMoreCertBtn.style.display = 'none';
  }
}

loadMoreCertBtn.addEventListener('click', onLoadMore);

function smoothScrolling() {
  const { height: cardHeight } = document
    .querySelector('.certifications-list')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight,
    behavior: 'smooth',
  });
}
