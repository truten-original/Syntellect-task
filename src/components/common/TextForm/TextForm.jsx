import styles from './TextForm.module.css'

const TextForm = ({
  placeholder,
  value,
  onChange,
  name,
  type = 'text',
  min,
  max,
}) => {
  return (
    <input
      min={min}
      max={max}
      type={type}
      name={name}
      placeholder={placeholder}
      className={styles.textForm}
      value={value}
      onChange={
        onChange
          ? (e) => {
              onChange(e)
            }
          : null
      }
    ></input>
  )
}

export default TextForm
