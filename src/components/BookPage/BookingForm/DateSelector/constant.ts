export const ITEM_CSS = {
    height: "$18",
    fontSize: "16px",
    marginBottom: "3px",
    color: "#e8b979",
    backgroundColor: "#fff",
    "&:hover": {
        backgroundColor: "rgba(232, 185, 121, 0.08)",
    },
};

export const DISABLED_ITEM_CSS = {
    ...ITEM_CSS,
    color: "#98a2b3",
    "&:hover": {
        backgroundColor: "f9fafb",
    },
    textAlign: "center",
    margin: "20px 0",
};
