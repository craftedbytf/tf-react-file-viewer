import type { Meta, StoryObj } from "@storybook/react-vite";

import { FileViewer } from "../components/file-viewer";

const meta = {
  title: "Example/Basic File Viewer",
  component: FileViewer,
  tags: ["autodocs"],
  argTypes: {
    // TODO: configure argument types
  },
  args: {
    // TODO: configure default args
  },
} satisfies Meta<typeof FileViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PDFExternalUrl: Story = {
  name: "PDF (External URL)",
  args: {
    // TODO: configure args for PDF file type
  },
};

export const PDFBlob: Story = {
  name: "PDF (Blob)",
  args: {
    // TODO: configure args for PDF file type
  },
};
