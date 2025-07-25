export interface PDFViewerProps {
  fileUrl: string;
}

export default function PdfViewer({ fileUrl }: Readonly<PDFViewerProps>) {
  return (
    <div className="tf-file-viewer-pdf">
      <iframe src={fileUrl} />
    </div>
  );
};
