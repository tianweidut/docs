module.exports = {
    mainSidebar: [
        "what-is-starwhale",
        {
            type: "category",
            label: "Getting Started",
            link: {
                type: "doc",
                id: "getting-started/index"
            },
            items: [
                "getting-started/standalone",
                "getting-started/server",
                "getting-started/cloud",
                "getting-started/runtime"
            ]
        },
        {
            type: "category",
            label: "Concepts",
            link: {
                type: "doc",
                id: "concepts/index"
            },
            items: [
                "concepts/names",
                "concepts/project",
                "concepts/roles-permissions",
                "concepts/versioning"
            ]
        },
        {
            type: "category",
            label: "User Guides",
            items: [
                {
                    type: "category",
                    label: "Starwhale Client(swcli)",
                    link: {
                        type: "doc",
                        id: "swcli/index"
                    },
                    items: [
                        "swcli/installation",
                        "swcli/uri",
                        "swcli/swignore",
                        "swcli/config",
                    ]
                },
                {
                    type: 'category',
                    label: "Starwhale Server",
                    link: {
                        type: "doc",
                        id: "server/index"
                    },
                    collapsed: true,
                    items: [
                        {
                            type: 'category',
                            label: "Installation Guide",
                            link: {
                                type: "doc",
                                id: "server/installation/index"
                            },
                            collapsed: true,
                            items: [
                                "server/installation/minikube",
                                "server/installation/helm-charts",
                                {
                                    type: 'category',
                                    label: 'Install Starwhale Server with Docker',
                                    link: {
                                        type: "doc",
                                        id: "server/installation/docker",
                                    },
                                    collapsed: true,
                                    items: [
                                        "server/installation/starwhale_env",
                                    ]
                                },
                            ],
                        },
                        "server/guides/server_admin",
                        "server/project",
                    ]
                },
                "userguide/model",
                "userguide/runtime",
            ]
        },
        {
            "Reference": [
                {
                    type: "category",
                    label: "Starwhale Client",
                    link: {
                        type: "doc",
                        id: "reference/swcli/index"
                    },
                    items: [
                        "reference/swcli/instance",
                        "reference/swcli/project",
                        "reference/swcli/model",
                        "reference/swcli/dataset",
                        "reference/swcli/runtime",
                        "reference/swcli/job",
                        "reference/swcli/utilities",
                    ]
                },
                {
                    type: "category",
                    label: "Python SDK",
                    link: {
                        type: "doc",
                        id: "reference/sdk/overview"
                    },
                    items: [
                        "reference/sdk/dataset",
                        "reference/sdk/type",
                        "reference/sdk/evaluation",
                        "reference/sdk/model",
                        "reference/sdk/other",
                    ]
                }
            ],
        },
        {
            "Community": [
                "community/contribute",
            ]
        },
    ],
};
