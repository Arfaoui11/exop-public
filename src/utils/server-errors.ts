import { ServerErrorsType } from "@src/types/errors";

export const serverErrors: ServerErrorsType = {
    unauthorized: 'Non authorisé',
}

export type ObjectKey = keyof typeof serverErrors;