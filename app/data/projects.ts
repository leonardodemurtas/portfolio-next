export interface ProjectSection {
    title: string;
    content: string; // Markdown supported
}

export interface Project {
    slug: string;
    title: string;
    role: string;
    period?: string;
    sections: ProjectSection[];
}

export const featuredProjects: Project[] = [
    {
        slug: "design-system",
        title: "Design System for Enterprise Risk",
        role: "Product design, UX",
        period: "2023–2024",
        sections: [
            {
                title: "Why we needed a change",
                content: "The organization was acquired by a larger group and suddenly found itself part of a product suite with seven different tools. Each tool had its own UI conventions, colour palettes, icon sets and behaviours. Developers were shipping pages that looked different from one another; users felt lost and support tickets kept coming in. We needed a unified design system to reduce rework and create a consistent, trustworthy experience across the portfolio."
            },
            {
                title: "Shaping the design system",
                content: "I led the creation of a design system that could serve multiple business units. We kicked off by auditing existing products, identifying common components and patterns, and then defining a shared language for colours, typography, spacing and interaction states. The system had to be versatile enough to handle data‑heavy dashboards while remaining simple and familiar to our users."
            },
            {
                title: "Laying the groundwork",
                content: "We broke the work into three tracks: discovery, creation and adoption. The discovery track involved cataloguing every component used by the seven products. The creation track focused on building a scalable token library and atomic components. Adoption included training sessions, documentation and iterative feedback from cross‑functional teams."
            },
            {
                title: "Why Material Design",
                content: "We chose Material Design as the foundational framework because of its flexibility and widespread recognition. Its component library allowed us to move quickly while maintaining a polished, familiar look. Users were already accustomed to Material guidelines, which reduced the cognitive load and learning curve."
            },
            {
                title: "Rules that made decisions faster",
                content: `The design system was guided by principles such as:
- **Don’t Make Me Think** – every screen should communicate its purpose immediately.
- **Help the User to Get It Done** – provide prompts and guidance to support users’ goals.
- **One click away** – keep key actions within one click from the primary screen.

To manage the work, we set up Jira boards for tasks, Storybook for living documentation and Confluence for knowledge sharing.`
            },
            {
                title: "Building the system backbone",
                content: "We created a system of design tokens for colours, spacing, typography and elevation. Tokens were grouped into categories and stored in Figma using the new variables feature. Atomic components were built on top of these tokens to form molecules, organisms and templates."
            },
            {
                title: "Micro reusable decisions (Tokens)",
                content: "We developed token collections for colour and spacing. Colour tokens included primary, secondary, semantic (success/warning/error) and neutral palettes. Spacing tokens were defined in a scale (4, 8, 16, 24, etc.) to ensure rhythm and consistency. These tokens fed directly into Figma variables and our CSS styles."
            },
            {
                title: "Templates that get the work done",
                content: "We provided ready‑made templates for archive pages, entity views, dashboards and detail modals. These templates accelerated development and ensured new features looked consistent with the rest of the product suite."
            },
            {
                title: "Hands-on adoption sessions",
                content: "To ensure adoption, we ran regular training sessions with designers and developers. We walked through the design system documentation, explained how to use tokens and components, and addressed feedback from teams adopting the system for new features."
            },
            {
                title: "Rollout and results",
                content: `* **7 products adopted** – the system was applied across all internal risk tools.
* **70% faster development** – teams could assemble pages from existing components instead of building from scratch.
* **95% fewer off‑spec issues** – designs in Figma matched code in Storybook, reducing the need for corrections.
* **50% less design rework** – designers spent less time fixing inconsistencies.`
            },
            {
                title: "Reflection and future directions",
                content: "The design system introduced consistency and scalability. It also taught me how to align designers and developers around a shared vision. As we continue to expand, we plan to incorporate dark mode, accessibility improvements and more advanced analytics components."
            }
        ]
    },
    {
        slug: "credit-portfolio-monitoring",
        title: "Credit Portfolio Monitoring",
        role: "Product design, UX, Interaction design, UI",
        period: "2023",
        sections: [
            {
                title: "Task",
                content: "The challenge was to redesign a monitoring tool used by loan managers and portfolio managers to track distressed positions. The original product was cluttered and lacked focus, making it hard for users to see which loans needed immediate attention."
            },
            {
                title: "Research",
                content: "We conducted semi‑structured interviews with nine participants: loan managers, analysts and business heads. We observed their workflows, identified pain points and prioritised needs. Users consistently struggled with information overload and unclear risk indicators."
            },
            {
                title: "Discovery",
                content: `Three archetypes emerged from our research:
1. **Loan Manager** – wants to quickly spot troubled loans, understand collateral and communicate with lenders.
2. **Portfolio Manager** – needs to see portfolio‑level trends, identify systemic issues and allocate resources.
3. **Head of Business** – cares about high‑level performance and risk exposure across products.`
            },
            {
                title: "Personae",
                content: "Each persona had its own section summarising needs and pain points. Loan managers demanded quick access to risk flags and payment histories. Portfolio managers asked for filtering and sorting tools to isolate segments. Heads of business needed dashboards summarising risk exposure."
            },
            {
                title: "Product Shape",
                content: "The tool was reorganised into three distinct modules, one for each archetype. Users choose their role when they log in and see a customised dashboard tailored to their needs."
            },
            {
                title: "User Journey & Flow",
                content: "We mapped the user journey from logging in to completing key tasks (e.g., flagging a loan, reviewing portfolio risk). We designed flows that kept important information on screen while giving users the ability to drill down into loan details."
            },
            {
                title: "First Ideas and Prototypes",
                content: "Early sketches explored card‑based dashboards and collapsible sidebars. We tested prototypes with users to see how they reacted to summarised vs. detailed views. Several iterations followed as we adjusted layouts and data visualisation."
            },
            {
                title: "Second Wave and Iteration",
                content: "Based on feedback, we simplified navigation and added more contextual help. We introduced a timeline for each loan, showing the sequence of events leading to the distressed status. We also implemented micro‑interactions to make filtering and sorting more intuitive."
            },
            {
                title: "Results",
                content: `* The product concept was redesigned from a static report to an interactive dashboard.
* Scope was refocused to show the most critical metrics first.
* Scalable templates were built, enabling the tool to expand to other asset classes.
* A pilot was delivered end‑to‑end, with positive feedback from the risk management team.`
            },
            {
                title: "Main Challenges",
                content: `* **Integration into ongoing projects** – the new design had to be implemented while teams were still working on old features.
* **Conceptual shift** – moving from static lists to interactive dashboards required a change in mindset for users and stakeholders.
* **Strategic redefinition** – we had to align the new product vision with broader company strategy.`
            }
        ]
    }
];

export const archiveProjects: Project[] = [
    {
        slug: "powerbiz-company-sheet",
        title: "PowerBiz Company Sheet",
        role: "Product design",
        sections: [
            {
                title: "Description",
                content: "A redesign of the company sheet used to evaluate potential prospects and monitor existing customers. The old sheet was cluttered and confusing. The new design surfaces key metrics (liquidity, solvency, growth) through score indicators and AI‑powered suggestions. Sections include: Understanding PowerBiz, Role and Challenge, Transforming a Bottleneck, Use Cases (Evaluating a Potential Prospect & Monitoring Customer’s Health), Results, Key Features, Video Prototype and Key Takeaways."
            }
        ]
    },
    {
        slug: "hackathon-digitalbrain",
        title: "Hackathon DigitalBrain",
        role: "Product design",
        sections: [
            {
                title: "Description",
                content: "A 48‑hour hackathon challenge to improve a data‑analysis platform. The project involved rethinking the model configuration interface, simplifying the definition of pools and adding AI guidance to help marketing managers set up campaigns. Sections include: Understanding DigitalBrain, Role and Challenge, Brainstorming and Solutions, Prototyping the Solution, Perimeter Calibration, Analysis Results, Video, Key Takeaways and Moving Forward."
            }
        ]
    },
    {
        slug: "querybuilder",
        title: "QueryBuilder",
        role: "Product design",
        sections: [
            { title: "Description", content: "A tool for building complex queries through a visual interface." }
        ]
    },
    {
        slug: "esg-verify-platform",
        title: "ESG Verify Platform",
        role: "Product design",
        sections: [
            { title: "Description", content: "Platform to verify environmental, social and governance data." }
        ]
    },
    {
        slug: "music-player",
        title: "Music player",
        role: "Product design",
        sections: [
            { title: "Description", content: "Design of a minimalistic music player app." }
        ]
    },
    {
        slug: "beacon-locator",
        title: "Beacon locator",
        role: "Product design",
        sections: [
            { title: "Description", content: "Interface for locating beacons in a physical environment." }
        ]
    },
    {
        slug: "customer-experience-research",
        title: "Customer experience research",
        role: "Research",
        sections: [
            { title: "Description", content: "Research insights and recommendations." }
        ]
    },
    {
        slug: "commission-plan",
        title: "Commission plan",
        role: "Product design",
        sections: [
            { title: "Description", content: "Tool for visualising and generating commission plans." }
        ]
    },
    {
        slug: "donut-worry",
        title: "Donut worry",
        role: "Product design",
        sections: [
            { title: "Description", content: "Playful app concept based on doughnut bakery orders." }
        ]
    },
    {
        slug: "leadboard",
        title: "Leadboard",
        role: "Product design",
        sections: [
            { title: "Description", content: "Gamified leaderboard to encourage engagement." }
        ]
    },
    {
        slug: "home-automation-system",
        title: "Home automation system",
        role: "Product design",
        sections: [
            { title: "Description", content: "Interface for controlling smart home devices." }
        ]
    },
    {
        slug: "onboarding-process",
        title: "Onboarding process",
        role: "Product design",
        sections: [
            { title: "Description", content: "Streamlined onboarding flow for new users." }
        ]
    }
];

export const trainingVideos: Project[] = [
    {
        slug: "creating-a-color-palette-in-figma",
        title: "Creating a Color Palette in Figma",
        role: "Training",
        sections: [
            {
                title: "Description",
                content: "In this video, I guide viewers through the process of creating a cohesive color palette in Figma. The tutorial covers selecting base colors, adjusting shades and tints, and organizing the palette for efficient use in design projects. This practical session provides valuable insights into color theory and its application in digital design, helping younger designers to establish visually harmonious and functional color schemes for their work."
            }
        ]
    },
    {
        slug: "utilizing-chart-colors-from-the-design-system",
        title: "Utilizing Chart Colors from the Design System",
        role: "Training",
        sections: [
            {
                title: "Description",
                content: "A short video showing how to take the chart color tokens from the design system and apply them consistently across bar charts, line charts and pie charts in Figma."
            }
        ]
    },
    {
        slug: "using-the-themer-plugin-in-figma",
        title: "Using the Themer Plugin in Figma",
        role: "Training",
        sections: [
            {
                title: "Description",
                content: "Demonstrates how to use the Themer plugin to switch themes across a Figma file quickly. The video covers setting up theme libraries, applying them to components and ensuring token consistency."
            }
        ]
    },
    {
        slug: "understanding-color-theory",
        title: "Understanding Color Theory",
        role: "Training",
        sections: [
            {
                title: "Description",
                content: "Explains basic color theory principles such as hue, value and saturation. The video includes examples of complementary, analogous and triadic color schemes, with suggestions on when to use each."
            }
        ]
    },
    {
        slug: "creating-beautiful-gradients",
        title: "Creating Beautiful Gradients",
        role: "Training",
        sections: [
            {
                title: "Description",
                content: "Focuses on constructing appealing gradients by choosing harmonious hues, managing transitions and avoiding muddy colours."
            }
        ]
    },
    {
        slug: "mastering-midpoints-in-shapes-with-sketch",
        title: "Mastering Midpoints in Shapes with Sketch",
        role: "Training",
        sections: [
            {
                title: "Description",
                content: "Shows how to use Sketch’s midpoint controls to create precise shapes and align elements accurately. The lesson demonstrates practical techniques for vector editing."
            }
        ]
    }
];
