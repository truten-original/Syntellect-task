import ControlTwoStageTwo from '../store/ControlTwoStageTwo'

export const useControlTwoStageTwo = () => {
  const {
    searchData,
    variantsQuantity: quantity,
    isSettingQuantity: setterVisible,
    form: searchValue
  } = ControlTwoStageTwo

  const setVisible = () => {
    ControlTwoStageTwo.toggleQuantitySet()
  }
  const search = (name) => {
    ControlTwoStageTwo.searchCountry(name)
  }
  const quantitySet = (num) => {
    ControlTwoStageTwo.quantitySet(num)
  } 
  const countryClick = (value) => {
    ControlTwoStageTwo.clickCountry(value)
  }
  const data = searchData.slice(0, quantity)
  return {
    data,
    quantity,
    setterVisible,
    setVisible,
    search,
    quantitySet,
    searchValue,
    countryClick
  }
}
