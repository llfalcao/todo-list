import './styles/app.scss';
import Project from './models/Project';
import Todo from './models/Todo';
import TodoList from './views/TodoList';
import ProjectList from './views/ProjectList';

const DOMElements = (() => {
  const body = document.querySelector('body');
  const projects = document.querySelector('#projects');
  const todoList = document.querySelector('#todo');

  return { body, projects, todoList };
})();

let projects = [];
const defaultProject = Project('Untitled');

const title1 = Todo('Title 1', 'Description 1', '22/09/2021', 'normal', '', []);
defaultProject.addItem(title1.getInfo());

const title2 = Todo('Title 2', 'Description 2', '31/10/2021', 'normal', '', []);
defaultProject.addItem(title2.getInfo());

projects.push(defaultProject.getProjectInfo());
console.log(projects[0]);
DOMElements.todoList.insertAdjacentHTML('beforeend', TodoList(projects[0]));
DOMElements.projects.insertAdjacentHTML('afterbegin', ProjectList(projects));
