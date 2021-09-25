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

  return { add, read, save };
})();

let projects = [];

DOMElements.content().insertAdjacentHTML('afterbegin', ProjectSection());
ListController.read();
DOMElements.todoList().insertAdjacentHTML('afterbegin', Header());
DOMElements.h1().innerText = DOMElements.currentProject().innerText;

// Add a new Todo to the list
function handleSubmit() {
  DOMElements.formSubmitBtn().addEventListener('click', () => {
    const input = DOMElements.getFormInput();
    const newItem = Todo(
      input.title,
      input.description,
      input.date,
      input.priority,
      input.notes,
      input.checklist
    );

    ListController.add(projects[0], newItem);
    ListController.save();
    ListController.read();
    DOMElements.form().remove();
    DOMElements.overlay().remove();
  });
}

DOMElements.newTodoBtn().addEventListener('click', () => {
  DOMElements.todoList().insertAdjacentHTML('beforeend', Form());
  handleSubmit();
});

// Create a new project
function handleKeyboard() {
  const input = DOMElements.newProjectInput();
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      let newProject = Project(input.value);
      projects.push(newProject);
      DOMElements.newProjectInput().remove();
      ListController.save();
      ListController.read();
      DOMElements.firstProject().classList.remove('project-item--active');
      DOMElements.latestProject().classList.add('project-item--active');
    }
    if (event.key === 'Escape') {
      DOMElements.newProjectInput().remove();
    }
  });
}

DOMElements.newProjectBtn().addEventListener('click', () => {
  if (DOMElements.newProjectInput()) {
    DOMElements.newProjectInput().focus();
    return;
  }
  const input = `<input
    id="new-project-input"
    type="text"
    placeholder="New Project"
  />`;
  DOMElements.projectList().insertAdjacentHTML('beforeend', input);
  DOMElements.newProjectInput().focus();

  handleKeyboard();
});
