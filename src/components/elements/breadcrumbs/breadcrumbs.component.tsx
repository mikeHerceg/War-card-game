import React from 'react';
import { useBreadcrumbs } from './breadcrumbs.hooks';
import styles from './breadcrumbs.module.scss';
import { BreadcrumbsProps } from './breadcrumbs.types';


export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {

  const { breadcrumbList } = useBreadcrumbs(crumbs);

  return (
    <nav className={styles['bread-crumbs']}>
      <ol>
        { breadcrumbList }
      </ol>
    </nav>
  );
}
