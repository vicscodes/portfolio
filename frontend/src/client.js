import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "oetl8uiq",
    dataset: "production",
    apiVersion: '2022-03-03',
    useCdn: true
})