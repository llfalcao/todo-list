const TodoList = function (project) {
  let listContainer = '';
  for (let i in project.items) {
    listContainer += objectToText(project.items[i]);
  }

  const content = `
    <main class="container">
      <h1>${project.title}</h1>
      ${listContainer}
    </main>
  `;

  return content;
};

function objectToText(item) {
  return `
    <div class="list-item">
      <span>${item.title}</span>
      <span>${item.dueDate}</span>
    </div>
  `;
}

export default TodoList;
