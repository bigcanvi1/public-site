export const UI_ROUTES = {
    HOME: "/",
    ABOUT: "/about",
    GALLERY: "/gallery",
    BOOK: "/book",
};

export const NAVIGATION = [
    {
        path: UI_ROUTES.HOME,
        label: "Home",
    },
    {
        path: UI_ROUTES.GALLERY,
        label: "Gallery",
    },
    {
        path: UI_ROUTES.ABOUT,
        label: "About",
    },
    {
        path: UI_ROUTES.BOOK,
        label: "Book",
    },
];

export const COMMON_EXTERNAL_LINK_PROPS = {
    target: "_blank",
    rel: "noopener noreferrer",
};
