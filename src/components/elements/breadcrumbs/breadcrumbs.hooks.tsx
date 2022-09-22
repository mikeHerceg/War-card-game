import { useMemo } from 'react';
import { Link } from '../../atoms';
import { Crumbs } from './breadcrumbs.types';

export const useBreadcrumbs = (crumbs:Crumbs[]) => {

  const breadcrumbList = useMemo(() => crumbs.map((crumb:Crumbs, index:number) => (
    <li key={index}>
      {
        crumb.link ?
          <Link href={crumb.link} text={crumb.title}/>
          :
          crumb.title
      }
    </li>
  )), [crumbs]);
  return {
    breadcrumbList,
  };
};
