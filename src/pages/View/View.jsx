import { observer } from 'mobx-react-lite'
import FirstControl from '../../components/Controls/FirstControl/FirstControl'
import SecondControl from '../../components/Controls/SecondControl/SecondControl'
import useControlOneStageOne from '../../hooks/useControlOneStageOne'
import useControlOneStageTwo from '../../hooks/useControlOneStageTwo'
import { useControlTwoStageOne } from '../../hooks/useControlTwoStageOne'
import { useControlTwoStageTwo } from '../../hooks/useControlTwoStageTwo'
import styles from './View.module.css'
const View = observer(() => {
  const propsFirstOne = useControlOneStageOne()
  const propsFirstTwo = useControlOneStageTwo()
  const propsSecondOne = useControlTwoStageOne()
  const propsSecondTwo = useControlTwoStageTwo()
  return (
    <>
      <h2>First control examples</h2>
      <div className={styles.controlGroup}>
        <FirstControl {...propsFirstOne} />
        <FirstControl {...propsFirstTwo} />
      </div>
      <h2>Second control examples</h2>
      <div className={styles.controlGroup}>
        <SecondControl {...propsSecondOne} />
        <SecondControl {...propsSecondTwo} />
      </div>
    </>
  )
})

export default View
