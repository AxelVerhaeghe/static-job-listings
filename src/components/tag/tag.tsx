import styles from './tag.module.scss';

type TagProps = {
  children: string;
};

export default function Tag(props: TagProps) {
  return (
    <li>
      <button className={styles.Tag}>{props.children}</button>
    </li>
  );
}
