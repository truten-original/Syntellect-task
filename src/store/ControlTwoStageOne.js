import { makeObservable, observable } from 'mobx'
import ControlTwo from './ControlTwo'

class ControlTwoStageOne extends ControlTwo {
  searchData = []
  variantsQuantity = 3
  isSettingQuantity = false
  form=''
  constructor() {
    super()
    makeObservable(this, {
        searchData: observable,
        isSettingQuantity: observable,
        variantsQuantity: observable,
        form: observable
    })
  }
}

export default new ControlTwoStageOne()
