import Stack from '@/components/Stack/Stack';
import Link from 'next/link';

import styles from './home.module.scss';
import Carousel from '@/components/Carousel/Carousel';
import MainContent from '@/components/MainContent/MainContent';

export default function Home() {
  return (
    <>
      <Carousel />
      <MainContent>
        <Stack
          direction="row"
          className="items-center justify-center mx-2"
          style={{
            gap: 'min(1.5vw, 1rem)',
          }}
        >
          <Link href="/projects" title="Projects" className={styles.homeLink}>
            <Stack style={{ textAlign: 'center' }}>Projects</Stack>
          </Link>
          <Link
            href="https://github.com/fgiorgia"
            title="GitHub"
            target="_blank"
            className={styles.homeLink}
          >
            <Stack style={{ textAlign: 'center' }}>GitHub</Stack>
          </Link>
          <Link href="/about" title="About" className={styles.homeLink}>
            <Stack style={{ textAlign: 'center' }}>About Me</Stack>
          </Link>
        </Stack>
      </MainContent>
    </>
  );
}
