module.exports = {
    name: "Jennifer Chambers Financial Services",
    personName: "Jennifer Chambers",
    email: "jenn@insureforsuccess.com",
    phoneForTel: "780-897-3212",
    phoneFormatted: "(780) 897-3212",
    // OPEN: street address not confirmed for publishing (Elliot's question 3). City and province only for now.
    address: {
        city: "Grande Prairie",
        state: "AB",
        country: "CA",
    },
    // OPEN: final booking link (Zoho CRM). Outlook Bookings page from her email signature until then.
    bookingLink: "https://outlook.office365.com/owa/calendar/JenniferChambersFinancialServices@insureforsuccess.com/bookings/",
    socials: {
        facebook: "https://www.facebook.com/people/Jennifer-Chambers-Financial-Services/61551573070418/",
        linkedin: "https://www.linkedin.com/in/jennifer-chambers-6335562bb",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    // OPEN: production domain not chosen yet (insureforsuccess.com does not resolve). Placeholder until Stacey confirms.
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
