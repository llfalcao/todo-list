function Project(id, title, items) {
  const _id = parseInt(id);
  let _title = title;
  const _items = items || [];

  const getInfo = () => {
    return { id: _id, title: _title, items: _items };
  };
  const getItems = () => _items;
  const addItem = (item) => _items.push(item);
  const setTitle = (title) => (_title = title);

  return { getInfo, setTitle, getItems, addItem };
}

export default Project;
