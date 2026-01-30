export type Project = {
    title: string
    description: string
    details: string
    link: string
}

export const projects: Project[] = [
    {
        title: "React Personal Portfolio",
        description: "Rush workshop for designing a personal portfolio.",
        details: "React + vite + tailwindcss + GitHub Pages",
        link: "#",
    },
    {
        title: "AI Agent",
        description: "Personalized AI that responds to prompts about my schedule.",
        details: "Ollama + OpenWebUI + Qdrant",
        link: "#",
    },
    {
        title: "Programming Languages",
        description: "Wrote python code to allow a Spot robot to play fetch using CV.",
        details: "Python + HTML + Java",
        link: "#",
    },
];
