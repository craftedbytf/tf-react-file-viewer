import { lazy, type LazyExoticComponent, type FC, Suspense } from "react";
import UnsupportedViewer from "./viewers/unsupported-viewer";
import Loading from "./loading.tsx";
import type { FileRenderer, FileType } from "../types.ts";
import { useFileLoader } from "../hooks/use-file-loader.ts";
import Error from "./error.tsx";

const defaultRenderer: Record<
  string,
  FileRenderer | LazyExoticComponent<FileRenderer>
> = {
  pdf: lazy(() => import("./viewers/pdf-viewer")),
};

export interface FileViewerProps {
  file: FileType;
  fileType: string;
  loadingComponent?: FC;
  errorComponent?: FC<{ error: Error }>;
}

export function FileViewer({
  file,
  fileType,
  loadingComponent,
  errorComponent,
}: FileViewerProps) {
  const { loading, error, fileUrl } = useFileLoader(file);

  if (loading) {
    const LoadingComp = loadingComponent ?? Loading;
    return (
      <div className="tf-file-viewer">
        <LoadingComp />
      </div>
    );
  }

  if (error) {
    const ErrorComp = errorComponent ?? Error;
    return <ErrorComp error={error} />;
  }

  if (!fileUrl) {
    return <div className="tf-file-viewer-error">File could not be loaded</div>;
  }

  const Renderer = defaultRenderer[fileType] || UnsupportedViewer;

  return (
    <div className="tf-file-viewer">
      <Suspense fallback={<Loading />}>
        <Renderer fileUrl={fileUrl} />
      </Suspense>
    </div>
  );
}
