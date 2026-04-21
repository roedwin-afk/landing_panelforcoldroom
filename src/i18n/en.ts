import { email } from "astro:schema";
import WhyChooseUs from "../components/WhyChooseUs.astro";

export const en = {
    menu: {
        solution: 'Solution',
        blog: 'Blog',
        contact: 'Contact',
    },
    hero: {
        title: 'Cold Room Panels for Industrial Refrigeration',
        description: 'High-performance polyurethane panels for cold rooms, food processing, and temperature-controlled facilities. Designed for thermal efficiency, durability, and demanding industrial environments.',
        cta: 'Request a Quote →',
        trust: 'Trusted for industrial cold storage projects',
    },
    problems: {
        sectionTitle: 'Problems caused by poor insulation',
        items: [
            {
                icon: 'temperature' as const,
                title: 'Temperature Loss & Energy Waste',
                text: 'Poor insulation increases thermal transfer, driving energy consumption up by as much as 40% and putting cold chain performance at risk.',
            },
            {
                icon: 'compliance' as const,
                title: 'Regulatory Compliance Risks',
                text: 'Using non-certified materials can make it harder to meet food safety and sanitary standards, leading to fines, failed inspections, or operational disruptions.',
            },
            {
                icon: 'installation' as const,
                title: 'Slow & Costly Installations',
                text: 'Traditional systems take longer to install, demand more labor, and often result in higher maintenance costs over time.',
            },
        ],
    },
    solution: {
        title: 'Polyurethane Cold Room Panels for Maximum Insulation and Efficiency',
        text: 'Our PUR/PIR polyurethane panels are engineered to reduce thermal loss, improve energy efficiency, and support sanitary compliance in industrial cold rooms, food processing facilities, and temperature-controlled environments.',
        features: [
            'High thermal efficiency with conductivity from 0.022 W/mK',
            'Available in thicknesses from 60 mm to 200 mm',
            'Metal facing suitable for humid environments and industrial washdown areas',
            'Complies with food safety and sanitary standards, including TIF, FDA, and HACCP',
            'Fast installation with a precision tongue-and-groove joint system',
        ],
    },
    applications: {
        title: 'Solutions for Different Industries',
        items:
        {
            foodIndustry: {
                title: "Food Processing",
                text:
                    "Cold rooms for preservation, freezing, and processing with precise temperature control and full sanitary compliance.",
            },
            pharmaceuticalIndustry: {
                title: "Pharmaceutical",
                text:
                    "Temperature-controlled storage for medicines, vaccines, and sensitive products requiring strict regulatory compliance.",
            },
            logisticsDistribution: {
                title: "Logistics & Distribution",
                text:
                    "Cold storage solutions for distribution centers and refrigerated transport, optimizing the cold chain and reducing losses.",
            },
            agricultureIndustry: {
                title: "Agriculture",
                text:
                    "Post-harvest storage for fruits, vegetables, and perishable goods, extending shelf life and maintaining product quality.",
            },
        }
        ,
    },
    whyChooseUs: {
        title: 'Why Choose Our Cold Room Panels?',
        stats: [{
            icon: 'clock' as const,
            number: '+10 Years of experience',
            text: 'Years of experience in insulation solutions for industrial projects',
        },
        {
            icon: 'building' as const,
            number: '+350 Projects delivered',
            text: 'Projects delivered across industrial and commercial sectors',
        },
        {
            icon: 'message' as const,
            number: 'Technical Support',
            text: 'We help you select the right panel based on your application, temperature, and operational needs',
        },
        {
            icon: 'award' as const,
            number: 'Certified Quality',
            text: 'Materials designed to meet international standards for industrial and sanitary environments',
        },
        ]
    },
    projects: {
        title: 'Cold Room Panel Projects',
        subtitle: 'Real installations using high-performance insulated panels in Mexico.',
        items: {
            project1: {
                desc: 'Cold storage room designed for perishable goods, ensuring thermal stability and product preservation in commercial operations.',
            },
            project2: {
                desc: 'Installation of high-efficiency polyurethane panels to optimize energy consumption in industrial refrigeration systems.',
            },
            project3: {
                desc: 'Custom cold room solution tailored to specific temperature requirements and operational conditions.',
            },
        }
    },
    faqs: {
        title: 'Frequently Asked Questions',
        items: [
            {
                question: "What is a cold room panel?",
                answer:
                    "It is a thermal insulation system with a polyurethane core, designed to build cold rooms and maintain controlled temperatures efficiently.",
            },
            {
                question: "Do the panels comply with international standards?",
                answer:
                    "Yes, we offer panels that comply with standards such as TIF and FDA, making them suitable for industrial, food, and cold chain applications.",
            },
            {
                question: "Do you provide installation throughout El Salvador?",
                answer:
                    "Yes, we provide service across El Salvador and develop projects for clients in different Central American countries.",
            },
            {
                question: "How can I request a quote?",
                answer:
                    "You can request a quote through our contact form or message us on WhatsApp to receive technical advice based on your project.",
            },
            {
                question: "What panel thicknesses are available?",
                answer:
                    "We offer panels in different thicknesses, from 60 mm to 200 mm, depending on the insulation level your project requires.",
            },
            {
                question: "What is the difference between PUR and PIR panels?",
                answer:
                    "Both provide efficient thermal insulation, but PIR stands out for its better fire performance, making it ideal for applications with higher safety requirements.",
            },
            {
                question: "Which industries are these panels recommended for?",
                answer:
                    "They are recommended for the food industry, pharmaceuticals, logistics, agroindustry, and any operation that requires temperature control.",
            },
        ]
    },
    cta: {
        title: 'Start Your Cold Room Project Today',
        text: 'Get expert guidance and a tailored solution designed for your temperature, industry, and operational requirements.',
        button: 'Get a Free Quote →',
        trust: 'Trusted by companies across industrial and commercial sectors',
    },
    footer: {
        description: 'High-performance polyurethane panels for cold rooms, food processing, and temperature-controlled facilities.',
        footer_links: {
            navigation: 'Navigation',
            solution: 'Solution',
            blog: 'Blog',
            contact: 'Contact',
        },
    },
    blog: {
        title: 'Panel for Cold Room',
        description: 'Insights about cold room panels, industrial insulation, and refrigeration projects in Mexico.',
        btncta: 'Read more →',
        btn_next: 'Next →',
        btn_prev: '← Previous',
    },
    form_contact: {
        title: 'Request Your Quote',
        description: 'Contact us for expert guidance in selecting the right cold room panels for your project. We will get back to you as soon as possible.',
        fields: {
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'Email',
            email_placeholder: 'your@email.com',
            phone: 'Phone',
            phone_placeholder: '+52 00 0000 0000',
            message: 'Project Details',
            message_placeholder: 'Tell us about your project...',
        },
        submit: 'Send Request →',
    },
    solutionPage: {
        hero: {
            eyebrow: "Specialized solution",
            title: "High-performance polyurethane panels for cold rooms",
            text: "A solution designed to optimize thermal insulation, improve operational efficiency, and provide a reliable system for industrial refrigeration projects.",
            primaryCta: "Request a quote",
            secondaryCta: "View applications",
            imageAlt: "Polyurethane panels for cold room projects"
        },

        problems: {
            kicker: "Common challenges",
            title: "Problems this solution helps solve",
            items: [
                "Temperature loss and thermal fluctuations inside the cold room",
                "High energy consumption caused by poor insulation",
                "Condensation and moisture on critical surfaces",
                "Difficulty maintaining hygienic and easy-to-clean spaces",
                "Low-durability installations or poor structural performance",
                "Projects that need a modular, efficient, and scalable solution"
            ]
        },

        overview: {
            kicker: "Overview",
            title: "A thermal solution built for real operational demands",
            text1: "Polyurethane panels are one of the most efficient options for building cold rooms, refrigeration chambers, and thermally controlled spaces. Their structure combines insulation, strength, and practical installation in one system.",
            text2: "This solution helps preserve internal temperature, reduce energy losses, and achieve cleaner, more durable, and more professional installations.",
            stats: [
                {
                    label: "Insulation",
                    value: "high performance"
                },
                {
                    label: "System",
                    value: "modular and efficient"
                },
                {
                    label: "Spaces",
                    value: "more hygienic"
                }
            ]
        },

        benefits: {
            kicker: "Benefits",
            title: "Key solution benefits",
            items: [
                {
                    title: "Excellent thermal insulation",
                    text: "Helps preserve internal temperature and improves refrigeration system efficiency."
                },
                {
                    title: "Higher energy efficiency",
                    text: "Reduces thermal leakage and supports lower operating energy consumption."
                },
                {
                    title: "Hygienic surfaces",
                    text: "Supports cleaning and maintenance in environments with strict sanitary requirements."
                },
                {
                    title: "Modular installation",
                    text: "Allows more organized, scalable projects with better time efficiency."
                },
                {
                    title: "Durability and strength",
                    text: "Provides a solid solution for demanding commercial and industrial environments."
                },
                {
                    title: "Better project presentation",
                    text: "Creates cleaner, more professional, and more functional business spaces."
                }
            ]
        },

        applications: {
            kicker: "Applications",
            title: "Common applications",
            items: [
                "Food cold rooms",
                "Refrigeration chambers",
                "Freezer rooms",
                "Meat processing facilities",
                "Dairy industry applications",
                "Distribution centers",
                "Industrial kitchens",
                "Pharmaceutical projects"
            ]
        },

        process: {
            kicker: "Process",
            title: "How we develop a project",
            items: [
                {
                    step: "01",
                    title: "We assess the need",
                    text: "We review the project type, space usage, and general requirements."
                },
                {
                    step: "02",
                    title: "We define the solution",
                    text: "We recommend the right setup based on thermal and operational demands."
                },
                {
                    step: "03",
                    title: "System supply",
                    text: "The solution is prepared with panels and components aligned to the project."
                },
                {
                    step: "04",
                    title: "Operational readiness",
                    text: "The result is a more efficient, organized, and ready-to-use installation."
                }
            ]
        },

        comparison: {
            kicker: "Comparison",
            title: "Why choose polyurethane panels?",
            headers: {
                aspect: "Aspect",
                solution: "Polyurethane panel",
                other: "Other solutions"
            },
            rows: [
                {
                    aspect: "Thermal insulation",
                    solution: "High performance",
                    other: "Variable performance"
                },
                {
                    aspect: "Energy efficiency",
                    solution: "Higher efficiency",
                    other: "Lower thermal control"
                },
                {
                    aspect: "Cleaning and hygiene",
                    solution: "More practical surfaces",
                    other: "More complex maintenance"
                },
                {
                    aspect: "Installation",
                    solution: "Modular system",
                    other: "Slower processes"
                },
                {
                    aspect: "Durability",
                    solution: "High resistance",
                    other: "Depends on the chosen system"
                },
                {
                    aspect: "Final appearance",
                    solution: "Professional finish",
                    other: "Less uniform result"
                }
            ]
        },

        faq: {
            kicker: "FAQ",
            title: "Frequently asked questions",
            items: [
                {
                    q: "What types of projects is this solution recommended for?",
                    a: "It is ideal for cold rooms, refrigeration chambers, freezer rooms, and thermally controlled spaces in industrial and commercial sectors."
                },
                {
                    q: "Does it help reduce energy consumption?",
                    a: "Yes. Strong insulation helps reduce thermal losses and improves refrigeration system efficiency."
                },
                {
                    q: "Is it suitable for the food industry?",
                    a: "Yes. It is widely used in projects where hygiene, cleanability, and thermal control are essential."
                },
                {
                    q: "Can it adapt to different project sizes?",
                    a: "Yes. As a modular system, it can be adjusted to different scales and installation needs."
                }
            ]
        },

        cta: {
            kicker: "Next step",
            title: "Let’s talk about your project",
            text: "If you need a reliable thermal insulation solution for cold rooms, we can help you evaluate the right option for your operation.",
            button: "Contact us now"
        }
    }

};