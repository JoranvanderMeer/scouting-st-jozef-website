import '../styles/index.scss';
import styles from './index.module.scss';
import Button from '@/components/Button';
import Nudge from '@/components/Nudge';
import Polaroid from '@/components/Polaroid';
import React from 'react';
import AgendaItem from '@/components/AgendaItem';
import Footer from '@/components/Footer';

interface IHomePageTypes {
  bannerData: Array<any>;
  speltakData: Array<any>;
  agendaData: Array<any>;
  scoutingAppData: Array<any>;
  verhuurData: Array<any>;
  footerData: Array<any>;
  done: Boolean;
}

export default function Home({
  bannerData,
  speltakData,
  agendaData,
  scoutingAppData,
  verhuurData,
  footerData,
  done
}: IHomePageTypes) {
  return (
    <>
        <main className={styles.home}>
          {/* sticky menu */}
          {bannerData.map((element, key) => 
            <div key={key}>

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
            </div>
          )}
          {/* speltakken sectie */}

          {/* agenda sectie */}
          <section>
            <h2>Agenda</h2>
            <div className={styles.agenda}>
              {agendaData.sort((a, b) => a.date > b.date ? 1 : a.date < b.date ? -1 : 0).slice(0, 6).map((element, key) =>
                <div key={key}>
                  {/* TODO: remove item from backend if date has passed */}
                  <AgendaItem
                    date={new Date(element.date)}
                    title={element.name}
                    involvedSpeltakken={element.involved_speltakken.map((speltakIndex: number) => speltakData[speltakIndex - 1].name)}
                    maxAmountOfSpeltakken={speltakData.length}
                  />
                </div>
              )}
            </div>
            <Button
              linkTo='placeholder'
              label='Agenda bekijken'
              color='red'
            />
          </section>

          {scoutingAppData.map((element, key) => 
            <section className={styles.scoutingApp} key={key}>
              <h2>{element.home_title}</h2>
              <Polaroid
                className={styles.polaroid}
                imageFile={
                  // TODO: change to working CMS image: element.[correct image name in CMS]
                  '/assets/images/spaghetti.jpg'
                }
                altText={element.home_image_alt_text}
                description={element.home_image_caption}
                rotation='right'
              />
              <p>{element.home_paragraph_text}</p>
              <Button
                linkTo='placeholder'
                label={element.home_button_label}
                color='red'
              />
            </section>
          )}

          {verhuurData.map((element, key) => 
            <section className={styles.verhuur} key={key}>
              <h2>{element.home_title}</h2>
              {/* polaroid collectie */}
              <p>{element.home_paragraph_text}</p>
              <Button
                linkTo='placeholder'
                label={element.home_button_label}
                color='red'
              />
            </section>
          )}
        </main>

        <Footer
          footerData={footerData}
        />
    </>
  )
}

export async function getStaticProps() {
  const bannerApiResponse = await fetch('http://127.0.0.1:8000/api/banner');
  const speltakApiResponse = await fetch('http://127.0.0.1:8000/api/speltakken');
  const agendaApiResponse = await fetch('http://127.0.0.1:8000/api/agenda');
  const scoutingAppApiResponse = await fetch('http://127.0.0.1:8000/api/scouting-app');
  const verhuurApiResponse = await fetch('http://127.0.0.1:8000/api/verhuur');
  const footerApiResponse = await fetch('http://127.0.0.1:8000/api/footer');

  const bannerData: Array<any> = await bannerApiResponse.json();
  const speltakData: Array<any> = await speltakApiResponse.json();
  const agendaData: Array<any> = await agendaApiResponse.json();
  const scoutingAppData: Array<any> = await scoutingAppApiResponse.json();
  const verhuurData: Array<any> = await verhuurApiResponse.json();
  const footerData: Array<any> = await footerApiResponse.json();

  return {
    props: {
      bannerData: bannerData,
      speltakData: speltakData,
      agendaData: agendaData,
      scoutingAppData: scoutingAppData,
      verhuurData: verhuurData,
      footerData: footerData,
      done: true,
    }
  }
}