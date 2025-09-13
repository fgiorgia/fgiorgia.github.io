import Link from 'next/link';
import Stack from '../Stack/Stack';

const Footer: React.FC = () => {
  return (
    <footer>
      <Stack
        direction="column"
        className="gap-8 w-full min-h-64 bg-slate-100 justify-center items-center"
      >
        {/* Social buttons */}
        <Stack direction="row" className="gap-4 text-lg">
          <Link
            className="hover:text-cyan-800"
            href="mailto:fgiorgia88@gmail.com"
            target="_blank"
          >
            <span className="fa-stack fa-lg" aria-hidden="true">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fas fa-envelope fa-stack-1x fa-inverse"></i>
            </span>
            <span className="sr-only">Email</span>
          </Link>
          <Link
            className="hover:text-cyan-800"
            href="https://github.com/fgiorgia"
            title="GitHub"
            target="_blank"
          >
            <span className="fa-stack fa-lg" aria-hidden="true">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-github fa-stack-1x fa-inverse"></i>
            </span>
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            className="hover:text-cyan-800"
            href="https://linkedin.com/in/fgiorgia"
            title="LinkedIn"
            target="_blank"
          >
            <span className="fa-stack fa-lg" aria-hidden="true">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
            </span>
            <span className="sr-only">LinkedIn</span>
          </Link>
        </Stack>

        <p style={{ textAlign: 'center' }}>
          Giorgia Faedda • Copyright © 2024 •{' '}
          <Link className="hover:text-cyan-800" href="/">
            fgiorgia.github.io
          </Link>
        </p>

        <p style={{ textAlign: 'center' }} className="text-sm font-serif">
          Inspired by
          <Link
            className="hover:text-cyan-800"
            href="https://beautifuljekyll.com/"
            target="_blank"
          >
            Beautiful Jekyll
          </Link>
        </p>
      </Stack>
    </footer>
  );
};

export default Footer;
