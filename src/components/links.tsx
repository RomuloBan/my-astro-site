import styles from './links.module.css';

type Link = {
  label: string;
  url: string;
};


const LINKS: Link[] = [
  {
    label: 'Twitter',
    url: 'https://twitter.com/romuloban'
  },
  {
    label: 'GitHub',
    url: 'https://github.com/romuloban'
  },
];

export function Links() {
  return (
    <nav className={styles.links}>
      {LINKS.map(link => <a key={link.url} href={link.url} class={styles.link}>{link.label}</a>)}
    </nav>
  );
}
