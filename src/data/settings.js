const settings = {
    filters: [
        {
            id: "all",
            label: "Todas",
            key: "complete",
            value: null,
            default: true
        },
        {
            id: "completed",
            label: "Completadas",
            key: "complete",
            value: true,
            default: false
        },
        {
            id: "inProgress",
            label: "En progreso",
            key: "complete",
            value: false,
            default: false
        },
    ]
}

export default settings;