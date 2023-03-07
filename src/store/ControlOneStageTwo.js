import { action, computed, makeObservable, observable } from 'mobx'
import ControlOne from './ControlOne'

class ControlOneStageTwo extends ControlOne {
  form = {
    value: '',
    isValid: true,
  }
  buttons = [
    {
      id: 3,
      name: 'control text',
      callback: () => {
        alert(this.form.value)
      },
      position: 'right',
      isEdit: false,
    },
    {
      id: 4,
      name: 'control number',
      callback: () => {
        if (this.form.value.trim().length) {
          if (!isNaN(Number(this.form.value))) alert(this.form.value)
        }
      },
      position: 'left',
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
      changeCallBack: action,
    })
  }
}

export default new ControlOneStageTwo()
