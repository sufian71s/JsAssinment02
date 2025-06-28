
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    function addTodo() {
      const text = todoInput.value.trim();
      if (text === "") return;

      const todoItem = document.createElement("div");
      todoItem.className = "bg-white p-2 rounded-lg flex items-center justify-between";

      const todoText = document.createElement("span");
      todoText.textContent = text;
      todoText.className = "text-lg font-medium";

      const btnGroup = document.createElement("div");
      btnGroup.className = "flex space-x-2";

      // Done button
      const doneBtn = document.createElement("button");
      doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
      doneBtn.className = "bg-green-500 hover:bg-green-600 text-white p-2 rounded";
      doneBtn.onclick = () => {
        todoText.classList.toggle("line-through");
      };

      // Edit button
      const editBtn = document.createElement("button");
      editBtn.innerHTML = '<i class="fas fa-pen"></i>';
      editBtn.className = "bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded";
      editBtn.onclick = () => {
        todoText.classList.promot("line-through");
      };

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
      deleteBtn.className = "bg-red-500 hover:bg-red-600 text-white p-2 rounded";
      deleteBtn.onclick = () => {
        todoList.removeChild(todoItem);
      };

      btnGroup.append(doneBtn, editBtn, deleteBtn);
      todoItem.append(todoText, btnGroup);
      todoList.appendChild(todoItem);
      todoInput.value = "";
    }
  