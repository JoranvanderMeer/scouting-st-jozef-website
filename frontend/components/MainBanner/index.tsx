import { StaticImport } from "next/dist/shared/lib/get-img-props"
import styles from './index.module.scss'
import Button from "../Button"
import Polaroid from "../Polaroid"

interface PolaroidProps {
  className?: string,
  mainText: string,
  imageFile: string | StaticImport,
  altText: string,
  description?: string,
  buttonLabel: string
}

const MainBanner: React.FC<PolaroidProps> = ({
  className,
  mainText,
  imageFile,
  altText,
  description,
  buttonLabel
}) => {
  return (
    <div className={`${styles.mainBanner} ${className && className}`}>
      <div className={styles.mainBannerBoard}>
        <h1 className={styles.mainBannerBoardTitle}>{mainText}</h1>
      </div>
      <Polaroid
        className={styles.mainBannerPolaroid}
        imageFile={imageFile}
        altText={altText}
        description={description}
        rotation='left'
      />
      <Button
        linkTo='/speltakken'
        label={buttonLabel}
        color={'green'}
      />
    </div>
  )
}

export default MainBanner