import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  import.meta.env.GITHUB_BRANCH ||
  import.meta.env.VERCEL_GIT_COMMIT_REF ||
  import.meta.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: import.meta.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: import.meta.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
