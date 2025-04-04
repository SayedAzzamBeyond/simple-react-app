import { useState } from 'react';

function Panel({ title, children, isActive, onClick,index }: {title: string,children: React.ReactNode,isActive: boolean,onClick: (index: number) => void,index: number}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
          <p>{children}</p>
      ):
        <button onClick={() => onClick(index)}>Show</button>
    }
    </section>
  );
}

export default function Accordion() {
  const [panelActiveIndex, setPanelActiveIndex] = useState(1);

  const changeActiveIndex = (index: number)=>{
    setPanelActiveIndex(index);
  }
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About" isActive={panelActiveIndex == 0} index={0} onClick={changeActiveIndex}>
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology" isActive={panelActiveIndex == 1} index={1} onClick={changeActiveIndex}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}
