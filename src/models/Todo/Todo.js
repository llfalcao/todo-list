const Todo = (title, description, dueDate, priority, notes, checklist) => {
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _priority = priority;
  let _notes = notes;
  let _checklist = checklist;

  const getInfo = () => {
    return {
      title: _title,
      description: _description,
      dueDate: _dueDate,
      priority: _priority,
      notes: _notes,
      checklist: _checklist,
    };
  };

  return { getInfo };
};

export default Todo;
