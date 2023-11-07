export type UploadFile = {
    uid: string;
    size?: number;
    name: string;
    fileName?: string;
    lastModified?: number;
    lastModifiedDate?: Date;
    url?: string;
    status?: any;
    percent?: number;
    thumbUrl?: string;
    crossOrigin?: any;
    originFileObj?: any;
    response?: any;
    error?: any;
    linkProps?: any;
    type?: string;
    xhr?: any;
    preview?: string;
}