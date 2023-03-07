import styles from './Button.module.css'
import { ReactComponent as Edit } from '../../../assets/edit.svg'
import { ReactComponent as Close } from '../../../assets/close.svg'
import Modal from '../Modal/Modal'
import TextForm from '../TextForm/TextForm'
import { observer } from 'mobx-react-lite'
const Button = observer(
  ({
    callback,
    name,
    id,
    removeButton,
    isEdit,
    toggleEdit,
    changeBtnName,
    changeCb,
    withControls = true,
  }) => {
    const setVisibleEdit = () => toggleEdit(id)
    return (
      <div className={styles.btnContainer}>
        {withControls && (
          <div className={styles.btnControls}>
            <Edit className={styles.icon} onClick={setVisibleEdit} />
            <Close
              className={styles.icon}
              onClick={() => {
                removeButton(id)
              }}
            />
          </div>
        )}
        <button onClick={callback} className={styles.btn}>
          {name}
        </button>
        <Modal visible={isEdit} setVisible={setVisibleEdit}>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault()
              if (e.target.btnName.value.trim().length) {
                changeBtnName(e.target.btnName.value, id)
              }
              if (e.target.callback.value.trim().length) {
                changeCb(e.target.callback.value, id)
              }
              setVisibleEdit()
            }}
          >
            <TextForm name="btnName" placeholder="new name" />
            <TextForm name="callback" placeholder="()=>{...}" />
            <Button withControls={false} name="apply" />
          </form>
        </Modal>
      </div>
    )
  }
)

export default Button
