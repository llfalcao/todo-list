const TodoList = function (project) {
  let listContainer = '';
  for (let i in project.items) {
    listContainer += objectToHTML(project.items[i]);
  }

  const content = `
    <h1>${project.title}</h1>
    <div class="list-container">
      ${listContainer}
    </div>
    <button type="button" id="btn-new-todo" class="btn">New Item</button>
  `;

  return content;
};

function objectToHTML(item) {
  return `
    <div class="list-item">
      <span class="list-item--priority ${item.priority}-priority"></span>
      <span class="list-item--title">${item.title}</span>
      <span class="list-item--date">${item.dueDate}</span>
    </div>
  `;
}

export default TodoList;
