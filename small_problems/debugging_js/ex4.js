let todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    todos.shift() // delete todos[0] was here before
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {

  console.log(`ToDo list (${todos.length} tasks):`);
  console.log('---------------------');

  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();

/* 
The issue in this code was the use of delete. When attempting (and intending) to remove values from
the todos array, delete was deleting the value at index [0], but leaving that index in place. Thus, 
when compiling the remaining task list, the element at index 0 was logging as undefined. What the coder
meant to do was remove the index entirely, which can be done with the .shift( ) method. This removes 
the first indexed value and shifts all of the subsequent values down by one. Thus, when calling the 
displayTasksLists() function one line 45, a true updated task list is logged.

*/
