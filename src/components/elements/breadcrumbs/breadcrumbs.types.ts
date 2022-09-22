export type Crumbs = {
    title:string,
    link?:string,
}

export interface BreadcrumbsProps {
    crumbs:Crumbs[]
}
