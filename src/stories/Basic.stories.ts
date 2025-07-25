import type { Meta, StoryObj } from "@storybook/react-vite";

import { FileViewer } from "../components/file-viewer";

const meta = {
  title: "Example/Basic File Viewer",
  component: FileViewer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    file: {
      control: "text",
      description: "The file to be viewed, can be a URL or a Blob.",
      type: { name: "string", required: true },
    },
    fileType: {
      control: "select",
      options: ["pdf"],
      description: "The type of the file to be viewed. If not provided, it will be inferred from the file.",
      type: { name: "string", required: false },
    },
    // TODO: add custom components and renderers prop
  },
} satisfies Meta<typeof FileViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PDFExternalUrl: Story = {
  name: "PDF (External URL)",
  args: {
    file: "/sample.pdf",
    fileType: "pdf",
  },
};
