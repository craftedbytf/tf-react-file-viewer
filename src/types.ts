import type { FC } from "react";

export type FileType = string | Blob | File;
export type FileRenderer = FC<{ fileUrl: string }>;
