import ControlOneStageOne from '../store/ControlOneStageOne'
const useControlOneStageOne = () => {
  const {
    leftGroup,
    rightGroup,
    form: {value: formValue},
  } = ControlOneStageOne

  const removeButton = (id) => {
    ControlOneStageOne.removeButton(id)
  }
  const onChange = (e) => {
    ControlOneStageOne.changeForm(e)
  }
  const toggleEdit = (id) => {
    ControlOneStageOne.toggleEdit(id)
  }
  const changeBtnName = (e, id) => {
    ControlOneStageOne.changeButtonName(e, id)
  } 
  const changeCb = (callback, id) => {
    ControlOneStageOne.changeCallBack(callback, id)
  }
  return {
    leftGroup,
    rightGroup,
    formValue,
    removeButton,
    onChange,
    toggleEdit,
    changeBtnName,
    changeCb
  }
}
export default useControlOneStageOne
