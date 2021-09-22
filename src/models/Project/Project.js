function Project(title) {
  let _title = title;
  let _items = [];

  const getProjectInfo = () => {
    return { title: _title, items: _items };
  };
  const getItems = () => _items;
  const addItem = (item) => _items.push(item);

  return { getProjectInfo, getItems, addItem };
}

export default Project;
