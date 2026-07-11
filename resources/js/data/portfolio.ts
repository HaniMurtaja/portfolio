/**
 * Central content source for the portfolio. Editing copy, projects, skills or
 * experience here updates every section — components stay presentational.
 */

export interface NavLink {
    id: string;
    label: string;
}

export interface SkillGroup {
    category: string;
    icon: string;
    skills: string[];
}

export interface Service {
    title: string;
    description: string;
    icon: string;
}

export interface Project {
    name: string;
    description: string;
    url: string;
    tech: string[];
    tag: 'SaaS' | 'Platform' | 'Marketplace' | 'Web App' | 'Corporate';
    accent: string;
}

export interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    description: string;
    highlights: string[];
}

export interface Stat {
    label: string;
    value: number;
    suffix: string;
}

export interface SocialLink {
    label: string;
    href: string;
    icon: string;
}

export const profile = {
    firstName: 'Hani',
    lastName: 'Murtaja',
    fullName: 'Hani Murtaja',
    roles: [
        'Backend Software Engineer',
        'Laravel Expert',
        'PHP Developer',
        'Vue.js Developer',
        'REST API Specialist',
    ],
    tagline: 'Backend Software Engineer',
    email: 'mortajahany@gmail.com',
    phone: '+201096591568',
    location: 'Remote · Open to relocation',
    resume: '/resume/Hani-Murtaja-Resume.pdf',
    bio: [
        `I'm a Backend Software Engineer with 5+ years of experience designing and shipping scalable web applications with PHP, Laravel and Vue.js. I specialize in clean backend architecture, robust REST APIs, and the database design that keeps SaaS platforms fast under load.`,
        `Across product teams and startup incubators I've led backend development, built admin dashboards with role-based access, integrated third-party services, and hardened applications for security and performance — always shipping with Agile discipline and a test-driven mindset.`,
    ],
};

export const navLinks: NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
];

export const stats: Stat[] = [
    { label: 'Years of Experience', value: 5, suffix: '+' },
    { label: 'Projects Delivered', value: 30, suffix: '+' },
    { label: 'REST APIs Built', value: 50, suffix: '+' },
    { label: 'Happy Clients', value: 15, suffix: '+' },
];

export const skillGroups: SkillGroup[] = [
    {
        category: 'Backend',
        icon: 'Server',
        skills: [
            'PHP', 'Laravel', 'REST APIs', 'MySQL', 'PostgreSQL',
            'Redis', 'Queues', 'Caching', 'Authentication', 'JWT',
            'Sanctum', 'API Integrations', 'AWS', 'Git', 'GitHub',
        ],
    },
    {
        category: 'Frontend',
        icon: 'Palette',
        skills: [
            'Vue.js', 'Nuxt', 'JavaScript', 'TypeScript',
            'TailwindCSS', 'HTML', 'CSS',
        ],
    },
    {
        category: 'Testing',
        icon: 'FlaskConical',
        skills: [
            'PHPUnit', 'Feature Testing', 'API Testing', 'TDD',
        ],
    },
];

export const services: Service[] = [
    { title: 'Web Development', description: 'End-to-end web applications built on modern Laravel and Vue foundations that scale with your product.', icon: 'Globe' },
    { title: 'Backend Development', description: 'Robust, maintainable server-side systems with clean architecture and solid domain modelling.', icon: 'Server' },
    { title: 'RESTful API Development', description: 'Well-documented, versioned REST APIs with authentication, rate limiting and predictable contracts.', icon: 'Webhook' },
    { title: 'Performance Optimization', description: 'Query tuning, caching layers and queue offloading that cut response times and infrastructure cost.', icon: 'Gauge' },
    { title: 'Database Design', description: 'Normalized, index-aware schemas for MySQL and PostgreSQL that stay fast as your data grows.', icon: 'Database' },
    { title: 'Testing', description: 'Feature and API test suites with PHPUnit so you can ship confidently and refactor without fear.', icon: 'FlaskConical' },
    { title: 'API Integration', description: 'Reliable integrations with payment gateways, messaging and third-party services your product depends on.', icon: 'Plug' },
    { title: 'Laravel Consultation', description: 'Architecture reviews, code audits and mentoring to level up your team and codebase.', icon: 'Lightbulb' },
];

export const projects: Project[] = [
    { name: 'PostRed', description: 'Audio production platform with a Laravel API backend and a server-rendered Nuxt frontend, plus a role-based admin dashboard.', url: 'https://www.postredaudio.com/', tech: ['Laravel', 'Nuxt', 'REST API', 'MySQL'], tag: 'Platform', accent: 'from-rose-500 to-orange-400' },
    { name: 'Patrux', description: 'SaaS product with a scalable Laravel backend, authentication and a clean, modern Vue interface.', url: 'https://patrux.coktilat.com/', tech: ['Laravel', 'Vue.js', 'REST API'], tag: 'SaaS', accent: 'from-indigo-500 to-violet-500' },
    { name: 'Nabeeh', description: 'On-demand services application backed by Laravel APIs with dashboards for operations and users.', url: 'http://nabeehapp.com/', tech: ['Laravel', 'REST API', 'MySQL'], tag: 'Web App', accent: 'from-emerald-500 to-teal-400' },
    { name: 'Coktilat', description: 'Product ecosystem and web presence built on Laravel with performance and SEO in mind.', url: 'https://coktilat.com/', tech: ['Laravel', 'Vue.js', 'TailwindCSS'], tag: 'Platform', accent: 'from-cyan-500 to-blue-500' },
    { name: 'Kafu', description: 'Recruitment and jobs marketplace connecting candidates and employers, powered by a Laravel REST API.', url: 'https://kafu.jobs/', tech: ['Laravel', 'REST API', 'MySQL'], tag: 'Marketplace', accent: 'from-fuchsia-500 to-purple-500' },
    { name: 'Drive7', description: 'Company platform with a backend dashboard to manage website content and users, built with PHP & Laravel.', url: 'https://drive7.com/', tech: ['PHP', 'Laravel', 'Vue.js'], tag: 'Corporate', accent: 'from-amber-500 to-yellow-400' },
    { name: 'Casita', description: 'Hospitality and property web platform delivering a polished, responsive booking experience.', url: 'https://www.casita.com/', tech: ['Laravel', 'REST API', 'Vue.js'], tag: 'Platform', accent: 'from-sky-500 to-indigo-500' },
];

export const experiences: ExperienceItem[] = [
    {
        company: 'PostRed',
        role: 'Full Stack Engineer',
        period: 'Apr 2025 — Present',
        description: 'Building an audio-production platform end to end.',
        highlights: [
            'Developed a robust Laravel backend with authentication and REST APIs.',
            'Built a dynamic Nuxt frontend with server-side rendering for performance.',
            'Maintained a role-based admin dashboard streamlining user management.',
        ],
    },
    {
        company: 'Drive7',
        role: 'Laravel / Vue Developer',
        period: 'Jan 2024 — Jan 2025',
        description: 'Backend and web platform for a growing company.',
        highlights: [
            'Built the backend dashboard to control website content and users with PHP & Laravel.',
            'Collaborated on deploying the company website using Agile methodologies.',
            'Implemented security compliance measures, reducing security incidents by 20%.',
        ],
    },
    {
        company: 'UCAS Technology Incubator',
        role: 'Back End Developer',
        period: 'Aug 2021 — Jul 2023',
        description: 'Led backend development for an incubated platform.',
        highlights: [
            'Led the team building a platform for translators, increasing productivity by 25%.',
            'Collaborated with design on website screens and the admin dashboard.',
            'Enhanced frontend functionality with vanilla JavaScript.',
        ],
    },
    {
        company: 'Yemen Tadawul Co.',
        role: 'Back End Developer',
        period: 'Aug 2021 — Jul 2022',
        description: 'Backend lead for healthcare-focused products.',
        highlights: [
            'Led the backend team with Laravel and REST APIs, improving system performance.',
            'Built the PillBank website and dashboard for medication management.',
            'Implemented security compliance, reducing security incidents by 25%.',
        ],
    },
    {
        company: 'ABest StartUP',
        role: 'Back End Developer',
        period: 'Aug 2019 — Jul 2021',
        description: 'Early backend role shipping modern web applications.',
        highlights: [
            'Developed modern applications with PHP Laravel and Vue.js.',
            'Wrote maintainable code with a team of expert engineers.',
            'Leveraged MySQL and RESTful APIs for seamless data management.',
        ],
    },
    {
        company: 'Gaza Sky Geeks',
        role: 'Freelance Academy',
        period: 'Oct 2019 — Mar 2020',
        description: 'Freelance training and delivery program.',
        highlights: [
            'Delivered multiple PHP & Laravel projects for the freelancing community.',
            'Collaborated with diverse teams, delivering projects on time.',
            'Built a strong foundation for a backend engineering career.',
        ],
    },
];

export const socialLinks: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/HaniMurtaja', icon: 'Github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hanimurtaja/', icon: 'Linkedin' },
    { label: 'Email', href: 'mailto:mortajahany@gmail.com', icon: 'Mail' },
    { label: 'Phone', href: 'tel:+201096591568', icon: 'Phone' },
];
