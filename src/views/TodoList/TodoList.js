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
  let description;
  if (item.description === '') {
    description = '';
  } else {
    description = `<span class="list-item--description">${item.description}</span>`;
  }

  let notes;
  if (item.notes === '') {
    notes = '-';
  } else {
    notes = item.notes;
  }

  let checklist = '';
  if (item.checklist.length === 1 && item.checklist[0] === '') {
    checklist = '-';
  } else {
    for (let i = 0; i < item.checklist.length; i++) {
      checklist += `<li class="list-item__checklist--item">
        <svg
          class="list-item__checklist--icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"
          />
        </svg>
        ${item.checklist[i]}
      </li>`;
    }
  }

  return `
    <div id="item-${projectId}-${itemId}" class="list-item">
      <div class="basic-info">
        <div>
          <span class="list-item--title">
            <span class="list-item--priority ${item.priority}-priority"></span
            >${item.title}</span
          >
          ${description}
        </div>
        <span class="list-item--date">${item.dueDate}</span>
      </div>
      <div class="full-info">
        <div class="list-item--notes">
          <p class="list-item__notes--title">Notes</p>
          <p class="list-item__notes--text">${notes}</p>
        </div>
        <ul class="list-item--checklist">
          <p>Checklist</p>
          ${checklist}
        </ul>
      </div>
    </div>
  `;
}

export default TodoList;
