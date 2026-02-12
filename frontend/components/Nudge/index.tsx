import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

interface NudgeProps {
	className?: string,
	label: string
}

const Nudge: React.FC<NudgeProps> = ({
	className,
	label
}) => {
	return (
		<div className={`${className && className} ${styles.nudge}`}>
			<FontAwesomeIcon icon={faArrowDown} size="xl"/>
      <p>{label}</p>
			<FontAwesomeIcon icon={faArrowDown} size="xl"/>
		</div>
	)
}

export default Nudge