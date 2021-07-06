document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('#create-task-form').addEventListener("submit", (e) => {
    e.preventDefault()
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.type = 'remove'
    btn.id = 'removeLi'
    btn.textContent = 'X'
    
    btn.addEventListener('click', () => {
      li.remove()
    })

    li.textContent = e.target['new-task-description'].value
    li.append(btn)
    document.querySelector('#tasks').appendChild(li)
    })
})

