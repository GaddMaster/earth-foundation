
const home = {
    cover: {
        image: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.45)), url(\"/images/space.jpg\")",
        title: "The Earth",
        title_2: " Foundation",
        sub: "Inspire. Educate. Mentor. Empower.",
        paragraphs: [
            "The Earth Foundation was founded in 2020 in Geneva, Switzerland, to inspire, educate, mentor, and empower students, schools, researchers, and young entrepreneurs with innovative ideas to tackle environmental challenges.",
            "Through its initiatives, The Earth Foundation strives to foster a self-perpetuating ecosystem that accelerates positive change towards environmental sustainability."
        ],
        section: "The Earth Foundation Has Four Initiatives",
        section_height: 40,
        section_color: "#CEAA7A",
        socials_color: "#CEAA7A",
    },
    boards: [
        {
            image : "/images/annie-spratt-Tno1Zd3T6yY-unsplash.webp",
            label: "The Earth Prize",
            summary: "A $200,000 global youth environmental sustainability competition for students between the ages of 13 and 19.",
            links: [
                {
                    label: "Read more about the initiative",
                    link: "/earth-prize",
                    color: "#CEAA7A"
                },
                {
                    label: "Find out about The Earth Prize Mentors",
                    link: "/mentors",
                    color: "#CEAA7A"
                }
            ],
            path: "/",
            background: "#16172C"
        },
        {
            image : "/images/geran-de-klerk-qzgN45hseN0-unsplash.webp",
            label: "The Earth ",
            label_2: "Foundation Awards",
            summary: "$300,000 in research grants and scholarships for university students and researchers.",
            links: [
                {
                    label: "Read more about the initiative",
                    link: "/awards"
                }
            ],
            path: "/",
            background: "#074D3F"
        },
        {
            image : "/images/magnezis-magnestic-TW62wXQ6Omc-unsplash.webp",
            label: "Incubator Partnerships",
            summary: "The Earth Foundation will seek seed-funding from members of its ecosystem to accelerate the launch of revolutionary products, organizations and enterprises worldwide.",
            links: [
                // {
                //     label: "Read more about the initiative",
                //     link: "/incubator"
                // }
            ],
            path: "/",
            background: "#1A3324"
        },
        {
            image : "/images/pam-ivey-c0Y30cWbyEc-unsplash.webp",
            label: "The Earth ",
            label_2: "Foundation ",
            label_3: "Alumni Association",
            summary: "A networking platform that connects our participants, mentors, partners, and ambassadors.",
            links: [
                {
                    label: "Read more about the initiative",
                    link: "/alumni"
                }
            ],
            path: "/",
            background: "#02304F"
        }
    ],
    news: [
        {
            image: "/images/boy-webinar.jpg",
            imageCover: true,
            label: "The Earth Prize Webinar for Mentors",
            text: "",
            button: "Register for the webinar",
            buttonRoute: "/webinar-mentors",
        },
        {
            image: "/images/people.jpg",
            imageCover: true,
            label: "The Earth Prize is looking for mentors!",
            text: "",
            button: "Find out more about The Earth Prize Mentors",
            buttonRoute: "/mentors",
        },
        {
            image: "/images/platform.jpg",
            imageCover: true,
            label: "Webinar for Teachers & The Earth Prize Schools",
            button: "Watch webinar",
            buttonRoute: "/webinar-teachers-schools",
        },
        {
            image: "/images/logo.gif",
            imageCover: false,
            label: "The Earth Prize Launch Webinar",
            text: "",
            button: "Watch webinar",
            buttonRoute: "/webinar",
        },
    ]
};

const about = {
    cover: {
        image: "url(/images/jeremy-bishop-dR_q93lfaTw-unsplash.jpg)",
        title: "The Earth",
        title_2: " Foundation",
        title_3: " Background",
        paragraphs: ["The passion and concern that young people have about environmental sustainability became very evident during the series of school strikes which spread across the world in 2019, inspired by the actions of environmental activist Greta Thunberg."],
        section: "About Us",
        section_height: 40,
        section_color: "#CEAA7A",
        socials_color: "#CEAA7A",
    },
    coverMobile: {
        image: "url(/images/jeremy-bishop-dR_q93lfaTw-unsplash-mobile.jpg)",
        title: "The Earth",
        title_2: " Foundation",
        title_3: " Background",
        paragraphs: ["The passion and concern that young people have about environmental sustainability became very evident during the series of school strikes which spread across the world in 2019, inspired by the actions of environmental activist Greta Thunberg."],
        section: "About Us",
        section_height: 40,
        section_color: "#CEAA7A",
        socials_color: "#CEAA7A",
    },
    slides: [
        {
            paragraph: "For The Earth Foundation founder, seeing thousands of students outside his office window taking to the streets of Geneva, Switzerland, to protest the lack of progress towards environmental sustainability was an awakening.",
            image: "/images/about/slidea1.jpg"
        },
        {
            paragraph: "The Earth Foundation was founded with the goal of taking this passion, enthusiasm and concern for the environment seen in the youth of today and help galvanize it.",
            image: "/images/about/slidea2.jpg"
        },
        {
            paragraph: "The Earth Foundation will take this enthused youth and inspire, educate, mentor, and empower it to effect real change and hopefully, in turn, embolden the following generation.",
            image: "/images/about/slidea3.jpg"
        }
    ],
    board: [
        {
            avatar: "/images/peter/avatar.jpg",
            image: "/images/peter/portrait.jpg",
            name: "Peter McGarry",
            position: "Founder & President of the Board",
            paragraphs: [
                "Peter McGarry is an Irishman based in Switzerland, father of four, entrepreneur, macro portfolio manager and extreme runner.",
                " His passion for environmental sustainability was sparked through his children’s enthusiasm and from his first-hand experiences running marathons on all 7 continents and the North Pole. He decided that he could leverage the passion he saw in his own children, and his experience in global financial markets to create a force for positive change."
            ]
        },
        {
            avatar: "/images/frits/avatar.jpg",
            image: "/images/frits/portrait.jpg",
            name: "Frits Bontekoe",
            position: "Independent member of the Board ",
            paragraphs: [
                "Frits Bontekoe is the Legal Counsel of the World Intellectual Property Organization (WIPO). Prior to joining WIPO, Mr. Bontekoe spent more than 20 years as a legal advisor to international organizations. As a parent and committed internationalist, Mr. Bontekoe brings his legal expertise to The Earth Foundation to inspire young people from around the world to seek and develop solutions to resolving the world’s environmental crisis."
            ]
        },
        {
            avatar: "/images/jean/avatar.jpg",
            image: "/images/jean/portrait.jpg",
            name: "Jean-Christophe Hocke",
            position: "Independent member of the Board ",
            paragraphs: [
                "Jean-Christophe Hocke has been a Partner at the law firm Python in Geneva since 2004. Prior to joining Python, he was a visiting lawyer at the law firm Golenbock Eiseman in New York. While assisting The Earth Foundation in its organization, Jean-Christophe will bring his expertise to the Foundation and to the winners of The Earth Prize to properly structure their startup ventures. Jean-Christophe is a Swiss Citizen, living in Geneva with his wife and two children."
            ]
        }
    ],
    team: [
        {
            avatar: "/images/angela/avatar.jpg",
            image: "/images/angela/portrait.jpg",
            name: "Angela McCarthy",
            position: "Chief Executive Officer",
            isUnknown: false,
            paragraphs: [
                "Angela McCarthy was instrumental in the establishment of The Earth Foundation. Angela has held management, marketing, and fundraising positions with companies in wealth management and hospitality in Geneva and London."
            ]
        },
        {
            avatar: "/images/nunu/avatar.jpg",
            image: "/images/nunu/portrait.jpg",
            name: "Nunu Tadesse",
            position: "Head of Finance & Administration",
            isUnknown: false,
            paragraphs: [
                "Nunu Tadesse has over 25 years of experience across Europe, the United States and Africa in financial leadership roles at MedTech, venture capital, non-profits, foundations, and audit firms. He is well versed in Swiss, European, and US regulatory, tax, GAAP, IP, and compliance laws."
            ],
        },
        {
            avatar: "/images/julie/avatar.jpg",
            image: "/images/julie/portrait.jpg",
            name: "Julie Rufino",
            position: "Head of Strategy",
            isUnknown: false,
            paragraphs: [
                "Julie Rufino graduated in Business Administration from the University of St. Gallen, Switzerland, where she specialized in Sustainable Investments. With work experience in finance and consulting, Julie contributes to The Earth Foundation mission by bringing in her sustainability knowledge and helping in defining the Foundation's strategic orientation."
            ],
        },
        {
            avatar: "/images/anett/avatar.jpg",
            image: "/images/anett/portrait.jpg",
            name: "Anett Thomson",
            position: "Strategy & Operations Associate",
            isUnknown: false,
            paragraphs: [
                "Anett Thomson graduated in Real Estate from the University of Aberdeen. She has experience supporting complex projects with diverse multi-sector stakeholders and is passionate about sustainability and entrepreneurship. Originally from Estonia, Anett has lived and worked in Luxembourg, Switzerland, Singapore, the United Kingdom and Hong Kong."
            ],
        },
        {
            avatar: "/images/diana/avatar.jpg",
            image: "/images/diana/portrait.jpg",
            name: "Diana Conde Moure",
            position: "Strategy & Operations Associate",
            isUnknown: false,
            paragraphs: [
                "Diana Conde Moure holds a master's degree in Comparative International Education from the University of Oslo, Norway. Her experience includes working and volunteering for numerous organizations in the nonprofit, government, academic, and legal sectors. Passionate about education, Diana brings her knowledge and expertise in the field to help the Foundation in its strategic development."
            ],
        },
    ]
};

const schools = [
    { image: "/images/schools/ahliyyah.png", url: 'https://ahliyyahmutran.edu.jo'},
    { image: "/images/schools/aiglon.png", url: 'https://www.aiglon.ch'},
    { image: "/images/schools/aci.jpg", url: 'https://www.aci.k12.tr/en'},
    { image: "/images/schools/arcadia.jpg", url: 'https://arcadia.sch.ae'},
    { image: "/images/schools/asd.jpg", url: 'https://www.asdubai.org'},
    { image: "/images/schools/beau.png", url: 'https://www.beausoleil.ch'},
    { image: "/images/schools/bradfield.jpg", url: 'https://www.bradfieldcollege.org.uk'},
    { image: "/images/schools/cdl.png", url: 'https://www.nordangliaeducation.com/en/our-schools/switzerland/cdl'},
    { image: "/images/schools/ecolint.png", url: 'https://www.ecolint.ch'},
    // { image: "/images/schools/eton.png", url: 'https://www.etoncollege.com'},
    { image: "/images/schools/gcds.jpg", url: 'https://www.gcds.net'},
    { image: "/images/schools/ges.png", url: 'https://www.geschool.ch'},
    { image: "/images/schools/dbsaa.jpg", url: 'https://dbsaa.de'},
    { image: "/images/schools/hpa.png", url: 'https://www.hpa.edu'},
    { image: "/images/schools/ic.jpeg", url: 'https://www.ic.edu.lb'},
    { image: "/images/schools/iszl.jpg", url: 'https://www.iszl.ch'},
    { image: "/images/schools/iolani.png", url: 'https://www.iolani.org'},
    { image: "/images/schools/lerosey.png", url: 'https://www.rosey.ch'},
    { image: "/images/schools/punahou.jpg", url: 'https://www.punahou.edu'},
    { image: "/images/schools/pcis.jpg", url: 'https://puntacanainternationalschool.com'},
    { image: "/images/schools/samata.png", url: 'https://web.facebook.com/Samata-school-the-bamboo-school-of-nepal-566066840153279/?_rdc=1&_rdr'},
    { image: "/images/schools/rock.gif", url: 'https://www.rockportschool.com'},
    { image: "/images/schools/swiss.png", url: 'https://sisd.ae'},
    { image: "/images/partners/sumbandila.jpg", url: 'https://www.sumbandila.org' }, // needs to be in schools
    { image: "/images/schools/stmark.png", url: 'https://www.stmarksschool.org'},
    { image: "/images/schools/royal.png", url: 'https://academy.bt/?fbclid=IwAR1zj63j51ZiiLnkOkMOV1ZuBLxeH29wmbHDejKN-GmSs9eqIKRGxgTf2as'},
    { image: "/images/schools/youth.jpg", url: 'https://www.youthforumswitzerland.ch'},
];

const schoolsCountries = ["Costa Rica", "Dominican Republic", "United States", "Argentina", "French Guyana", "Peru", "Austria", "Ireland", "Italy", "Netherlands", "Norway", "Poland", "Scotland", "Spain", "Switzerland", "Turkey", "UK"];

const partners = [
    { image: "/images/partners/gcf.png", url: 'https://globalchallengesforum.org' },
    { image: "/images/partners/lia.png", url: 'https://www.facebook.com/LiAbundance/?view_public_for=104149958292125' },
    { image: "/images/partners/blue.png", url: 'https://www.myblueplanet.ch/en/' },
    { image: "/images/partners/nord.jpg", url: 'https://www.nordangliaeducation.com' },
    // { image: "/images/partners/round.jpg", url: 'https://www.roundsquare.org' },
];

const earthPrize = {
    team: [
        {
            avatar: "/images/rina/avatar.jpg",
            image: "/images/rina/portrait.jpg",
            name: "Rina Kupferschmid-Rojas",
            position: "Chair of the Panel",
            isUnknown: false,
            paragraphs: [
                "Rina Kupferschmid-Rojas is currently Global Head of Sustainable Finance at UBS. Whereas her professional focus has been on sustainability and impact investing, her engagement beyond her work is broader and spans the areas of environmental sustainability, education, promoting women, and integrating foreigners. She has launched more than 30 social initiatives, including iamthecode, gastromotiva, Water Scarcity, and Thirst. She was an adjunct Professor at Columbia University on Sustainable and Impact Investing and since 2013 has been one of the World Economic Forum's (WEF) Young Global Leaders."
            ]
        },
        {
            avatar: "/images/karen/avatar.jpg",
            image: "/images/karen/portrait.jpg",
            name: "Karen Wilson",
            position: "Member of the Panel",
            isUnknown: false,
            paragraphs: [
                "Karen Wilson is the Founder of GV Partners and an expert on innovation, entrepreneurship, finance and impact measurement, working with private sector firms, international organizations, foundations and academia. She is also an Associate Fellow at Said Business School at Oxford University and a Visiting Lecturer at the Stockholm School of Economics in Riga. She has a Bachelors of Science from Carnegie Mellon University and an MBA from Harvard Business School."
            ],
        },
        {
            avatar: "/images/steven/avatar.jpg",
            image: "/images/steven/portrait.jpg",
            name: "Steven Monfort",
            position: "Member of the Panel",
            isUnknown: false,
            paragraphs: [
                "Steve Monfort is the John and Adrienne Mars Director of the Smithsonian's National Zoo and Conservation Biology Institute. As a pioneer in the field of Conservation Biology, Dr. Monfort is a subject matter expert in Zoo Biology, Animal Health, Reproductive Biology, and Behavioral Ecology.  Over the course of his 33-year career at the Smithsonian, he has led scientists on the cutting-edge of saving species, from developing non-invasive endocrine monitoring techniques to reintroducing the previously-extinct Scimitar-horned Oryx back into the wild.  More recently, he has led the Smithsonian in adopting a “solutions-based mindset,” focusing on what is working in conservation and how we can do more of it."
            ],
        },
        {
            isUnknown: true,
        },
        {
            isUnknown: true,
        },
    ],
};

const webinar = {
    team: [
        {
            avatar: "/images/peter/avatar.jpg",
            image: "/images/peter/portrait.jpg",
            name: "Peter McGarry",
            position: "Founder, The Earth Foundation",
            isUnknown: false,
            paragraphs: [
                "Peter McGarry is an Irishman based in Switzerland, father of four, entrepreneur, macro portfolio manager and extreme runner. His passion for environmental sustainability was sparked through his children’s enthusiasm and from his first-hand experiences running marathons on all 7 continents and the North Pole. He decided that he could leverage the passion he saw in his own children, and his experience in global financial markets to create a force for positive change."
            ]
        },
        {
            avatar: "/images/angela/avatar.jpg",
            image: "/images/angela/portrait.jpg",
            name: "Angela McCarthy",
            position: "Chief Executive Officer, The Earth Foundation",
            isUnknown: false,
            paragraphs: [
                "Angela McCarthy was instrumental in the establishment of The Earth Foundation. Angela has held management, marketing, and fundraising positions with companies in wealth management and hospitality in Geneva and London."
            ],
        },
        {
            avatar: "/images/rina/avatar.jpg",
            image: "/images/rina/portrait.jpg",
            name: "Rina Kupferschmid-Rojas",
            position: "Chair, The Earth Prize Adjudicating Panel",
            isUnknown: false,
            paragraphs: [
                "Rina Kupferschmid-Rojas is currently Global Head of Sustainable Finance at UBS. Whereas her professional focus has been on sustainability and impact investing, her engagement beyond her work is broader and spans the areas of environmental sustainability, education, promoting women, and integrating foreigners. She has launched more than 30 social initiatives, including iamthecode, gastromotiva, Water Scarcity, and Thirst. She was an adjunct Professor at Columbia University on Sustainable and Impact Investing and since 2013 has been one of the World Economic Forum's (WEF) Young Global Leaders."
            ],
        },
        {
            avatar: "/images/julie/avatar.jpg",
            image: "/images/julie/portrait.jpg",
            name: "Julie Rufino",
            position: "Head of Strategy, The Earth Foundation",
            isUnknown: false,
            paragraphs: [
                "Julie Rufino graduated in Business Administration from the University of St. Gallen, Switzerland, where she specialized in Sustainable Investments. With work experience in finance and consulting, Julie contributes to The Earth Foundation mission by bringing in her sustainability knowledge and helping in defining the Foundation's strategic orientation."
            ],
        },
        {
            avatar: "/images/richard/avatar.jpg",
            image: "/images/richard/portrait.jpg",
            name: "Richard McDonald",
            position: "Executive Director, Aiglon College (Switzerland)",
            isUnknown: false,
            paragraphs: [
                "Richard McDonald served as the Head Master of Aiglon College, Switzerland, from 1994 to 2000, and again from 2009 to 2019, and is currently the school’s Executive Director. He served as Chair of the Swiss Group of International Schools from 2006-2010 and again in 2015-16. He is a global trustee of the Round Square, an expanding association of schools across the world committed to a holistic educational approach that has environmental stewardship as one of its priorities. He holds British and Swiss nationalities and has three sons currently working in Switzerland, Scotland and the USA. He aspires to see schools worldwide accelerate efforts to bring environmental responsibility to the heart of learning, living and leading."
            ],
        },
    ],
};

const webinarTeachersSchools = [
    {
        avatar: "/images/karen/avatar.jpg",
        image: "/images/karen/portrait.jpg",
        name: "Karen Wilson",
        position: "Member of The Earth Prize Adjudicating Panel",
        isUnknown: false,
        paragraphs: [
            "Karen Wilson is the Founder of GV Partners and an expert on innovation, entrepreneurship, finance and impact measurement, working with private sector firms, international organizations, foundations and academia. She is also an Associate Fellow at Said Business School at Oxford University and a Visiting Lecturer at the Stockholm School of Economics in Riga. She has a Bachelors of Science from Carnegie Mellon University and an MBA from Harvard Business School."
        ],
    },
    {
        avatar: "/images/angela/avatar.jpg",
        image: "/images/angela/portrait.jpg",
        name: "Angela McCarthy",
        position: "Chief Executive Officer, The Earth Foundation",
        isUnknown: false,
        paragraphs: [
            "Angela McCarthy was instrumental in the establishment of The Earth Foundation. Angela has held management, marketing, and fundraising positions with companies in wealth management and hospitality in Geneva and London."
        ],
    },
    {
        avatar: "/images/julie/avatar.jpg",
        image: "/images/julie/portrait.jpg",
        name: "Julie Rufino",
        position: "Head of Strategy, The Earth Foundation",
        isUnknown: false,
        paragraphs: [
            "Julie Rufino graduated in Business Administration from the University of St. Gallen, Switzerland, where she specialized in Sustainable Investments. With work experience in finance and consulting, Julie contributes to The Earth Foundation mission by bringing in her sustainability knowledge and helping in defining the Foundation's strategic orientation."
        ],
    }
]

const webinarMentors = [
    {
        avatar: "/images/julie/avatar.jpg",
        image: "/images/julie/portrait.jpg",
        name: "Julie Rufino",
        position: "Head of Strategy, The Earth Foundation",
        isUnknown: false,
        paragraphs: [
            "Julie Rufino graduated in Business Administration from the University of St. Gallen, Switzerland, where she specialized in Sustainable Investments. With work experience in finance and consulting, Julie contributes to The Earth Foundation mission by bringing in her sustainability knowledge and helping in defining the Foundation's strategic orientation."
        ],
    },
    {
        avatar: "/images/anett/avatar.jpg",
        image: "/images/anett/portrait.jpg",
        name: "Anett Thomson",
        position: "Strategy & Operations Associate, The Earth Foundation",
        isUnknown: false,
        paragraphs: [
            "Anett Thomson graduated in Real Estate from the University of Aberdeen. She has experience supporting complex projects with diverse multi-sector stakeholders and is passionate about sustainability and entrepreneurship. Originally from Estonia, Anett has lived and worked in Luxembourg, Switzerland, Singapore, the United Kingdom and Hong Kong."
        ],
    },
    {
        avatar: "/images/steven/avatar.jpg",
        image: "/images/steven/portrait.jpg",
        name: "Steven Monfort",
        position: "Member of the Panel, The Earth Prize Adjudicating Panel",
        isUnknown: false,
        paragraphs: [
            "Steve Monfort is the John and Adrienne Mars Director of the Smithsonian's National Zoo and Conservation Biology Institute. As a pioneer in the field of Conservation Biology, Dr. Monfort is a subject matter expert in Zoo Biology, Animal Health, Reproductive Biology, and Behavioral Ecology.  Over the course of his 33-year career at the Smithsonian, he has led scientists on the cutting-edge of saving species, from developing non-invasive endocrine monitoring techniques to reintroducing the previously-extinct Scimitar-horned Oryx back into the wild.  More recently, he has led the Smithsonian in adopting a “solutions-based mindset,” focusing on what is working in conservation and how we can do more of it."
        ],
    },
]

const adjudicatingPanel = {
    team: [
        {
            avatar: "/images/rina/avatar.jpg",
            image: "/images/rina/portrait.jpg",
            name: "Rina Kupferschmid-Rojas",
            position: "Chair of the Panel",
            isUnknown: false,
            paragraphs: [
                "Rina Kupferschmid-Rojas is currently Global Head of Sustainable Finance at UBS. Whereas her professional focus has been on sustainability and impact investing, her engagement beyond her work is broader and spans the areas of environmental sustainability, education, promoting women, and integrating foreigners. She has launched more than 30 social initiatives, including iamthecode, gastromotiva, Water Scarcity, and Thirst. She was an adjunct Professor at Columbia University on Sustainable and Impact Investing and since 2013 has been one of the World Economic Forum's (WEF) Young Global Leaders."
            ],
        },
        {
            avatar: "/images/karen/avatar.jpg",
            image: "/images/karen/portrait.jpg",
            name: "Karen Wilson",
            position: "Member of the Panel",
            isUnknown: false,
            paragraphs: [
                "Karen Wilson is the Founder of GV Partners and an expert on innovation, entrepreneurship, finance and impact measurement, working with private sector firms, international organizations, foundations and academia. She is also an Associate Fellow at Said Business School at Oxford University and a Visiting Lecturer at the Stockholm School of Economics in Riga. She has a Bachelors of Science from Carnegie Mellon University and an MBA from Harvard Business School."
            ],
        },
        {
            avatar: "/images/steven/avatar.jpg",
            image: "/images/steven/portrait.jpg",
            name: "Steven Monfort",
            position: "Member of the Panel",
            isUnknown: false,
            paragraphs: [
                "Steve Monfort is the John and Adrienne Mars Director of the Smithsonian's National Zoo and Conservation Biology Institute. As a pioneer in the field of Conservation Biology, Dr. Monfort is a subject matter expert in Zoo Biology, Animal Health, Reproductive Biology, and Behavioral Ecology.  Over the course of his 33-year career at the Smithsonian, he has led scientists on the cutting-edge of saving species, from developing non-invasive endocrine monitoring techniques to reintroducing the previously-extinct Scimitar-horned Oryx back into the wild.  More recently, he has led the Smithsonian in adopting a “solutions-based mindset,” focusing on what is working in conservation and how we can do more of it."
            ],
        },
        {
            isUnknown: true,
        },
        {
            isUnknown: true,
        },
    ],
};

const faqsEarthPrize = [
    {
        sectionName: 'General FAQs',
        faqs: [
            {
                question: 'Is it free to sign up for The Earth Prize?',
                answer: 'Yes, participation in The Earth Prize is free of charge. Participants will never be asked to make any payment at any stage of the competition.',
            },
            {
                question: 'How many students can there be on a team?',
                answer: 'Students may sign-up as individuals or as a team of up to 5 people.',
            },
            {
                question: 'Are students from different grades allowed to participate in the same team?',
                answer: 'Students from different classes and grades are welcome to form a team as long as they are between the ages of 13 and 19 and registered in the same institution.',
            },
            {
                question: 'Are students from different schools allowed to participate in the same team?',
                answer: 'All members of each team must be registered in the same school/institution.',
            },
            {
                question: 'Are there consequences for dropping out of The Earth Prize?',
                answer: 'Individual students or team members as well as entire teams are allowed to withdraw from The Earth Prize at any stage without consequences. However, in such an event, the participant/s will no longer have access to The Earth Prize online learning platform. Participants who withdraw from the competition can keep the distinctions obtained in it and still get access to The Earth Prize Alumni network if they wish to do so.',
            },
            {
                question: 'Can a team be disqualified?',
                answer: 'The Earth Foundation reserves the right to disqualify any team or individual according to the Code of Conduct.',
            },
            {
                question: 'Can a parent serve as team supervisor?',
                answer: 'No, all students registered in an academic institution must have a teacher or a school administrator as their supervisor. A parent may serve as supervisor only in the case of an individual or a group of homeschooled students who wishes to participate in The Earth Prize. An official document certifying authorized homeschooling status will be requested during registration.',
            },
            {
                question: 'Who are The Earth Prize Mentors?',
                answer: 'The Earth Prize Mentors are university students who are passionate about sustainability and entrepreneurship and looking for an opportunity to share their knowledge. Mentors will answer participants’ questions on The Earth Prize platform and provide advice and support on students’ submissions.',
            },
            {
                question: 'How will the students and mentors interact?',
                answer: 'All mentoring will take place through The Earth Prize platform exclusively.',
            },
            {
                question: 'Can a team submit multiple projects?',
                answer: 'Schools and teachers are allowed and encouraged to register more than one team to The Earth Prize; however, each team may submit one project only.',
            },
            {
                question: 'Can the same student/team participate more than once?',
                answer: 'Past participants, including Winners and Runners-up, are welcome to register for The Earth Prize again, as long as they meet the eligibility criteria and present a different project. Projects already submitted to The Earth Prize in a previous year or which have already been recognized with a different award will not be accepted.',
            },
            {
              question: 'Are students required to implement their projects?',
              answer: 'No, implementation is not required to participate in The Earth Prize. Valid submissions can range from project ideas or proposals to already implemented initiatives.',
            },
            {
                question: 'Where and when will The Earth Prize Ceremony take place?',
                answer: 'The Earth Prize Ceremony will take place virtually at the end of March 2022.',
            }
        ]
    },
    {
        sectionName: 'FAQs for Students',
        faqs: [
            {
                question: 'Can I register for The Earth Prize without a teacher?',
                answer: 'Participants must have an assigned adult supervisor for their team in order to successfully register for The Earth Prize. Eligible supervisors include teachers and school administrators. If an individual or a group of homeschooled students wishes to participate, a parent may serve as supervisor. In this case, an official document certifying authorized homeschooling status will be requested during registration.',
            },
            {
                question: 'Can new team members join after the Registration Phase is over?',
                answer: 'Once the Registration Phase is over, no new team members will be allowed to join existing teams.',
            },
            {
                question: 'Can a team member be replaced?',
                answer: 'Once the Registration Phase is over, no participant can be replaced by a new team member.',
            },
            {
                question: 'Can a team member be removed?',
                answer: 'Yes, team supervisors can decide to remove a team member if they deem it necessary. The Earth Foundation also reserves the right to remove any participant for breaching the Code of Conduct.',
            },
            {
                question: 'Can my teacher help my team with the project?',
                answer: 'Team supervisors are expected to serve as team facilitators, exclusively. Their duties will be limited to (a) helping students register for the competition individually or in teams, (b) helping students learn to navigate The Earth Prize online platform, (c) providing students with further academic guidance on the online learning material if necessary, and (d) supporting and supervising students’ work on their project proposals.',
            },
            {
                question: 'How many hours per week will participating in The Earth Prize require?',
                answer: 'There are no set hours for participation. Each team is responsible for their own project planning.',
            },
            {
                question: 'What type of project proposal can I submit?',
                answer: 'Submissions to The Earth Prize are expected to propose solutions aimed at accelerating positive change towards environmental sustainability. The Earth Prize will consider a wide range of projects: local, national as well as global ones; new ideas with implementation potential as well as existing student projects; products, organizations, enterprises, as well as campaigns.',
            },
            {
                question: 'Am I required to go through all the online learning materials?',
                answer: 'No, the participants are not required but highly encouraged to go through all the online learning materials available on The Earth Prize platform.',
            },
            {
                question: 'Can my team submit more than one entry, or can I belong to more than one team?',
                answer: 'No, each student may only belong to one team, and each team may only submit one entry.',
            },
        ],
    },
    {
        sectionName: 'FAQs for Teachers',
        faqs: [
            {
                question: 'What does signing up for The Earth Prize require?',
                answer: 'Students and teachers are required to register for The Earth Prize using the online platform. For the registration to be approved, teachers will need to (a) verify their teacher/administrator status via email and (b) individually accept each supervisee’s registration. Students under the age of eighteen (18) will also need to submit a copy of their parent or legal guardian’s signed permission to participate in The Earth Prize.',
            },
            {
                question: 'What are my duties as a participating teacher in The Earth Prize?',
                answer: 'Teachers acting as supervisors are expected to serve as team facilitators, exclusively. Their duties will be limited to (a) helping students register for the competition individually or in teams, (b) helping students learn to navigate The Earth Prize online platform, (c) providing students with further academic guidance on the online learning material if necessary, and (d) supporting and supervising students’ work on their project proposals.',
            },
            {
                question: 'How many hours per week will participating in The Earth Prize require?',
                answer: 'There are no set hours for participation. Supervisors can decide which amount of time is necessary for adequate support and supervision.',
            },
            {
                question: 'Am I expected to integrate the learning material into my own course?',
                answer: 'Teachers are not required to integrate The Earth Prize learning material into their own course. However, if they wish to do so, they should refer to their school for guidance.',
            },
            {
                question: 'If the school administration does not allow me to use my class time to participate in The Earth Prize, what can I do?',
                answer: 'Participation in The Earth Prize can also take the form of an extracurricular or afterschool activity.',
            },
            {
                question: 'Do students have to watch the online learning material in class?',
                answer: 'The Earth Prize online learning material does not need to be watched during class. However, teachers are welcome to integrate the learning materials into their own course if they wish.',
            },
            {
                question: 'Am I required to dedicate class time to the development of students’ project proposals?',
                answer: 'No, teachers are not required to allot class time to the development of students’ project proposals. This work can be done after class, as an extracurricular activity, or in the students’ free time, depending on how the team and the supervisor decide to organize themselves.',
            },
            {
                question: 'Am I allowed to help my students develop their project proposals?',
                answer: 'Yes; however, teachers should primarily act as a supervisor and facilitator and only provide general guidance in the development of their students’ project proposals.',
            },
            {
                question: 'If my group of students advances to the Finalists Phase, am I expected to supervise their calls with mentors?',
                answer: 'If any of the students in the participating team is under the age of 18,  the supervisor must be present during the calls with the mentor.',
            },
            {
                question: 'Can several teachers participate jointly?',
                answer: 'Each team is allowed to have only one supervisor.',
            },
            {
                question: 'If I can no longer supervise my group of students, can another teacher substitute for me/take over the project?',
                answer: 'A new supervisor can be assigned in such an event. However, the teacher should contact The Earth Foundation team as soon as possible.',
            },
            {
                question: 'Can a supervisor be disqualified from The Earth Prize?',
                answer: 'Yes, The Earth Foundation reserves the right to disqualify any participant who breaches The Earth Prize Code of Conduct.',
            },
        ],
    },
];

const faqsMentors = [
    {
        sectionName: 'General FAQs',
        faqs: [
            {
                question: 'What is The Earth Prize?',
                answer: 'The Earth Prize is a $200,000 global youth environmental sustainability competition open to all secondary school students between the ages of 13 and 19, with rewards in the form of university scholarships for students and grants for schools.',
            },
            {
                question: 'Who are The Earth Prize participants?',
                answer: 'Secondary school students between the ages of 13 and 19.',
            },
            {
                question: 'Who are The Earth Prize Mentors?',
                answer: 'The Earth Prize Mentors are university students who are passionate about sustainability, entrepreneurship and looking for an opportunity to share their knowledge.',
            },
            {
                question: 'Can I only apply if I am enrolled in a university?',
                answer: 'Yes, all Mentors are required to be enrolled in a higher education institution.',
            },
            {
                question: 'Will I receive a participation certificate?',
                answer: 'Mentors who have successfully completed the program  will receive a special certificate at the end of the competition. All participating Mentors will also be considered for The Earth Prize “Mentor of the Year” award.',
            },
            {
                question: 'What is The Earth Prize Mentor of the Year award?',
                answer: 'Each year, participants in The Earth Prize will vote to select the most engaged mentor in the competition. This mentor will be recognized as “Mentor of Year” and will receive a $12,500 cash prize.',
            },
            {
                question: 'What does it mean to be part of The Earth Foundation Alumni Association?',
                answer: 'Mentors who successfully complete the program will have the chance of joining The Earth Foundation Alumni Association. They will be part of an inspiring network that connects mentors, partners and participants. The Alumni Association will strengthen ties among its members, offering them support through access to educational content, mentorship, social events, and professional opportunities.',
            },
            {
                question: 'When will I be able to access the Alumni Association network?',
                answer: 'The Earth Foundation Alumni Association will be launched in 2022.',
            },
        ]
    },
    {
        sectionName: 'Selection Process',
        faqs: [
            {
                question: 'What are the eligibility criteria to apply to become a Mentor?',
                answer: 'Candidates are required to be enrolled in a higher education institution and have demonstrated interest and/or experience in the fields of environmental sustainability or entrepreneurship.',
            },
            {
                question: 'Can I  apply if I am not enrolled in a university?',
                answer: 'No, all Mentors are required to be part of a higher education institution.',
            },
            {
                question: 'What will I need to submit in my application?',
                answer: <p>Candidates will be asked to provide their basic personal information as well as a motivation letter and a current CV. You can see the application form <a href="https://theearthfoundation.typeform.com/to/trELQBzU">here</a>.</p>,
            },
            {
                question: 'How will the Mentors be selected?',
                answer: 'The Mentors will be selected based on their experience and knowledge of  environmental science, entrepreneurship and sustainability. Their interest in sharing their knowledge and teaching or tutoring experience will also be taken into account. Shortlisted candidates will be invited for a short interview.',
            },
            {
                question: 'When will I find out if I have been accepted or not?',
                answer: 'Applicants will be notified within two to three week after their submission.',
            },
            {
                question: 'Can I apply more than once?',
                answer: 'Yes, applicants are welcome to reapply to become a Mentor in future editions of The Earth Prize.',
            },
        ],
    },
    {
        sectionName: 'Mentoring',
        faqs: [
            {
                question: 'What does mentoring in The Earth Prize involve exactly?',
                answer: 'Mentoring will mostly involve answering sustainability-related questions from The Earth Prize participants.',
            },
            {
                question: 'How will the mentoring take place?',
                answer: 'All mentoring will take place virtually through The Earth Prize online platform.',
            },
            {
                question: 'How long will the mentoring last?',
                answer: 'Mentoring will last at least from September 1st, 2021 until January 31st, 2022. Mentors who have demonstrated the highest levels of engagement during the first phases of the competition will be given the chance to work individually with one of the ten The Earth Prize Finalists. In this case, the mentoring will be extended until the end of the competition in March, 2022.',
            },
            {
                question: 'What happens if I am not able to answer any questions?',
                answer: 'Mentors are allowed and encouraged to use external resources for answering questions. However, if a Mentor feels that he or she is not able to help the participants, they are allowed to withdraw from the program.',
            },
            {
                question: 'Are there consequences for being inactive on the platform?',
                answer: 'The Earth Foundation reserves the right to remove any Mentor from competition and revoke their access to the Alumni platform at any time if the Mentor is not meeting the minimum established requirements.',
            },
            {
                question: 'Can I withdraw half-way through The Earth Prize competition?',
                answer: 'Mentors are allowed to withdraw from the competition at any time. However, by doing so, Mentors will no longer have access to the learning platform or the The Earth Foundation Alumni Network. They will also no longer be considered for The Earth Prize “Mentor of the Year” award.',
            },
            {
                question: 'Will I be assigned to a participating team?',
                answer: 'Mentors will not be assigned a specific team. They will answer questions from all participating teams around the world.',
            },
            {
                question: 'How will The Earth Prize Finalist Mentors be selected?',
                answer: 'Mentors who have demonstrated the highest levels of engagement during the first phases of the competition will be given the chance to work individually with one of the ten The Earth Prize Finalists.',
            },
            {
                question: 'What is the role of The Earth Prize Finalist Mentors?',
                answer: 'During the Finalists Phase of the competition, the selected Mentors will work with one of the ten finalist teams to help them prepare for their final project submission. This opportunity entails at least a one-hour call with the assigned finalist team.',
            },
            {
                question: 'Will I receive training?',
                answer: 'Mentors will not receive any training; however an introductory webinar will be held before the start of The Earth Prize competition.',
            },
            {
                question: 'Can I meet the participating teams?',
                answer: 'No. The mentoring will take place virtually and only through The Earth Prize platform. Communications outside the platform are strictly prohibited and will result in the disqualification of the Mentor.',
            },
            {
                question: 'What type of questions am I expected to answer?',
                answer: 'It is difficult to anticipate the type of questions that will be asked. However, if you are selected as a Mentor, it means that The Earth Foundation team trusts that you will be a valuable addition to the competition, bringing your own unique and specific knowledge and experience.',
            },
        ],
    },
];

const ambassadors = [
    {
        name: 'To be announced',
        position: 'The Earth Foundation',
        avatar: "/images/karen/avatar.jpg",
    },
]

export default {
    home,
    about,
    earthPrize,
    faqsEarthPrize,
    webinar,
    adjudicatingPanel,
    faqsMentors,
    ambassadors,
    schools,
    webinarTeachersSchools,
    partners,
    webinarMentors,
    schoolsCountries,
};