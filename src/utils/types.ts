import { Rule } from "antd/es/form";

import {SelectOptionType} from "@src/types/page";

const INVALID_URL = "URL invalide";

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

export type UtilsErrorType = {
  error: boolean;
  target: number | null;
};

export type CreateSection = Omit<IChildType, "id" | "name">;

export type NewChildObjectType = {
  childType: SelectOptionType;
  parent: number;
};

export const errorInitialState = { error: false, target: null };

export const sectionTemplate: CreateSection = {
  title: "",
  type: "SECTION",
  contentValue: "",
};

export const sectionChildren: SelectOptionType[] = [
  { label: "Document", value: "DOC" },
  { label: "Domaine", value: "DOMAIN" },
  { label: "Lien", value: "LINK" },
  { label: "Réponse", value: "ANSWER" },
  { label: "Question", value: "QUESTION" },
  { label: "Vidéo", value: "VIDEO" },
];

// * Possible options for each selelcted choice
const sectionsPossibleOptions: { [key: string]: string[] } = {
  SECTION: ["DOMAIN", "VIDEO", "DOC", "LINK"],
  DOMAIN: ["QUESTION"],
  QUESTION: ["ANSWER"],
};

export const getOptionsByArea = (
    options: SelectOptionType[],
    type: SectionType
) =>
    options.filter(
        ({ value }) =>
            value &&
            sectionsPossibleOptions[type] &&
            sectionsPossibleOptions[type].includes(value as string)
    );

export const urlRule: Rule = {
  type: "url",
  message: INVALID_URL,
};






