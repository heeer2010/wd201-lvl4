const todoList = () => {
  all = [];
  let today = new Date().toLocaleDateString("en-CA");
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter((item) => item.dueDate < today);
  };

  const dueToday = () => {
    return all.filter((item) => item.dueDate === today);
  };

  const dueLater = () => {
    return all.filter((item) => item.dueDate > today);
  };

  function toDisplayableList(list) {
    return list
      .map(
        (item) =>
          `${item.completed ? `[x]` : `[ ]`} ${item.title} ${
            item.dueDate != today ? item.dueDate : " "
          }`
      )
      .join("\n");
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};
module.exports = todoList;
