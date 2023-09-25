export type ClaimType = {
  object: string;
  description: string;
  email: string;
  reference?: string;
  files?: {
    file: File;
    fileList: File[];
  };
}