const ProjectList = function (projects) {
  let projectList = '';
  for (let i in projects) {
    projectList += `<a class="project-item" href="#">${
      projects[i].getInfo().title
    }</a>`;
  }

  const content = `
    ${projectList}
  `;

  return content;
};

export default ProjectList;
