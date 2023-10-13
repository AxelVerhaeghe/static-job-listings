import Image from 'next/image';
import styles from './listing.module.scss';
import Tag from '../tag/tag';

type ListingProps = {
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export default function Listing(props: ListingProps) {
  console.log(props.logo);
  return (
    <li className={styles.Card}>
      <div className={styles.Content}>
        <Image
          alt={`${props.company} logo`}
          src={props.logo}
          width={80}
          height={80}
        />
        <section className={styles.Info}>
          <div className={styles.Heading}>
            <span className={styles.Company}>{props.company}</span>
            <div className={styles.Pills}>
              {!!props.new && <span className={styles.New}>NEW!</span>}
              {!!props.featured && (
                <span className={styles.Featured}>FEATURED</span>
              )}
            </div>
          </div>
          <h2 className={styles.Position}>{props.position}</h2>
          <ul className={styles.Metadata}>
            <li>{props.postedAt}</li>
            <li>{props.contract}</li>
            <li>{props.location}</li>
          </ul>
        </section>
      </div>
      <ul className={styles.Tags}>
        {props.role && <Tag>{props.role}</Tag>}
        {props.level && <Tag>{props.level}</Tag>}
        {props.languages &&
          props.languages.map((language) => <Tag>{language}</Tag>)}
        {props.tools && props.tools.map((tool) => <Tag>{tool}</Tag>)}
      </ul>
    </li>
  );
}
