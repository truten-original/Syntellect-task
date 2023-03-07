import {  action, computed, makeObservable, observable } from 'mobx'
import ControlOne from './ControlOne'

class ControlOneStageOne extends ControlOne {
    form = {
        value: '',
        isValid: true,
      }
  buttons = [
    {
      id: 1,
      name: 'clear control',
      callback: () => {
        this.form.value = ''
      },
      position: 'right',
      isEdit: false,
    },
    {
      id: 2,
      name: 'Hello World!',
      callback: () => {
        this.form.value = 'Hello World!'
      },
      position: 'right',
      isEdit: false,
    },
  ]
  constructor() {
    super()
    makeObservable(this, {
        buttons: observable,
        form: observable,
        changeForm: action,
        leftGroup: computed,
        removeButton: action,
        rightGroup: computed,
        toggleEdit: action,
        changeButtonName: action,
        changeCallBack: action
    })
  }
}

export default new ControlOneStageOne()
