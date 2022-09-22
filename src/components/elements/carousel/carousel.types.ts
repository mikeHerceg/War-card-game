export type CarouselItems ={
    content:string | JSX.Element | JSX.Element[];
}

export interface CarouselProps {
    items:CarouselItems[]
}
