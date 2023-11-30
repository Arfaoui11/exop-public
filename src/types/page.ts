// ***************************** //
// ? Data types
// ***************************** //
export type ContentManagementPagesKeys =
    | "HOME_PAGE"
    | "ABOUT_EXOP"
    | "REGULATION"
    | "CONTACT"
    | "UTIL_INFORMATION"
    | "E_SERVICES";


export type PublicDocument = {
    id: string;
    code: string;
    fileName: string;
    nature: string;
    description: string;
    creationYear: string;
    active: boolean;
    filePath: string;
    fileSize: number;
    type: string;
}

export type PublicPageType = {
    id: string;
    title: string;
    pageContents: PageContentType[];
};

export interface IListPublicDocsParams
    extends ISearchSortPaginateComposedType<IPublicDocument> {
    nature?: string;
    isActive?: boolean;
    creationYear?: string;
}

export interface IPublicDocument  {
    id: string;
    code: string;
    fileName: string;
    nature: string;
    description: string;
    creationYear: string;
    active: boolean;
    filePath: string;
    fileSize: number;
    type: string;
}
export type PageContentType = {
    id: string;
    name: string;
    icon:string;
    title:string;
    type: "INPUT" | "TEXTAREA" | "IMAGE" | "LINK" | "CARD";
    contentValue: string | null;
    mediaFileContent: string | null;
};

export interface IFilterParams extends ISearchSortPaginateComposedType<PublicDocument> {
    nature?: string;
    isActive?: boolean;
    creationYear?: string;
}

export type SelectOptionType = {
    label?: string;
    value?: string | number | boolean;
};

export type sendEmailType = {
    firstName: number;
    lastName: string;
    phoneNumber: string;
    message: string;
    email1: string;
    email2: string;
}



export interface IPaginationType {
    page?: number;
    pageSize?: number;
}

export interface ISearchSortPaginateComposedType<T>
    extends IPaginationType {
    search?: string;
}

export interface IListPublicDocsParams
    extends ISearchSortPaginateComposedType<IPublicDocument> {
    nature?: string;
    isActive?: boolean;
    creationYear?: string;
}