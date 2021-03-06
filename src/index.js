import './styles/app.scss';
import DOM from './utils/DOM';
import Project from './models/Project';
import Todo from './models/Todo';
import ProjectSection from './sections/ProjectSection';
import ProjectList from './views/ProjectList';
import Header from './components/Header';
import TodoList from './views/TodoList';
import Form from './components/Form';

const ListController = (function () {
  const add = (project, item) => {
    project.addItem(item.getInfo());
  };

  const load = (item) => {
    const id = item.id.substring(5);
    DOM.currentProject().classList.remove('project-item--active');
    item.classList.add('project-item--active');
    DOM.listContainer().remove();
    DOM.todoList().insertAdjacentHTML(
      'beforeend',
      TodoList(projects[id].getInfo())
    );
    DOM.h1().innerText = DOM.currentProject().innerText;
  };

  // Read from local storage
  const read = () => {
    projects = JSON.parse(localStorage.getItem('projects'));
    if (projects === null) {
      projects = [];
      let defaultProject = Project(projects.length, 'Untitled');
      projects.push(defaultProject);
    } else {
      for (let i in projects) {
        projects[i] = Project(i, projects[i].title, projects[i].items);
      }
      DOM.projectList().remove();
      DOM.projects().insertAdjacentHTML(
        'beforeend',
        `<section class="projects--list"></section>`
      );
    }

    DOM.projectList().insertAdjacentHTML('beforeend', ProjectList(projects));
    DOM.firstProject().classList.add('project-item--active');

    if (DOM.listContainer() !== null) {
      DOM.listContainer().remove();
    }
    DOM.todoList().insertAdjacentHTML(
      'beforeend',
      TodoList(projects[0].getInfo())
    );
  };

  const save = () => {
    let userData = [];
    for (let i in projects) {
      userData.push(projects[i].getInfo());
    }
    localStorage.setItem('projects', JSON.stringify(userData));
  };

  return { add, load, read, save };
})();

let projects = [];

DOM.content().insertAdjacentHTML('afterbegin', ProjectSection());
ListController.read();
DOM.todoList().insertAdjacentHTML('afterbegin', Header());
DOM.h1().innerText = DOM.currentProject().innerText;

// Event Listener Handler
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.closest(selector)) callback(e);
  });
}

// Mobile: Show/Hide Projects Section
addGlobalEventListener('click', '.menu', (e) => {
  DOM.projects().classList.toggle('hidden');
});

// Display project form
addGlobalEventListener('click', '#btn-new-project', () => {
  const textBox = DOM.newProjectInput();
  if (textBox) {
    textBox.focus();
    return;
  }
  const list = DOM.projectList();
  const input = `<input
    id="new-project-input"
    type="text"
    placeholder="New Project"
  />`;
  list.insertAdjacentHTML('beforeend', input);
  list.scrollTo(0, list.scrollHeight);
  DOM.newProjectInput().focus();
});

// Add new project
addGlobalEventListener('keydown', '#new-project-input', (event) => {
  let name = event.target.value;
  if (event.key === 'Enter') {
    if (name === '') {
      name = 'Untitled';
    }
    projects.push(Project(projects.length, name));
    event.target.remove();
    ListController.save();
    ListController.read();
    ListController.load(DOM.lastProject());
    const list = DOM.projectList();
    list.scrollTo(0, list.scrollHeight);
  }
  if (event.key === 'Escape') {
    DOM.newProjectInput().remove();
  }
});

// Edit Project Name
function removeProjectEditing() {
  DOM.h1().style.opacity = 1;
  DOM.headerInput().remove();
  DOM.headerTip().style.display = 'none';
  DOM.headerTitle().classList.remove('expanded-title');
}

addGlobalEventListener('click', '#btn-edit-project', () => {
  if (DOM.headerInput()) {
    removeProjectEditing();
    return;
  }
  const input = `<input
    id="project-edit-title"
    type="text"
    placeholder="${DOM.h1().innerText}"
  />`;
  DOM.h1().style.opacity = 0;
  DOM.headerTitle().insertAdjacentHTML('beforeend', input);
  DOM.headerTip().style.display = 'block';
  DOM.headerTitle().classList.add('expanded-title');
  DOM.headerInput().focus();
});

// Save New Project Name
addGlobalEventListener('keydown', '#project-edit-title', (event) => {
  const key = event.key;
  if (key !== 'Enter' && key !== 'Escape') {
    return;
  }
  const name = event.target.value;
  if (key === 'Enter') {
    if (name === '' || name === DOM.h1().innerText) {
      removeProjectEditing();
      return;
    }
    const id = DOM.currentProject().id.substring(5);
    projects[id].setTitle(name);
    ListController.save();
    DOM.currentProject().innerText = name;
    ListController.load(DOM.currentProject());
  }
  removeProjectEditing();
});

// Display Todo Form
addGlobalEventListener('click', '#btn-new-todo', () => {
  DOM.todoList().insertAdjacentHTML('beforeend', Form());
  DOM.formTitleInput().focus();
});

// Close Todo Form
addGlobalEventListener('click', '#btn-close-form', () => {
  DOM.overlay().remove();
});

// Submit Todo Form
addGlobalEventListener('submit', '.form-wrapper', (event) => {
  event.preventDefault();
  const input = DOM.getFormInput();
  if (input.title === '') {
    return;
  }
  const newItem = Todo(
    input.title,
    input.description,
    input.date,
    input.priority,
    input.notes,
    input.checklist
  );
  const id = DOM.currentProject().id.substring(5);
  ListController.add(projects[id], newItem);
  ListController.save();
  ListController.load(DOM.currentProject());
  DOM.overlay().remove();
});

// Switch between projects
addGlobalEventListener('click', '.project-item', (event) => {
  ListController.load(event.target);
});

// Add new checklist item
addGlobalEventListener('click', '#btn-new-checklist-item', (event) => {
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'checklist';
  const wrapper = document.createElement('div');
  wrapper.classList.add('checklist-item');
  wrapper.appendChild(input);
  const btn = event.target;
  wrapper.appendChild(btn);
  DOM.formChecklist().insertAdjacentElement('beforeend', wrapper);
  DOM.lastChecklistItem().focus();
});

// Display full todo info
addGlobalEventListener('click', '.basic-info', (event) => {
  const item = event.target.closest('.list-item');
  const info = DOM.itemFullInfo(item);
  if (item.classList.contains('expanded')) {
    info.style.maxHeight = '0';
    item.classList.remove('expanded');
    return;
  }
  const infoHeight = info.scrollHeight;
  info.style.maxHeight = infoHeight + 'px';
  item.classList.add('expanded');
});
