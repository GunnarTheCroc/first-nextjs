import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../components/Counter';
import Github from '../components/Github';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gunnar Rasmussen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
          Gunnar Rasmussen welcomes <a href="https://nextjs.org">Next.js!</a>
      </h1>

        <Counter name={"Pablo"} mult={1} size={2} color={"black"} />
        <Counter name={"Pia"} mult={2} size={0.5} color={"gray"}/>

      <hr
        style = {{
          width: "80%",
          marginTop: "1em",
        }}
      />

      <Github />

      <hr
        style = {{
          width: "80%",
          marginTop: "1em",
        }}
      />

      <p>Here's a link to the fakestore: <a href="/store">here</a></p>

    </div>
  );
}
