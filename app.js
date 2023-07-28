const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')
const createTodo = () => {
    const inputValue = input.value.trim()
    if (inputValue.length === 0) {
        alert('пустоту нельзя добавлять');
        return;
    }

    const div = document.createElement('div')
    const text = document.createElement('h3')
    const divButtons = document.createElement('div')
    const deleteButton = document.createElement('button')
    const editButton = document.createElement('button')

    div.setAttribute('class', 'block_text')
    divButtons.setAttribute('class', 'div_buttons')
    deleteButton.setAttribute('class', 'delete_button')
    editButton.setAttribute('class', 'edit_button')

    deleteButton.innerHTML = 'delete'
    editButton.innerHTML = 'edit'

    deleteButton.onclick = () => div.remove()

    editButton.onclick = () => {
        const editText = prompt(`EDIT ${text.innerHTML}`).trim()
        editText.length === 0 ? alert('нельзя менять на пустоту'): text.innerHTML = editText
    }

    text.innerHTML = input.value
    divButtons.append(deleteButton, editButton)
    div.append(text, divButtons)
    todoList.prepend(div)

    input.value = ''

    text.addEventListener('click', () => {
        text.classList.toggle('strike-through');
    });

}
createButton.onclick = () => createTodo()



