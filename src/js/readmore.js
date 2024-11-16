let PROJECTS_PER_PAGE;
let currentPage = 1;
const loadMoreBtn = document.querySelector('.load-more');
const projectsList = document.querySelector('.projects-list');
const allProjects = Array.from(projectsList.children);

function setProjectsPerPage() {
  if (window.innerWidth >= 1280) {
    PROJECTS_PER_PAGE = 3;
  } else if (window.innerWidth >= 768) {
    PROJECTS_PER_PAGE = 4;
  } else {
    PROJECTS_PER_PAGE = 2;
  }

  currentPage = 1;

  allProjects.forEach((project, index) => {
    project.style.display = index < PROJECTS_PER_PAGE ? 'block' : 'none';
  });

  loadMoreBtn.style.display =
    PROJECTS_PER_PAGE < allProjects.length ? 'block' : 'none';
}

function onLoadMore() {
  const startIndex = currentPage * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;

  for (let i = startIndex; i < endIndex && i < allProjects.length; i++) {
    allProjects[i].style.display = 'block';
  }

  currentPage++;
  smoothScrolling();

  if (endIndex >= allProjects.length) {
    loadMoreBtn.style.display = 'none';
  }
}

function smoothScrolling() {
  const { height: cardHeight } = allProjects[0].getBoundingClientRect();

  window.scrollBy({
    top: cardHeight,
    behavior: 'smooth',
  });
}

loadMoreBtn.addEventListener('click', onLoadMore);
window.addEventListener('resize', setProjectsPerPage);

setProjectsPerPage();
