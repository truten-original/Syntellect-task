import { getId } from '../utils'

class ControlOne {
  changeForm(e) {
    const value = e.target.value
    this.form.value = value
    this.form.isValid = false
    const valuesArr = value.split(',')
    if (valuesArr.length === 2) {
      const quantity = Number(valuesArr[0].split(':')[1])
      let position = valuesArr[1].split(':')[1]
      if (position) {
        position = position.trim()
      }

      if (!isNaN(quantity)) {
        if (position === 'right' || position === 'left') {
          this.form.isValid = true
          for (let i = 0; i < quantity; i++) {
            this.buttons.push({
              id: getId(),
              name: 'text',
              callback: () => {},
              position,
              isEdit: false,
            })
          }
        }
      }
    }
  }
  buttonById(id) {
    return this.buttons.find((b) => b.id === id)
  }
  changeButtonName(name, id) {
    const btn = this.buttonById(id)
    btn.name = name
  }
  changeCallBack(callback, id) {
    const btn = this.buttonById(id)
      const callJS = eval(`${callback}`)
      btn.callback = callJS
  }
  toggleEdit(id) {
    const btn = this.buttonById(id)
    btn.isEdit = !btn.isEdit
  }
  removeButton(id) {
    this.buttons = this.buttons.filter((b) => b.id !== id)
  }

  get leftGroup() {
    return this.buttons.filter((b) => b.position === 'left')
  }
  get rightGroup() {
    return this.buttons.filter((b) => b.position === 'right')
  }
}

export default ControlOne
