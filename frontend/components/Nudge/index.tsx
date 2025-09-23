import styles from './index.module.scss'

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
			{/* TODO: add icon */}
      <p>{label}</p>
			{/* TODO: add icon */}
		</div>
	)
}

export default Nudge