import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import styles from './index.module.scss'

interface PolaroidProps {
  className?: string,
  imageFile1: string | StaticImport,
  imageFile2: string | StaticImport,
  imageFile3: string | StaticImport,
  altText1: string,
  altText2: string,
  altText3: string,
}

const PolaroidCollection: React.FC<PolaroidProps> = ({
  className,
  imageFile1,
  altText1,
  imageFile2,
  altText2,
  imageFile3,
  altText3
}) => {
  return (
    <div className={`${styles.polaroidCollection} ${className && className}`}>
      {/* Add small polaroids */}
    </div>
  )
}

export default PolaroidCollection