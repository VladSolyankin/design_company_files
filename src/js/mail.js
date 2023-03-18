document.querySelector('html').addEventListener('DOMContentLoaded', () => {
	let sendButton = document.getElementById("send_button")
	let message = document.querySelector('textarea')
	let mailForm = document.querySelector('.main__form-mail')

	sendButton.addEventListener('click', (e) => {
		e.preventDefault()
		mailForm.action = `mailto:ourteam@example.com?body=${message}`
	})
})