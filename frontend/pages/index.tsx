import Button from '@/components/Button';
import React from 'react';

interface IHomePageTypes {
  data: Array<any>;
  done: Boolean;
}

export default function Home({
  data,
  done
}: IHomePageTypes) {
  return (
    <main>
      {data.map((element) => <div key={element.slug}>
        <p>{element.main_text}</p>
        <Button
          linkTo='/speltakken'
          label={element.button_label}
          color={'red'}          
        />
      </div>)}
    </main>
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
