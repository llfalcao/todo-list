const DOM = (() => {
  // Page Container
  const content = () => document.querySelector('#content');

  // Projects Section
  const projects = () => document.querySelector('#projects');
  const newProjectBtn = () => document.querySelector('#btn-new-project');
  const newProjectInput = () => document.querySelector('#new-project-input');
  const projectList = () => document.querySelector('.projects--list');
  const currentProject = () => document.querySelector('.project-item--active');
  const firstProject = () => document.querySelector('.project-item');

  const lastProject = () => {
    const nodes = document.querySelectorAll('.project-item');
    const last = nodes[nodes.length - 1];
    if (last !== null) {
      return last;
    }
  };

  // Todo List Section
  const headerTitle = () => document.querySelector('.header-title');
  const headerInput = () => document.querySelector('#project-edit-title');
  const headerTip = () => document.querySelector('.tip');
  const todoList = () => document.querySelector('#todo');
  const h1 = () => document.querySelector('h1');
  const listContainer = () => document.querySelector('.list-container');
  const itemFullInfo = (item) =>
    document.querySelector(`#${item.id} .full-info`);
  const newTodoBtn = () => document.querySelector('#btn-new-todo');

  // Form for new Todos
  const overlay = () => document.querySelector('.overlay');
  const _form = () => document.querySelector('.form');
  const formTitleInput = () => document.querySelector('#form-item--title');
  const formRadio = () => document.querySelector('input[type=radio]:checked');
  const formChecklist = () => document.querySelector('.checklist');
  const lastChecklistItem = () =>
    document.querySelector('.checklist-item:last-child input');
  const formSubmitBtn = () => document.querySelector('#btn-submit-form');

  // Form input handling
  const getFormInput = () => {
    let checklist = [];
    const input = Object.values(_form()).reduce((obj, field) => {
      if (field.type === 'radio') {
        obj[field.name] = formRadio().value;
      } else if (field.name === 'checklist') {
        checklist.push(field.value);
        obj[field.name] = checklist;
      } else {
        obj[field.name] = field.value;
      }
      return obj;
    }, {});

    delete input[''];
    return input;
  };

  return {
    content,
    currentProject,
    firstProject,
    formChecklist,
    formRadio,
    formSubmitBtn,
    formTitleInput,
    getFormInput,
    h1,
    headerInput,
    headerTip,
    headerTitle,
    itemFullInfo,
    lastChecklistItem,
    lastProject,
    listContainer,
    newProjectBtn,
    newProjectInput,
    newTodoBtn,
    overlay,
    projectList,
    projects,
    todoList,
  };
})();

export default DOM;
