import { StaticImport } from "next/dist/shared/lib/get-img-props"
import styles from './index.module.scss'
import SmallPolaroid from "./SmallPolaroid"

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
      <SmallPolaroid 
        className={styles.photoA}
        imageFile={imageFile1}
        altText={altText1}
      />
      <SmallPolaroid 
        className={styles.photoB}
        imageFile={imageFile2}
        altText={altText2}
      /><SmallPolaroid 
        className={styles.photoC}
        imageFile={imageFile3}
        altText={altText3}
      />
    </div>
  )
}

export default PolaroidCollection