const openModalBtn = document.getElementById('button')
const closeBtn = document.getElementById('close')
const submitBtn = document.getElementById('submit')
const modalDialog = document.getElementById('modal')
const modalForm = document.forms[0]


openModalBtn.onclick = () => modalDialog.showModal()
closeBtn.onclick = () => modalDialog.close()
submitBtn.onclick = () => modalForm.classList.add('checked')