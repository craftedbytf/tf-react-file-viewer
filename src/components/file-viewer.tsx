type FileType = string | Blob | File;

export interface FileViewerProps {
  file: FileType;
}

export function FileViewer() {
  return <div>File Viewer Component</div>;
}
