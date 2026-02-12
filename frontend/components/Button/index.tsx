import Link from 'next/link'
import styles from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
	className?: string,
	linkTo?: string,
	target?: string,
	onClick?: () => void,
	label: string,
	color: 'gray' | 'red' | 'green' | 'yellow',
	icon?: IconDefinition
}

const Button: React.FC<ButtonProps> = ({
	className,
	linkTo,
	target,
	onClick,
	label,
	color,
	icon
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
					href={linkTo} target={target} className={`${className && className} ${colorClassName} ${styles.button}`}>
					<div className={styles.buttonInner}>
						<span className={styles.buttonLabel}>{label}</span>
						{icon && <FontAwesomeIcon className={styles.buttonIcon} icon={icon} size="sm"/>}
					</div>
				</Link>
			: 
				<button className={`${className && className} ${styles.button}`} onClick={onClick}>
					<div className={styles.buttonInner}>
						<span className={styles.buttonLabel}>{label}</span>
						{icon && <FontAwesomeIcon className={styles.buttonIcon} icon={icon} size="sm"/>}
					</div>
				</button>
			}
		</>
	)
}

export default Button