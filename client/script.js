async function getUsers() {
  const res = await fetch('http://localhost:3333')

  const data = await res.json()

  data.forEach((user) => {
    const li = `<li>${user.username}</li>`

    document.getElementById('lista').insertAdjacentHTML('beforeend', li)
  })
}

getUsers()

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  //   const username = document.getElementById('usernameInput').value

  //   const email = document.getElementById('emailInput').value

  const formData = new FormData(form)
  const data = new URLSearchParams(formData)

  console.log(data)
  async function PostUser() {
    const res = await fetch('http://localhost:3333', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    })
  }

  PostUser()
})
