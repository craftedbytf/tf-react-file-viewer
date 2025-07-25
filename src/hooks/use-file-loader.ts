import { useEffect, useState } from "react";
import type { FileType } from "../types.ts";

export const useFileLoader = (file: FileType) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadFile = async () => {
      try {
        setLoading(true);
        setError(null);

        // Handle URL strings
        if (typeof file === "string") {
          setFileUrl(file);
        }
        // Handle Blob or File objects
        else {
          const url = URL.createObjectURL(file);
          setFileUrl(url);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to load file"));
      } finally {
        setLoading(false);
      }
    };

    loadFile();

    // Cleanup object URL on unmount
    return () => {
      if (fileUrl && typeof file !== "string") {
        URL.revokeObjectURL(fileUrl);
      }
    };
  }, [file, fileUrl]);

  return { loading, error, fileUrl };
};
