import { BookPage, BookPageProps } from "@/components";
import { graphcms } from "@/constant";
import { CONTACT_GQL } from "@/utils";

export async function getStaticProps() {
    const { contactLinks } = await graphcms.request<{
        contactLinks: BookPageProps["contacts"];
    }>(CONTACT_GQL);

    return {
        props: {
            contacts: contactLinks,
        },
    };
}

export const Book = ({ contacts }: BookPageProps) => {
    return <BookPage contacts={contacts} />;
};

export default Book;
