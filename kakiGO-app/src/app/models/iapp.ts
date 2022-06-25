export interface Iapp {
}
export interface Iheader {
    name: string;
    navigate: string;
}

export interface Ifooter{
    copyright: string;
    rrss: Irrss[];
    
}

export interface Irrss{
    name: string;
    icon: string;
    link: string;
}
export interface Iimg{
    src: string;
    alt: string;
}