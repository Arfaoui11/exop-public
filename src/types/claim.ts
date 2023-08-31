export type ClaimType = {
  id: string;
  object: string;
  description: string;
  files: {
    file: File;
    fileList: File[];
  };
}