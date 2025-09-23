import Button from '../Button'
import styles from './index.module.scss'

interface FooterProps {
	className?: string,
	socialMediaTitle: string,
  socialMediaText: string,
  facebookLink: string,
  instagramLink: string,
  contactVerhuurTitle: string,
  contactVerhuurText: string,
  vriendenVanTitle: string,
  vriendenVanText: string,
  specialeDocumentenTitle: string,
  huishoudelijkRegelementDocument: string
}

const Footer: React.FC<FooterProps> = ({
	className,
  socialMediaTitle,
  socialMediaText,
  facebookLink,
  instagramLink,
  contactVerhuurTitle,
  contactVerhuurText,
  vriendenVanTitle,
  vriendenVanText,
  specialeDocumentenTitle,
  huishoudelijkRegelementDocument
}) => {
  const currentYear = new Date().getFullYear();

	return (
		<footer className={`${className && className} ${styles.footer}`}>
      <section className={styles.footerSection}>
        <h3 className={styles.footerSectionTitle}>{socialMediaTitle}</h3>
        <p className={styles.footerSectionText}>{socialMediaText}</p>
        <div className={styles.footerSectionButtons}>
          <Button
            color='red'
            label='Facebook'
            linkTo={facebookLink}
          />
          <Button
            color='red'
            label='Instagram'
            linkTo={instagramLink}
          />
        </div>
      </section>
      <section className={styles.footerSection}>
        <h3 className={styles.footerSectionTitle}>{contactVerhuurTitle}</h3>
        <p className={styles.footerSectionText}>{contactVerhuurText}</p>
        <div className={styles.footerSectionButtons}>
          <Button
            color='red'
            label='Contact'
            linkTo='placeholder'
          />
          <Button
            color='red'
            label='Verhuur'
            linkTo='placeholder'
          />
        </div>
      </section>
      <section className={styles.footerSection}>
        <h3 className={styles.footerSectionTitle}>{vriendenVanTitle}</h3>
        <p className={styles.footerSectionText}>{vriendenVanText}</p>
        <Button
          color='red'
          label='Vrienden van St. Jozef'
          linkTo='placeholder'
        />
      </section>
      <section className={styles.footerSection}>
        <h3 className={styles.footerSectionTitle}>{specialeDocumentenTitle}</h3>
        <div className={styles.footerSectionButtons}>
          <Button
            color='red'
            label='Huishoudelijk regelement'
          />
          <Button
            color='red'
            label='Privacybeleid'
            linkTo='placeholder'
          />
        </div>
      </section>
      <p>&#169; {currentYear} Scouting St. Jozef Leiden</p>
		</footer>
	)
}

export default Footer