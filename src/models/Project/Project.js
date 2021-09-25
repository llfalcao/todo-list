function Project(id, title, items) {
  const _id = parseInt(id);
  const _title = title;
  const _items = items || [];

  const getInfo = () => {
    return { id: _id, title: _title, items: _items };
  };
  const getItems = () => _items;
  const addItem = (item) => _items.push(item);

  return { getInfo, getItems, addItem };
}

export default Project;
