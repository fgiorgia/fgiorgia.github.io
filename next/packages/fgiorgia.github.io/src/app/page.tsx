import Stack from "@fgiorgia-site/components/Stack/Stack";
import Image from "next/image";
import Link from "next/link";

import styles from './page.module.css'

export default function Home() {
  return (
    <Stack>
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
    </Stack >
  );
}
