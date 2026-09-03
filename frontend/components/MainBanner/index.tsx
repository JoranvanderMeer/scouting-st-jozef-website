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
      <div className={styles.mainBannerPhotos}>
        <Polaroid
          className={styles.mainBannerPhotosPolaroid}
          imageFile={imageFile}
          altText={altText}
          description={description}
          rotation='left'
        />
        <Polaroid
          className={styles.mainBannerPhotosPolaroid + ' ' + styles.hideOnMobile}
          imageFile={imageFile}
          altText={altText}
          description={description}
          rotation='right'
        />
        <Polaroid
          className={styles.mainBannerPhotosPolaroid + ' ' + styles.hideOnMobile}
          imageFile={imageFile}
          altText={altText}
          description={description}
          rotation='right'
        />
      </div>
      <Button
        linkTo='/speltakken'
        label={buttonLabel}
        color={'green'}
      />
    </div>
  )
}

export default MainBanner