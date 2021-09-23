const TodoList = function (project) {
  let listContainer = '';
  for (let i in project.items) {
    listContainer += objectToHTML(project.items[i]);
  }

  const content = `
    <main class="container">
      <h1>${project.title}</h1>
      ${listContainer}
    </main>
  `;

  return content;
};

function objectToHTML(item) {
  return `
    <div class="list-item">
      <span class="list-item--priority ${item.priority}-priority"></span>
      <span class="list-item--title">${item.title}</span>
      <span>${item.dueDate}</span>
    </div>
  `;
}

export default TodoList;
