import Button from '../Button'
import styles from './index.module.scss'

interface IFooterTypes {
	footerData: Array<any>;
}

const Footer = ({
  footerData
}: IFooterTypes) => {
  const currentYear = new Date().getFullYear();

	return (
    <>
      {footerData.map((element, key) => 
        <div key={key}>
          <footer className={styles.footer}>
            <section className={styles.footerSection}>
              <h3 className={styles.footerSectionTitle}>{element.social_media_title}</h3>
              <p className={styles.footerSectionText}>{element.social_media_paragraph_text}</p>
              <div className={styles.footerSectionButtons}>
                <Button
                  color='red'
                  label='Facebook'
                  linkTo={element.facebook_button_link}
                  target='_blank'
                />
                <Button
                  color='red'
                  label='Instagram'
                  linkTo={element.instagram_button_link}
                  target='_blank'
                />
              </div>
            </section>
            <section className={styles.footerSection}>
              <h3 className={styles.footerSectionTitle}>{element.contact_verhuur_title}</h3>
              <p className={styles.footerSectionText}>{element.contact_verhuur_paragraph_text}</p>
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
              <h3 className={styles.footerSectionTitle}>{element.contact_verhuur_title}</h3>
              <p className={styles.footerSectionText}>{element.contact_verhuur_paragraph_text}</p>
              <Button
                color='red'
                label='Vrienden van St. Jozef'
                linkTo='placeholder'
              />
            </section>
            <section className={styles.footerSection}>
              <h3 className={styles.footerSectionTitle}>{element.documenten_title}</h3>
              <div className={styles.footerSectionButtons}>
                {/* Document toevoegen voor huishoudelijk regelement */}
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
        </div>
      )}
    </>
	)
}

export default Footer