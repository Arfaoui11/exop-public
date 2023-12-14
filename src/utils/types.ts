

export type ErrorsType = {
  [key: string]: string[];
};


export type ListDataType<T> = {
  page: number | null;
  pageSize: number | null;
  totalPage: number;
  totalElement: number;
  content: T;
};



export type UtilInformationType = {
  id: number;
  title: string;
  sections: IChildType[];
};

export type SectionType =
    "INPUT"
    | "TEXTAREA"
    | "IMAGE"
    | "LINK"
    | "DOC"
    | "SECTION"
    | "DOMAIN"
    | "QUESTION"
    | "ANSWER"
    | "VIDEO"
    | "CARD"
    | "WYSIWYG";

export const prefixOptions = [
  { label: "+216", value: "+216" },
  { label: "+213", value: "+213" },
  { label: "+1", value: "+1" },
  { label: "+86", value: "+86" },
  { label: "+33", value: "+33" },
  { label: "+49", value: "+49" },
  { label: "+39", value: "+39" },
  { label: "+81", value: "+81" },
];

export interface IChildType {
  id: number;
  title: string;
  icon?: string | null;
  name: string;
  type: SectionType;
  contentValue: string;
  contentType?: string;
  mediaFileContent?: string | null;
  parentContentId?: number;
  domains?: IChildType[];
  questions?: IChildType[];
  answer?: IChildType;
}











