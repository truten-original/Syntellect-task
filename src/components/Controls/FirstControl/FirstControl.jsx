import { observer } from 'mobx-react-lite'
import ButtonList from '../../common/ButtonList/ButtonList'
import TextForm from '../../common/TextForm/TextForm'
import styles from './FirstControl.module.css'

const FirstControl = observer(
  ({
    rightGroup,
    leftGroup,
    onChange,
    formValue,
    removeButton,
    toggleEdit,
    changeBtnName,
    changeCb,
  }) => {
    return (
      <div className={styles.control}>
        <ButtonList
          removeButton={removeButton}
          buttons={leftGroup}
          toggleEdit={toggleEdit}
          changeBtnName={changeBtnName}
          changeCb={changeCb}
        />
        <TextForm
          value={formValue}
          onChange={onChange}
          placeholder="q: 1, p: right/left"
        />
        <ButtonList
          removeButton={removeButton}
          buttons={rightGroup}
          toggleEdit={toggleEdit}
          changeBtnName={changeBtnName}
          changeCb={changeCb}
        />
      </div>
    )
  }
)

export default FirstControl
