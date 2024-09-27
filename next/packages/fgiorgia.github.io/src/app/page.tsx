import Stack from "@/components/Stack/Stack";
import Link from "next/link";

import styles from './page.module.scss'
import Carousel from "@/components/Carousel/Carousel";
import MainContent from "@/components/MainContent/MainContent";


export default function Home() {
  return (
    <>
      <Carousel />
      <MainContent>
        <Stack direction="row" className="items-center justify-center gap-4">
          <Link href="/projects" title="Projects" className={styles.homeLink} >
            <Stack>
              Projects
            </Stack>
          </Link>
          <Link href="https://github.com/fgiorgia" title="GitHub" target="_blank" className={styles.homeLink} >
            <Stack>
              GitHub
            </Stack>
          </Link>
          <Link href="/about" title="About" className={styles.homeLink} >
            <Stack>
              About Me
            </Stack>
          </Link>
        </Stack>
      </MainContent >
    </>
  );
}
