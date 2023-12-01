import errors from "./errors";
import { ServerErrorsType } from "./types";

const getServerErrorDescription = (code: keyof ServerErrorsType) =>
  errors[code];

export { getServerErrorDescription };
export type { ServerErrorsType };
