/* eslint-disable no-undef */
"use strict";
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueLater, dueToday } = todoList();

var Today = new Date();
let yesterday = new Date(new Date().setDate(Today.getDate() - 1));
let tomorrow = new Date(new Date().setDate(Today.getDate() + 1));

Today = Today.toLocaleDateString("en-CA");
yesterday = yesterday.toLocaleDateString("en-CA");
tomorrow = tomorrow.toLocaleDateString("en-CA");

describe("Todolist Test Suit", () => {
  beforeAll(() => {
    add({
      title: "Practise of tailwind css",
      completed: false,
      dueDate: yesterday,
    }),
      add({
        title: "Learning Backend",
        completed: false,
        dueDate: tomorrow,
      });
  });
  test("Add a new todo in list", () => {
    const todoItemCount = all.length;
    add({
      title: "Learning Jest From Pupilfist",
      completed: false,
      dueDate: Today,
    });
    expect(all.length).toBe(todoItemCount + 1);
  });
  test("should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("retrive all todos that are overdue", () => {
    const todolist = overdue();
    expect(
      todolist.every((todo) => {
        return todo.dueDate === yesterday;
      })
    ).toBe(true);
  });
  test("retrive all todos that are duetoday", () => {
    const todolist = dueToday();
    expect(
      todolist.every((todo) => {
        return todo.dueDate === Today;
      })
    ).toBe(true);
  });
  test("retrive all todos that are duelater", () => {
    const todolist = dueLater();
    expect(
      todolist.every((todo) => {
        return todo.dueDate === tomorrow;
      })
    ).toBe(true);
  });
});
