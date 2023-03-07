import Button from '../Button/Button'
import styles from './ButtonList.module.css'
import { observer } from 'mobx-react-lite'
const ButtonList = observer(
  ({ buttons, removeButton, toggleEdit, changeBtnName, changeCb }) => {
    return (
      <ul className={styles.btnList}>
        {buttons.map((b) => (
          <li key={b.id}>
            <Button
              {...b}
              removeButton={removeButton}
              toggleEdit={toggleEdit}
              changeBtnName={changeBtnName}
              changeCb={changeCb}
            />
          </li>
        ))}
      </ul>
    )
  }
)

export default ButtonList
