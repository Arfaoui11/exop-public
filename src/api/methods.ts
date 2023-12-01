

import {excludeEmptyFormFields} from "@src/utils/array-utils";


type GenericStringType = { [key: string]: string };

export const generateRequestQuery = <T extends object>(params: T) => {
  const formattedParams = excludeEmptyFormFields<T>(params);
  return Object.keys(formattedParams).reduce((acc: string, key: string) => {
    if (!acc) return (acc = `?${key}=${formattedParams[key as keyof T]}`);
    return (acc += `&${key}=${formattedParams[key as keyof T]}`);
  }, "");
};



