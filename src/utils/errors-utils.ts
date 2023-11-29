import { message } from "antd";
import { AxiosError } from "axios";

import { ErrorsType } from "./types";


/**
 *
 * This function takes the Axios Errors and adds them to their target form
 */


export const parseAxiosError = (

  error: AxiosError<any>
): ErrorsType => {
  if (!error.response) return { general: [error.message] };
  const data = error.response.data;
  if (error.response.status === 400) return data.errors;
  return { general: [data.error] };
};

export const errorMessage = (errors: ErrorsType) =>
  errors.general.map((error: string) => message.error(error, 5));
