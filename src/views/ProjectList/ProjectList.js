const ProjectList = function (projects) {
  let projectList = '';
  for (let i in projects) {
    projectList += `<div class="project-item">${projects[i].title}</div>`;
  }

  const content = `
    <h2>Projects</h2>
    ${projectList}
  `;

  return content;
};

export default ProjectList;
