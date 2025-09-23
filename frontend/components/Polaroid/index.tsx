import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import styles from './index.module.scss'

interface PolaroidProps {
  className?: string,
  imageFile: string | StaticImport,
  altText: string,
  description?: string,
  rotation: 'left' | 'right'
}

const Polaroid: React.FC<PolaroidProps> = ({
  className,
  imageFile,
  altText,
  description,
  rotation
}) => {
  return (
    <div className={`${styles.polaroid} ${className && className} ${rotation === 'left' ? styles.rotateLeft : styles.rotateRight}`}>
      <div className={`${styles.polaroidPin} ${rotation === 'left' ? styles.polaroidPinRightOffset : styles.polaroidPinLeftOffset}`}></div>
      <Image
        className={styles.polaroidImage}
        width={326}
        height={240}
        src={imageFile}
        alt={altText}
      />
      <div className={styles.polaroidDescription}>
        {description && <p className={styles.polaroidDescriptionText}>{description}</p>}
      </div>
    </div>
  )
}

export default Polaroid