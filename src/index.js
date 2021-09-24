import './styles/app.scss';
import DOMElements from './utils/DOMElements';
import Header from './components/Header';
import Project from './models/Project';
import Todo from './models/Todo';
import TodoList from './views/TodoList';
import ProjectList from './views/ProjectList';
import Form from './components/Form';

const ListController = (function () {
  const add = (project, item) => {
    project.addItem(item.getInfo());
  };

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
    }
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
ListController.read();
ListController.save();

DOMElements.todoList().insertAdjacentHTML('afterbegin', Header());
DOMElements.projects().insertAdjacentHTML('afterbegin', ProjectList(projects));
DOMElements.firstProject().classList.add('project-list--active');
DOMElements.h1().innerText = DOMElements.currentProject().innerText;

// Handle form input and create a new todo
function handleSubmit() {
  DOMElements.formSubmitBtn().addEventListener('click', (event) => {
    event.preventDefault();
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

// Display form to add new items
DOMElements.newTodoBtn().addEventListener(
  'click',
  () => {
    DOMElements.todoList().insertAdjacentHTML('beforeend', Form());
    handleSubmit();
  },
  false
);
