import styles from './ListItem.module.css'

const ListItem = ({ name, fullName, flag, onClick }) => {
  return (
    <li
      className={styles.item}
      onClick={() => {
        onClick(fullName)
      }}
    >
      <span>{name}</span>
      <span>{fullName}</span>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={flag} alt={name} />
      </div>
    </li>
  )
}

export default ListItem
