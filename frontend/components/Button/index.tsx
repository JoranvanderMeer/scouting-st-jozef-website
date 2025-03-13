import Link from 'next/link'
import styles from './index.module.scss'

interface ButtonProps {
	className?: string,
	linkTo?: string,
	onClick?: () => void,
	label: string,
	color: 'gray' | 'red' | 'green' | 'yellow'
	// TODO: add icon
}

const Button: React.FC<ButtonProps> = ({
	className,
	linkTo,
	onClick,
	label,
	color
}) => {
	const colorClassName = 
		color === 'gray' ? styles.gray : 
		color === 'red' ? styles.red :
		color === 'green' ? styles.green :
		styles.yellow;

	return (
		<>
			{linkTo ? 
				<Link 
					href={linkTo} className={`${className && className} ${colorClassName} ${styles.button}`}>
					<div className={styles.buttonInner}>
						{label}
					</div>
				</Link>
			: 
				<button className={`${className && className} ${styles.button}`} onClick={onClick}>
					<div className={styles.buttonInner}>
						{label}
					</div>
				</button>
			}
		</>
	)
}

export default Button