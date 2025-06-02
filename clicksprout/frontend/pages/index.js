import Head from 'next/head';
import LinkForm from '../components/LinkForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ClickSprout v1.0</title>
      </Head>
      <main>
        <h1>Welcome to ClickSprout</h1>
        <LinkForm />
      </main>
    </div>
  );
}
