import styles from './index.module.scss'

interface NudgeProps {
	className?: string,
  date: Date,
	title: string,
  involvedSpeltakken: string[]
}

const AgendaItem: React.FC<NudgeProps> = ({
	className,
  date,
	title,
  involvedSpeltakken
}) => {
  const maxAmountOfSpeltakken = 7;

  const monthNamesAbbreviated = [
    "jan", "feb", "mar", "apr",
    "mei", "jun", "jul", "aug",
    "sep", "okt", "nov", "dec"
  ];
  const monthIndex = date.getMonth();

	return (
		<div className={`${className && className} ${styles.agendaItem}`}>
      <div className={styles.agendaItemInfo}>
        <h3 className={styles.agendaItemInfoTitle}>{title}</h3>
        {involvedSpeltakken.length >= maxAmountOfSpeltakken ?
          <p className={styles.agendaItemInfoSpeltak}>Alle speltakken</p>
        :
          involvedSpeltakken.map((speltak, key) => {
            return <p key={key} className={styles.agendaItemInfoSpeltak}>{speltak}</p>
          })
        }
      </div>
			<div className={styles.agendaItemDate}>
        <p className={styles.agendaItemDateDay}>{date.getDate()}</p>
        <p className={styles.agendaItemDateMonth}>{monthNamesAbbreviated[monthIndex]}</p>
      </div>
		</div>
	)
}

export default AgendaItem