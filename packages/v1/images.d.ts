declare module '*.jpg' {
  import type { StaticImageData } from 'next/image';
  const imageData: StaticImageData;
  export default imageData;
}

declare module '*.png' {
  import type { StaticImageData } from 'next/image';
  const imageData: StaticImageData;
  export default imageData;
}

declare module '*.webp' {
  import type { StaticImageData } from 'next/image';
  const imageData: StaticImageData;
  export default imageData;
}
