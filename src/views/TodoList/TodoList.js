const TodoList = function (project) {
  let listContainer = '';
  for (let i in project.items) {
    listContainer += objectToHTML(project.id, i, project.items[i]);
  }
  const content = `
    <div class="list-container">
      ${listContainer}
    </div>
  `;

  return content;
};

function objectToHTML(projectId, itemId, item) {
  let checklist = '';
  for (let i = 0; i < item.checklist.length; i++) {
    checklist += `<li class="list-item__checklist--item">${item.checklist[i]}</li>`;
  }

  return `
    <div id="item-${projectId}-${itemId}" class="list-item">
      <div class="basic-info">
        <span class="list-item--priority ${item.priority}-priority"></span>
        <div>
          <span class="list-item--title">${item.title}</span>
          <span class="list-item--description">${item.description}</span>
        </div>
        <span class="list-item--date">${item.dueDate}</span>
      </div>
      <div class="full-info">
        <p class="list-item--notes">${item.notes}</p>
        <ul class="list-item--checklist">
          <p>Checklist</p>
          ${checklist}
        </ul>
      </div>
    </div>
  `;
}

export default TodoList;
