import { observer } from 'mobx-react-lite'
import { ReactComponent as Setter } from '../../../assets/set.svg'
import Modal from '../../common/Modal/Modal'
import TextForm from '../../common/TextForm/TextForm'
import ListItem from '../../ListItem/ListItem'
import styles from './SecondControl.module.css'
const SecondControl = observer(
  ({
    search,
    data,
    quantity,
    setVisible,
    quantitySet,
    setterVisible,
    searchValue,
    countryClick,
  }) => {
    return (
      <>
        <div className={styles.controlContainer}>
          <div className={styles.search}>
            <TextForm onChange={search} value={searchValue} />
            <Setter className={styles.icon} onClick={setVisible} />
          </div>
          <ul className={styles.list}>
            {data.map((c) => (
              <ListItem
                onClick={countryClick}
                name={c.name}
                fullName={c.fullName}
                flag={c.flag}
                key={c.flag}
              />
            ))}
          </ul>
        </div>
        {
          <Modal visible={setterVisible} setVisible={setVisible}>
            <div className={styles.setterContainer}>
              <TextForm
                value={quantity}
                onChange={quantitySet}
                min={1}
                max={10}
                name="variantsQuantity"
                type="number"
                placeholder="display by:"
              />
              <span>{quantity}</span>
            </div>
          </Modal>
        }
      </>
    )
  }
)

export default SecondControl
