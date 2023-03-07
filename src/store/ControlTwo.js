import { action, makeObservable } from 'mobx'
import { getCountryByName } from '../api/apiService'

class ControlTwo {
  constructor() {
    makeObservable(this, {
      searchCountry: action,
      toggleQuantitySet: action,
      quantitySet: action,
      setData: action,
      clickCountry: action,
    })
  }
  setData(data) {
    this.searchData = data
  }
  searchCountry(e) {
    if (typeof e === 'string') {
      this.searchData = []
      getCountryByName(e).then((data) => this.setData(data))
    } else {
      this.form = e.target.value
      this.searchData = []
      getCountryByName(e.target.value).then((data) => this.setData(data))
    }
  }
  toggleQuantitySet() {
    this.isSettingQuantity = !this.isSettingQuantity
  }
  quantitySet(e) {
    this.variantsQuantity = Number(e.target.value)
  }
  clickCountry(value) {
    this.form = value
    this.searchCountry(value)
  }
}
export default ControlTwo
