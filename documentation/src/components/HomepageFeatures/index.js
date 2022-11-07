import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const Details = [
  {
    title: 'Student Name',
    description: (
      <>
        Tom Shaw
      </>
    ),
  },
  {
    title: 'Student ID',
    description: (
      <>
        W19025481
      </>
    ),
  },
];

function Detail({title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {Details.map((props, idx) => (
            <Detail key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
