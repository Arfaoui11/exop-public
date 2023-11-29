import { AxiosResponse } from "axios";


import { axiosPublicInstance } from "./instance";
import { generateRequestQuery } from "./methods";
import {
    ContentManagementPagesKeys,
    IListPublicDocsParams,
    IPublicDocument,
    PublicPageType,
    sendEmailType
} from "@src/types/page";
import {ListDataType} from "@src/utils/types";

const PREFIX = "/publicPages";
const DOC_PREFIX = "/publicDocuments";

export const getPageContentEndpoint = (
  name: ContentManagementPagesKeys
): Promise<AxiosResponse<PublicPageType>> =>
  axiosPublicInstance.get(`${PREFIX}/title?pageTitle=${name}`);

export const getPublicDocumentsEndpoint = (
  params: IListPublicDocsParams
): Promise<AxiosResponse<ListDataType<IPublicDocument[]>>> => {
  const {  ...restParams } = params || {};
  let query = `${DOC_PREFIX}`;
  if (params) query += generateRequestQuery<IListPublicDocsParams>(restParams);
  return axiosPublicInstance.get(
    `${query}`
  );
};

export const viewDocumentEndpoint = (
    id: string
): Promise<AxiosResponse<Blob>> => axiosPublicInstance.get(`${DOC_PREFIX}/${id}/view`,{
      responseType: 'blob', // specify responseType as 'blob' to handle binary data
    }
);

export const sendEmailContact = (data: sendEmailType): Promise<AxiosResponse<string>> =>
    axiosPublicInstance.post(`${PREFIX}/contact/send`, data);