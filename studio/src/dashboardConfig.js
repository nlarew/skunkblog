export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62d8f157164c7b771073527a",
                  title: "Sanity Studio",
                  name: "skunkblog-studio",
                  apiId: "c619daa5-2887-4c12-ac3a-a5df2a78ed44",
                },
                {
                  buildHookId: "62d8f157672ccd77dd156160",
                  title: "Blog Website",
                  name: "skunkblog",
                  apiId: "f511f979-4444-42c1-9f41-f5de1c1f8c9d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/nlarew/skunkblog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://skunkblog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
