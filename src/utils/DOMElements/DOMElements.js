const DOMElements = (() => {
  const projects = () => document.querySelector('#projects');
  const firstProject = () => document.querySelector('.project-item');
  const todoList = () => document.querySelector('#todo');
  const listContainer = () => document.querySelector('.list-container');
  const newTodoBtn = () => document.querySelector('#btn-new-todo');
  const form = () => document.querySelector('.form');
  const formRadio = () => document.querySelector('input[type=radio]:checked');
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
    firstProject,
    form,
    formRadio,
    formSubmitBtn,
    getFormInput,
    listContainer,
    newTodoBtn,
    projects,
    todoList,
  };
})();

export default DOMElements;
