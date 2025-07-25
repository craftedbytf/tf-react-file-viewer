interface ErrorProps {
  error: Error;
}

export default function Error({ error }: Readonly<ErrorProps>) {
  return (
    <div className="tf-file-viewer-error">
      Error loading file: {error.message}
    </div>
  );
}
