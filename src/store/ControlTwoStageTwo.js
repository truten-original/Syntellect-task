import { makeObservable, observable } from 'mobx'
import ControlTwo from './ControlTwo'

class ControlTwoStageTwo extends ControlTwo {
  searchData = []
  variantsQuantity = 10
  isSettingQuantity = false
  form=''
  constructor() {
    super()
    makeObservable(this, {
        searchData: observable,
        variantsQuantity:  observable,
        isSettingQuantity: observable,
        form: observable
    
    })
  }
}

export default new ControlTwoStageTwo()
