const Projects = function () {
  return `
    <nav id="projects">
      <header class="projects--header">
        <h2>Projects</h2>
        <button id="btn-new-project" class="btn" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"></path>
          </svg>
        </button>
      </header>

      <section class="projects--list"></section>
    </nav>
  `;
};

export default Projects;
