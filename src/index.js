import './styles/app.scss';
import Project from './models/Project';
import Todo from './models/Todo';
import TodoList from './views/TodoList';
import ProjectList from './views/ProjectList';
import Form from './components/Form';

const DOMElements = (() => {
  const projects = () => document.querySelector('#projects');
  const todoList = () => document.querySelector('#todo');
  const firstProject = () =>
    document.querySelector('.project-item', ':first-child');
  const newTodoBtn = () => document.querySelector('#btn-new-todo');

  return { projects, todoList, firstProject, newTodoBtn };
})();

let projects = [];
const defaultProject = Project('Untitled');
const dev = Project('Development');
const work = Project('Work');

const title1 = Todo(
  'Develop a new product',
  'Description 1',
  '22/09/2021',
  'low',
  '',
  []
);
defaultProject.addItem(title1.getInfo());

const title2 = Todo(
  'Present new ideas in three weeks',
  'Description 2',
  '31/10/2021',
  'normal',
  '',
  []
);
defaultProject.addItem(title2.getInfo());

const title3 = Todo(
  'Find that old song',
  'Description 2',
  '18/11/2021',
  'high',
  '',
  []
);
defaultProject.addItem(title3.getInfo());

projects.push(defaultProject.getProjectInfo());
projects.push(dev.getProjectInfo());
projects.push(work.getProjectInfo());

DOMElements.projects().insertAdjacentHTML('afterbegin', ProjectList(projects));
DOMElements.firstProject().classList.add('project-list--active');
DOMElements.todoList().insertAdjacentHTML('beforeend', TodoList(projects[0]));
DOMElements.newTodoBtn().addEventListener(
  'click',
  () => {
    DOMElements.todoList().insertAdjacentHTML('beforeend', Form());
  },
  false
);
