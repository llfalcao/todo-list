import './styles/app.scss';
import DOMElements from './utils/DOMElements';
import Project from './models/Project';
import Todo from './models/Todo';
import TodoList from './views/TodoList';
import ProjectList from './views/ProjectList';
import Form from './components/Form';

const ListController = (function () {
  const addItem = (project, item) => {
    project.addItem(item.getInfo());
    let isSaved = false;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].title === project.getInfo().title) {
        isSaved = true;
        break;
      }
    }
    if (!isSaved) projects.push(project);
  };

  const updateList = () => {
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  return { addItem, updateList };
})();

// Handle form input and create a new todo
function handleSubmit() {
  DOMElements.formSubmitBtn().addEventListener('click', (e) => {
    e.preventDefault();
    const input = DOMElements.getFormInput();
    const newItem = Todo(
      input.title,
      input.description,
      input.date,
      input.priority,
      input.notes,
      input.checklist
    );

    ListController.addItem(defaultProject, newItem);
    ListController.updateList();
  });
}

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

projects.push(defaultProject.getInfo());
projects.push(dev.getInfo());
projects.push(work.getInfo());

const title3 = Todo(
  'Find that old song',
  'Description 3',
  '18/11/2021',
  'high',
  '',
  []
);
ListController.addItem(defaultProject, title3);

DOMElements.projects().insertAdjacentHTML('afterbegin', ProjectList(projects));
DOMElements.firstProject().classList.add('project-list--active');
DOMElements.todoList().insertAdjacentHTML('beforeend', TodoList(projects[0]));

DOMElements.newTodoBtn().addEventListener(
  'click',
  (e) => {
    DOMElements.todoList().insertAdjacentHTML('beforeend', Form());
    handleSubmit();
  },
  false
);

const printThis = function printProjects() {
  console.log(projects);
};

printThis();
