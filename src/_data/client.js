module.exports = {
    name: "Jennifer Chambers Financial Services",
    personName: "Jennifer Chambers",
    email: "jenn@insureforsuccess.com",
    phoneForTel: "780-897-3212",
    phoneFormatted: "(780) 897-3212",
    // OPEN: street address not confirmed for publishing. City and province only for now.
    address: {
        city: "Grande Prairie",
        state: "AB",
        country: "CA",
    },
    bookingLink: "https://jenniferchambers.zohobookings.ca/4451000000032008",
    socials: {
        facebook: "https://www.facebook.com/people/Jennifer-Chambers-Financial-Services/61551573070418/",
        linkedin: "https://www.linkedin.com/in/jennifer-chambers-6335562bb",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    // OPEN: production domain not chosen yet (insureforsuccess.com does not resolve). Placeholder until confirmed.
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
