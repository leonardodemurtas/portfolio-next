# Full Text Reference with Site Map

This document contains the site map of Leonardo Demurtas’s portfolio along with the textual content captured from each major section. It is intended as a comprehensive reference for redesign or analysis of the portfolio.

## Home Page

### Hero and Introduction

*AI Product Designer (UX/UI), 10+ years’ hands-on experience. I build reusable patterns into design systems and pair them with AI tools that speed research, guide decisions, and surface key insights. Seven products shipped.*

Most of this work lives in enterprise risk and credit tools, where teams rely on clear interfaces to act on complex data. I focus on AI‑ready design systems, decision‑support dashboards, and workflows that reduce cognitive load instead of adding more charts.

### Contact Card

* [demurtasleonardo@gmail.com](mailto:demurtasleonardo@gmail.com)
* +39 349 3311677
* [www.linkedin.com/in/leonardodemurtas](http://www.linkedin.com/in/leonardodemurtas)

### “I design digital experiences”

Start here. A selection of projects where craft meets strategy. Complex ideas, pared into clear, engaging experiences. Each one aligns user needs with business goals and turns vision into precise, working product.

Featured case studies:

1. **Design System** – Product design / UX (2023–2024)
2. **Credit Portfolio Monitoring** – Product design / UX / Interaction design / UI (2023)

### Projects Archive

“With over a decade in digital design, I’ve worked across a wide mix of projects. Here are a few—early ideas that later grew into larger work, shown here for their outcomes rather than the process behind them.”

Projects listed:

* PowerBiz Company Sheet
* Hackathon DigitalBrain
* QueryBuilder
* ESG Verify Platform
* Music player
* Beacon locator
* Customer experience research
* Commission plan
* Donut worry
* Leadboard
* Home automation system
* Onboarding process

### Training Video Pills

“This section gathers short training videos I created for a mentorship program—quick, practical takes on design theory and tools, meant to help younger designers grow their craft.”

Video pills:

* Creating a Color Palette in Figma
* Utilizing Chart Colors from the Design System
* Using the Themer Plugin in Figma
* Understanding Color Theory
* Creating Beautiful Gradients
* Mastering Midpoints in Shapes with Sketch

### Bit & Pieces

“These are design ideas from my past—studies, trials, and bets I made to stay sharp in a field that never sits still. They shaped my eye.”

(Visual gallery only)

---

## Featured Case Study: Design System

**Title:** *Design System for Enterprise Risk*
**Role:** Product design, UX
**Period:** 2023–2024

### Why we needed a change

The organization was acquired by a larger group and suddenly found itself part of a product suite with seven different tools. Each tool had its own UI conventions, colour palettes, icon sets and behaviours. Developers were shipping pages that looked different from one another; users felt lost and support tickets kept coming in. We needed a unified design system to reduce rework and create a consistent, trustworthy experience across the portfolio.

### Shaping the design system

I led the creation of a design system that could serve multiple business units. We kicked off by auditing existing products, identifying common components and patterns, and then defining a shared language for colours, typography, spacing and interaction states. The system had to be versatile enough to handle data‑heavy dashboards while remaining simple and familiar to our users.

### Laying the groundwork

We broke the work into three tracks: discovery, creation and adoption. The discovery track involved cataloguing every component used by the seven products. The creation track focused on building a scalable token library and atomic components. Adoption included training sessions, documentation and iterative feedback from cross‑functional teams.

### Why Material Design

We chose Material Design as the foundational framework because of its flexibility and widespread recognition. Its component library allowed us to move quickly while maintaining a polished, familiar look. Users were already accustomed to Material guidelines, which reduced the cognitive load and learning curve.

### Rules that made decisions faster

The design system was guided by principles such as:

* **Don’t Make Me Think** – every screen should communicate its purpose immediately.
* **Help the User to Get It Done** – provide prompts and guidance to support users’ goals.
* **One click away** – keep key actions within one click from the primary screen.

To manage the work, we set up Jira boards for tasks, Storybook for living documentation and Confluence for knowledge sharing.

### Building the system backbone

We created a system of design tokens for colours, spacing, typography and elevation. Tokens were grouped into categories and stored in Figma using the new variables feature. Atomic components were built on top of these tokens to form molecules, organisms and templates.

### Micro reusable decisions (Tokens)

We developed token collections for colour and spacing. Colour tokens included primary, secondary, semantic (success/warning/error) and neutral palettes. Spacing tokens were defined in a scale (4, 8, 16, 24, etc.) to ensure rhythm and consistency. These tokens fed directly into Figma variables and our CSS styles.

### Templates that get the work done

We provided ready‑made templates for archive pages, entity views, dashboards and detail modals. These templates accelerated development and ensured new features looked consistent with the rest of the product suite.

### Hands-on adoption sessions

To ensure adoption, we ran regular training sessions with designers and developers. We walked through the design system documentation, explained how to use tokens and components, and addressed feedback from teams adopting the system for new features.

### Rollout and results

* **7 products adopted** – the system was applied across all internal risk tools.
* **70% faster development** – teams could assemble pages from existing components instead of building from scratch.
* **95% fewer off‑spec issues** – designs in Figma matched code in Storybook, reducing the need for corrections.
* **50% less design rework** – designers spent less time fixing inconsistencies.

### Reflection and future directions

The design system introduced consistency and scalability. It also taught me how to align designers and developers around a shared vision. As we continue to expand, we plan to incorporate dark mode, accessibility improvements and more advanced analytics components.

---

## Featured Case Study: Credit Portfolio Monitoring

**Title:** *Credit Portfolio Monitoring*
**Role:** Product design, UX, Interaction design, UI
**Period:** 2023

### Task

The challenge was to redesign a monitoring tool used by loan managers and portfolio managers to track distressed positions. The original product was cluttered and lacked focus, making it hard for users to see which loans needed immediate attention.

### Research

We conducted semi‑structured interviews with nine participants: loan managers, analysts and business heads. We observed their workflows, identified pain points and prioritised needs. Users consistently struggled with information overload and unclear risk indicators.

### Discovery

Three archetypes emerged from our research:

1. **Loan Manager** – wants to quickly spot troubled loans, understand collateral and communicate with lenders.
2. **Portfolio Manager** – needs to see portfolio‑level trends, identify systemic issues and allocate resources.
3. **Head of Business** – cares about high‑level performance and risk exposure across products.

### Personae

Each persona had its own section summarising needs and pain points. Loan managers demanded quick access to risk flags and payment histories. Portfolio managers asked for filtering and sorting tools to isolate segments. Heads of business needed dashboards summarising risk exposure.

### Product Shape

The tool was reorganised into three distinct modules, one for each archetype. Users choose their role when they log in and see a customised dashboard tailored to their needs.

### User Journey & Flow

We mapped the user journey from logging in to completing key tasks (e.g., flagging a loan, reviewing portfolio risk). We designed flows that kept important information on screen while giving users the ability to drill down into loan details.

### First Ideas and Prototypes

Early sketches explored card‑based dashboards and collapsible sidebars. We tested prototypes with users to see how they reacted to summarised vs. detailed views. Several iterations followed as we adjusted layouts and data visualisation.

### Second Wave and Iteration

Based on feedback, we simplified navigation and added more contextual help. We introduced a timeline for each loan, showing the sequence of events leading to the distressed status. We also implemented micro‑interactions to make filtering and sorting more intuitive.

### Results

* The product concept was redesigned from a static report to an interactive dashboard.
* Scope was refocused to show the most critical metrics first.
* Scalable templates were built, enabling the tool to expand to other asset classes.
* A pilot was delivered end‑to‑end, with positive feedback from the risk management team.

### Main Challenges

* **Integration into ongoing projects** – the new design had to be implemented while teams were still working on old features.
* **Conceptual shift** – moving from static lists to interactive dashboards required a change in mindset for users and stakeholders.
* **Strategic redefinition** – we had to align the new product vision with broader company strategy.

---

## Projects Archive (Summaries)

Below are short summaries of the projects listed under the archive. Some pages include detailed case studies similar to the featured projects.

### PowerBiz Company Sheet

A redesign of the company sheet used to evaluate potential prospects and monitor existing customers. The old sheet was cluttered and confusing. The new design surfaces key metrics (liquidity, solvency, growth) through score indicators and AI‑powered suggestions. Sections include: Understanding PowerBiz, Role and Challenge, Transforming a Bottleneck, Use Cases (Evaluating a Potential Prospect & Monitoring Customer’s Health), Results, Key Features, Video Prototype and Key Takeaways.

### Hackathon DigitalBrain

A 48‑hour hackathon challenge to improve a data‑analysis platform. The project involved rethinking the model configuration interface, simplifying the definition of pools and adding AI guidance to help marketing managers set up campaigns. Sections include: Understanding DigitalBrain, Role and Challenge, Brainstorming and Solutions, Prototyping the Solution, Perimeter Calibration, Analysis Results, Video, Key Takeaways and Moving Forward.

### Other Projects

Due to time constraints, the following projects are only listed by name. They each have their own Notion page with varying levels of detail:

* **QueryBuilder** – a tool for building complex queries through a visual interface.
* **ESG Verify Platform** – platform to verify environmental, social and governance data.
* **Music player** – design of a minimalistic music player app.
* **Beacon locator** – interface for locating beacons in a physical environment.
* **Customer experience research** – research insights and recommendations.
* **Commission plan** – tool for visualising and generating commission plans.
* **Donut worry** – playful app concept based on doughnut bakery orders.
* **Leadboard** – gamified leaderboard to encourage engagement.
* **Home automation system** – interface for controlling smart home devices.
* **Onboarding process** – streamlined onboarding flow for new users.

---

## Training Video Pills (Text)

Each training pill includes a brief description of the video and key learning points.

### Creating a Color Palette in Figma

“In this video, I guide viewers through the process of creating a cohesive color palette in Figma. The tutorial covers selecting base colors, adjusting shades and tints, and organizing the palette for efficient use in design projects. This practical session provides valuable insights into color theory and its application in digital design, helping younger designers to establish visually harmonious and functional color schemes for their work.”

### Utilizing Chart Colors from the Design System

A short video showing how to take the chart color tokens from the design system and apply them consistently across bar charts, line charts and pie charts in Figma.

### Using the Themer Plugin in Figma

Demonstrates how to use the Themer plugin to switch themes across a Figma file quickly. The video covers setting up theme libraries, applying them to components and ensuring token consistency.

### Understanding Color Theory

Explains basic color theory principles such as hue, value and saturation. The video includes examples of complementary, analogous and triadic color schemes, with suggestions on when to use each.

### Creating Beautiful Gradients

Focuses on constructing appealing gradients by choosing harmonious hues, managing transitions and avoiding muddy colours.

### Mastering Midpoints in Shapes with Sketch

Shows how to use Sketch’s midpoint controls to create precise shapes and align elements accurately. The lesson demonstrates practical techniques for vector editing.

---

## Bit & Pieces

This section is a visual scrapbook of design experiments and explorations. It does not contain textual explanations; instead, it showcases a grid of images. Each image represents a past study, trial or bet made to explore new ideas and stay sharp.

---

## Conclusion

This document summarises the textual content of Leonardo’s portfolio. It includes the site map and extracts from the key pages. The case studies highlight Leonardo’s experience in building design systems and complex enterprise tools, while the archive and video sections demonstrate breadth of skills and commitment to mentorship.

---


