function Project(title, items) {
  let _title = title;
  let _items = items || [];

  const getInfo = () => {
    return { title: _title, items: _items };
  };
  const getItems = () => _items;
  const addItem = (item) => _items.push(item);

  return { getInfo, getItems, addItem };
}

export default Project;