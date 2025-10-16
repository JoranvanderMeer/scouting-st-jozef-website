import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import styles from './index.module.scss'

interface PolaroidProps {
  className?: string,
  imageFile: string | StaticImport,
  altText: string,
}

const SmallPolaroid: React.FC<PolaroidProps> = ({
  className,
  imageFile,
  altText
}) => {
  return (
    <div className={`${styles.polaroid} ${className && className}`}>
      <div className={`${styles.polaroidPin}`}></div>
      <Image
        className={styles.polaroidImage}
        width={204}
        height={140}
        src={imageFile}
        alt={altText}
      />
    </div>
  )
}

export default SmallPolaroid