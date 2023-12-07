
import {PageContentType} from "@src/types/page";

export type FormObjectType = {
 [key: string]: string | null;
}

export const mapContentToFormObject =   ( element: PageContentType[]) => {
  const newObject: FormObjectType = {};
  element.forEach( (element) => {
    newObject[element.name] = element.type === "IMAGE" ? element.mediaFileContent  : element.contentValue;
  });
  return newObject;
};


export const formatFileSize = (size: number) => {
 if (!size) return "0 KB";
 if (size < 1024) return `${size} B`;
 else if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
 else return `${(size / (1024 * 1024)).toFixed(2)} MB`;
};
