import ControlOneStageTwo from '../store/ControlOneStageTwo'
const useControlOneStageTwo = () => {
  const {
    leftGroup,
    rightGroup,
    form: {value: formValue},
  } = ControlOneStageTwo
  const removeButton = (id) => {
    ControlOneStageTwo.removeButton(id)
  }
  const onChange = (e) => {
    ControlOneStageTwo.changeForm(e)
  }
  const toggleEdit = (id) => {
    ControlOneStageTwo.toggleEdit(id)
  }
  const changeBtnName = (e, id) => {
    ControlOneStageTwo.changeButtonName(e, id)
  } 
  const changeCb = (callback, id) => {
    ControlOneStageTwo.changeCallBack(callback, id)
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

export default useControlOneStageTwo
