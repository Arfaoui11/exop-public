import { AxiosResponse } from "axios";


import {axiosApiInstance, axiosPublicInstance} from "./instance";
import { generateRequestQuery } from "./methods";
import {
    ContentManagementPagesKeys,
    IListPublicDocsParams,
    IPublicDocument,
    PublicPageType,
    sendEmailType
} from "@src/types/page";
import {ListDataType, UtilInformationType} from "@src/utils/types";
import {ClaimType} from "@src/types/claim";

const PREFIX = "/publicPages";
const DOC_PREFIX = "/publicDocuments";

export const getPageContentEndpoint = (
  name: ContentManagementPagesKeys
): Promise<AxiosResponse<PublicPageType>> =>
  axiosPublicInstance.get(`${PREFIX}/title?pageTitle=${name}`);

export const getPageContentInfoEndpoint = (): Promise<AxiosResponse<UtilInformationType>> =>
    axiosPublicInstance.get(`${PREFIX}/info`);

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


export const sendClaim = (data: FormData): Promise<AxiosResponse<ClaimType>> =>
    axiosApiInstance.post(`/claims/public`, data);