import { ServerErrorsType } from "@src/types/errors";

export const serverErrors: ServerErrorsType = {
    FAILED_VALIDATION: 'Champs invalides'
}

export type ObjectKey = keyof typeof serverErrors;