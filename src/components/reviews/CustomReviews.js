import React from "react";



function Faq() {



    const faqContent = [
        {
            title: "All About Reliable Carports",
            subtittle: "by Fefin's Carports Welding and Fabrications | Dec 7, 2022",
            descripion: "Protecting Your Vehicle From Any Weather If you have a vehicle, do you know how it would be affected by the weather? If you don’t, you might want to call for a carport installation service.",
        },
        {
            title: "It’s Safer if You Leave the Residential Welding Work to Experts in Midland, TX",
            subtittle: "by Fefin's Carports Welding and Fabrications | Jun 10, 2022",
            descripion: "The Disadvantages if You Go for DIY Metal Welding DIY metal welding is the most suitable approach when it comes to repairing things that are not subject to corrosion.",
        },
        {
            title: "The Truth About Metal Fabrication in Midland, TX",
            subtittle: "by Fefin's Carports Welding and Fabrications | Apr 29, 2022 ",
            descripion: "Debunking Metal Fabrication Myths Many fabrication companies are new businesses and are trying to gain a following, which means that they must pay close attention to their customers and the various ways that they arrive and conduct business.",
        },
        {
            title: "Choosing a Solid Yet Beautiful Metal Fence in Midland, TX!",
            subtittle: "by Fefin's Carports Welding and Fabrications | Mar 1, 2022",
            descripion: "Metallized Protection If you’re considering installing a metal fence on your property, then you’re probably looking for ways to choose the right metal fences design and material.",
        },
        {
            title: "The Perks of Booking Welding Services in Midland, TX",
            subtittle: "by Fefin's Carports Welding and Fabrications | Jan 11, 2022",
            descripion: "Welding Is What You Need There are reasons to consider hiring a professional to help you with the welding project that you have in mind. Welding is not a simple process and requires special skills and knowledge.",
        },
        {
            title: "The Intricate Process of Metal Fabrication in Midland, TX",
            subtittle: "by Fefin's Carports Welding and Fabrications | Aug 30, 2021",
            descripion: "Of Forging and Folding   The general term for sheet metal processing is called “Sheet Metal Fabrication” commonly performed by an experienced welder.",
        },
        {
            title: "Reasons to Hire a Professional Welder in Midland, TX",
            subtittle: "by Fefin's Carports Welding and Fabrications | Jun 28, 2021",
            descripion: "Why You Should Turn to a Welding Expert?   A lot of things can certainly go wrong if you don’t hire a welder to take care of your metal fabrication project.",
        },
        {
            title: "Skills Needed to Be a Good Welder in Midland, TX",
            subtittle: "by Fefin's Carports Welding and Fabrications | Mar 31, 2021 ",
            descripion: "How to Know You Have Hired the Best? If you have yet to use a professional welder, then you need to know what to expect and what to look for. The following post of Fefin's Carports Welding and Fabrications will help you with this.",
        },
        {
            title: "How to Find the Right Welding Services in Midland, TX",
            subtittle: "by Fefin's Carports Welding and Fabrications | Mar 30, 2021",
            descripion: "Does Your Project Call for a Professional Welder?   If your project needs professional welding, you need to find a company that is experienced in the type of project that you are doing.",
        },
    ];

    return (
        <section className="w-full h-auto p-5 mb-2 bg-gradient-to-t from-white via-[#f5f5f5] to-white">
            <section className="flex flex-wrap ">
                {faqContent.map((items, index) => {
                    return (
                        <div
                            className="p-5 shadow-xl w-[600px] h-auto mx-auto rounded-lg text-justify my-14 md:my-10 bg-white"
                            key={index}
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            <div className="flex flex-col gap-4">
                                <h5 className="text-red-700 font-bold">{items.title}</h5>
                                <span className="font-bold">{items.subtittle}</span>
                                <div className="w-full border-b-[1px] border"></div>
                                <p>{items.descripion}</p>
                            </div>
                        </div>
                    );
                })}
            </section>
        </section>
    );
}

export default Faq;