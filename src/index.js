import './styles/app.scss';
import DOMElements from './utils/DOMElements';
import Project from './models/Project';
import Todo from './models/Todo';
import Header from './components/Header';
import ProjectSection from './sections/ProjectSection';
import ProjectList from './views/ProjectList';
import TodoList from './views/TodoList';
import Form from './components/Form';

const ListController = (function () {
  const add = (project, item) => {
    project.addItem(item.getInfo());
  };

  const load = (item) => {
    console.log(item);
    const id = item.id.substring(5);
    DOMElements.currentProject().classList.remove('project-item--active');
    item.classList.add('project-item--active');
    DOMElements.listContainer().remove();
    DOMElements.todoList().insertAdjacentHTML(
      'beforeend',
      TodoList(projects[id].getInfo())
    );
  };

  // Read from local storage
  const read = () => {
    projects = JSON.parse(localStorage.getItem('projects'));
    if (projects === null) {
      projects = [];
      let defaultProject = Project('Untitled');
      projects.push(defaultProject);
    } else {
      for (let i in projects) {
        projects[i] = Project(projects[i].title, projects[i].items);
      }
      DOMElements.projectList().remove();
      DOMElements.projects().insertAdjacentHTML(
        'beforeend',
        `<section class="projects--list"></section>`
      );
    }

    DOMElements.projectList().insertAdjacentHTML(
      'beforeend',
      ProjectList(projects)
    );
    DOMElements.firstProject().classList.add('project-item--active');

    if (DOMElements.listContainer() !== null) {
      DOMElements.listContainer().remove();
    }
    DOMElements.todoList().insertAdjacentHTML(
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

DOMElements.content().insertAdjacentHTML('afterbegin', ProjectSection());
ListController.read();
DOMElements.todoList().insertAdjacentHTML('afterbegin', Header());
DOMElements.h1().innerText = DOMElements.currentProject().innerText;

// Event Listener Handler
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

// Display todo form
addGlobalEventListener('click', '#btn-new-todo', () => {
  DOMElements.todoList().insertAdjacentHTML('beforeend', Form());
});

// Add new todo
addGlobalEventListener('click', '#btn-submit-form', (e) => {
  const id = DOMElements.currentProject().id.substring(5);
  const input = DOMElements.getFormInput();
  const newItem = Todo(
    input.title,
    input.description,
    input.date,
    input.priority,
    input.notes,
    input.checklist
  );
  ListController.add(projects[id], newItem);
  ListController.save();
  ListController.load(DOMElements.currentProject());
  DOMElements.form().remove();
  DOMElements.overlay().remove();
});

// Switch between projects
addGlobalEventListener('click', '.project-item', (event) => {
  ListController.load(event.target);
});

// Display project form
addGlobalEventListener('click', '#btn-new-project', () => {
  const textBox = DOMElements.newProjectInput();
  if (textBox) {
    textBox.focus();
    return;
  }
  const input = `<input
    id="new-project-input"
    type="text"
    placeholder="New Project"
  />`;
  DOMElements.projectList().insertAdjacentHTML('beforeend', input);
  DOMElements.newProjectInput().focus();
});

// Add new project
addGlobalEventListener('keydown', '#new-project-input', (event) => {
  const input = event.target;
  if (event.key === 'Enter') {
    projects.push(Project(input.value));
    event.target.remove();
    ListController.save();
    ListController.read();
    ListController.load(DOMElements.latestProject());
  }
  if (event.key === 'Escape') {
    DOMElements.newProjectInput().remove();
  }
});