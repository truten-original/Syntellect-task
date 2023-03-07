import ControlTwoStageOne from '../store/ControlTwoStageOne'

export const useControlTwoStageOne = () => {
  const {
    searchData,
    variantsQuantity: quantity,
    isSettingQuantity: setterVisible,
    form: searchValue
  } = ControlTwoStageOne

  const setVisible = () => {
    ControlTwoStageOne.toggleQuantitySet()
  }
  const search = (name) => {
    ControlTwoStageOne.searchCountry(name)
  }
  const quantitySet = (num) => {
    ControlTwoStageOne.quantitySet(num)
  } 
  const countryClick = (value) => {
    ControlTwoStageOne.clickCountry(value)
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
