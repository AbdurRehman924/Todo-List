function addTodo() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.textContent = text;
  li.onclick = () => li.classList.toggle('done');

  const del = document.createElement('span');
  del.textContent = '×';
  del.onclick = (e) => { e.stopPropagation(); li.remove(); };

  li.appendChild(del);
  document.getElementById('todoList').appendChild(li);
  input.value = '';
}

document.getElementById('todoInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTodo();
});
