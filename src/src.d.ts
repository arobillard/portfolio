interface Img {
  src: string;
  alt: string;
}

interface ImgWithCaption extends Img {
  caption?: string;
  highlight?: boolean;
}

interface Section {
  pre_title?: string;
  title: string;
  type?:
    | "split-content"
    | "info-cards"
    | "technologies-cards"
    | "call-out"
    | "videos";
  content?: string;
  classes?: string;
  img?: Img;
  link?: {
    label: string;
    url: string;
    icon?: string;
  };
  cards?: {
    id?: string;
    heading?: string;
    content?: string;
    img?: Img;
  }[];
  videos?: {
    id: string;
    title: string;
    description?: string;
    link?: string;
    placeholder?: string;
  }[];
  gallery?: ImgWithCaption[];
}
