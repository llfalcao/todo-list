const DOMElements = (() => {
  const content = () => document.querySelector('#content');
  const projects = () => document.querySelector('#projects');
  const projectList = () => document.querySelector('.projects--list');
  const firstProject = () => document.querySelector('.project-item');
  const lastProject = () => {
    const nodes = document.querySelectorAll('.project-item');
    const last = nodes[nodes.length - 1];
    if (last !== null) {
      return last;
    }
  };
  const currentProject = () => document.querySelector('.project-item--active');
  const newProjectBtn = () => document.querySelector('#btn-new-project');
  const newProjectInput = () => document.querySelector('#new-project-input');
  const todoList = () => document.querySelector('#todo');
  const h1 = () => document.querySelector('h1');
  const listContainer = () => document.querySelector('.list-container');
  const itemFullInfo = (item) =>
    document.querySelector(`#${item.id} .full-info`);
  const newTodoBtn = () => document.querySelector('#btn-new-todo');
  const overlay = () => document.querySelector('.overlay');
  const form = () => document.querySelector('.form');
  const formRadio = () => document.querySelector('input[type=radio]:checked');
  const formChecklist = () => document.querySelector('.checklist');
  const lastChecklistItem = () =>
    document.querySelector('.checklist-item:last-child input');
  const formSubmitBtn = () => document.querySelector('#btn-submit-form');

  const getFormInput = () => {
    let checklist = [];
    const input = Object.values(form()).reduce((obj, field) => {
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
    form,
    formChecklist,
    formRadio,
    formSubmitBtn,
    getFormInput,
    h1,
    itemFullInfo,
    lastProject,
    lastChecklistItem,
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

export default DOMElements;
