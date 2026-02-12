import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from "next/image"
import styles from './index.module.scss'

interface SpeltakLinkProps {
	className?: string,
  speltakName: string,
	age: string,
	imageFile: string | StaticImport,
	imageAltText: string,
	color: string
}

const SpeltakLink: React.FC<SpeltakLinkProps> = ({
	className,
  speltakName,
	age,
	imageFile,
	imageAltText,
	color
}) => {
	return (
		<div className={`${className && className} ${styles.speltakLink}`}>
			<Image
        className={styles.speltakLinkImage}
        width={287}
        height={132}
        src={imageFile}
        alt={imageAltText}
				style={{filter: `drop-shadow(-.4rem -.4rem 0 ${color})`}}
      />
			<div className={styles.speltakLinkBoard}>
				<div className={styles.speltakLinkBoardNail}/>
				<p className={styles.speltakLinkBoardTitle}>{speltakName}</p>
				<p className={styles.speltakLinkBoardAge}>{age}</p>
			</div>
		</div>
	)
}

export default SpeltakLink