const TodoList = function (project) {
  let listContainer = '';
  for (let i in project.items) {
    listContainer += objectToHTML(project.items[i]);
  }
  const content = `
    <div class="list-container">
      ${listContainer}
    </div>
  `;

  return content;
};

function objectToHTML(item) {
  return `
    <div class="list-item">
      <span class="list-item--priority ${item.priority}-priority"></span>
      <div>
        <span class="list-item--title">${item.title}</span>
        <span class="list-item--description">${item.description}</span>
      </div>
      <span class="list-item--date">${item.dueDate}</span>
    </div>
  `;
}

export default TodoList;
