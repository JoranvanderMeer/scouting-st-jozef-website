import '../styles/index.scss';
import styles from './index.module.scss';
import Button from '@/components/Button';
import Nudge from '@/components/Nudge';
import Polaroid from '@/components/Polaroid';
import React from 'react';
import AgendaItem from '@/components/AgendaItem';
import Footer from '@/components/Footer';

interface IHomePageTypes {
  data: Array<any>;
  done: Boolean;
}

export default function Home({
  data,
  done
}: IHomePageTypes) {
  return (
    <>
      {data.map((element, key) => <div key={key}>
        <main className={styles.home}>
          {/* sticky menu */}

          {/* mainbanner component */}
          <p>{element.main_text}</p>
          <Polaroid
            className={styles.polaroid}
            imageFile={
              // TODO: change to working CMS image: element.[correct image name in CMS]
              '/assets/images/spaghetti.jpg'
            }
            altText={element.image1_alt_text}
            // description='Spaghetti bolognese'
            rotation='left'
          />
          <Button
            linkTo='/speltakken'
            label={element.button_label}
            color={'green'}
          />

          <Nudge label={element.nudge_text}/>

          {/* speltakken sectie */}

          {/* agenda sectie */}
          <h2>Agenda</h2>
          {/* TODO: make a map to make more of these appear
          (no more than 6 items on homepage, remove item from backend if date has passed) */}
          <AgendaItem
            date={new Date('2025-09-11')}
            title='placeholder'
            involvedSpeltakken={['placeholder1', 'placeholder2', 'placeholder3']}
          />

          <h2>Scouting App</h2>
          <Polaroid
            className={styles.polaroid}
            imageFile={
              // TODO: change to working CMS image: element.[correct image name in CMS]
              '/assets/images/spaghetti.jpg'
            }
            altText={'placeholder'}
            description={'placeholder'}
            rotation='right'
          />
          <p>placeholder</p>
          <Button
            linkTo='placeholder'
            label={'placeholder'}
            color='red'
          />

          <h2>Huur ons clubhuis!</h2>
          {/* polaroid collectie */}
          <p>placeholder</p>
          <Button
            linkTo='placeholder'
            label={'placeholder'}
            color='red'
          />
        </main>
          {/* footer component */}
          <Footer
            socialMediaTitle={'placeholder'}
            socialMediaText={'placeholder'}
            facebookLink={'placeholder'}
            instagramLink={'placeholder'}
            contactVerhuurTitle={'placeholder'}
            contactVerhuurText={'placeholder'}
            vriendenVanTitle={'placeholder'}
            vriendenVanText={'placeholder'}
            specialeDocumentenTitle={'placeholder'}
            huishoudelijkRegelementDocument={'/assets/documents/placeholderdocument.docx'}
          />
        </div>
      )}
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://127.0.0.1:8000/api/content');

  const data: Array<any> = await response.json();

  return {
    props: {
      data: data,
      done: true,
    }
  }
}
