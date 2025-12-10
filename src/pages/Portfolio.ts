import { AppState } from "./Home";

import m from 'mithril';
import "../global.css";

import { Footer } from '../components/Footer';
import { Header } from "../components/Header";

// Interface untuk TypeScript
interface Project {
    title: string;
    date: string;
    description: string;
    tags: string[];
    links: { text: string; href: string; disabled?: boolean }[];
    media: { type: 'image' | 'video'; src: string; alt: string } | string;
}

const Skills: m.Component = {
    view() {
        const skillCategories = [
            {
                title: 'Web Design',
                skills: ['HTML5', 'CSS3 & Sass', 'TypeScript', 'JavaScript', 'Mithril.js', 'React.js', 'Responsive Design']
            },
            {
                title: 'Web Backend',
                skills: ['Node.js', 'Express.js', 'Socket.io', 'Ethers.js', 'RESTful APIs', 'Cryptography']
            },
            {
                title: 'Game Development',
                skills: ['Phaser.js', 'Godot Engine', 'GDScript', 'Java', 'Pixel Art']
            },
            {
                title: 'Database & Tools',
                skills: ['MySQL', 'PostgreSQL', 'Git & Github', 'VS Code', 'Aseprite']
            }
        ];

        return m('section.section.skills', { id: 'skills' }, [
            m('.container', [
                m('h2.section-title', 'Skills & Technologies'),
                m('.skills-grid',
                    skillCategories.map(category =>
                        m('.skill-category', [
                            m('h3', category.title),
                            m('ul.skill-list',
                                category.skills.map(skill => m('li', skill))
                            )
                        ])
                    )
                )
            ])
        ]);
    }
};

const Projects: m.Component = {
    view() {
        const projects: Project[] = [
            {
                title: 'Cloud Storage Application',
                date: '19 APRIL 2020',
                description: 'A Google Drive-like cloud storage application built with PHP and user authentication. But I lost the project code before I knew GitHub. Cause I made entire code on my old phone.',
                tags: ['PHP', 'MYSQL', 'JAVASCRIPT'],
                links: [{ text: 'NOT FOUND', href: '#', disabled: true }],
                media: { type: 'image', src: '/page-image/ncloud.png', alt: 'NCloud' }
            },
            {
                title: 'Raveling, Plugin for Minecraft Server',
                date: '2 AUGUST 2021',
                description: 'Build your own MMORPG server with Raveling plugin. But it\'s has been a long time since I touched it. Have 300+ download in that time.',
                tags: ['JAVA', 'SPIGOT'],
                links: [{ text: 'SPIGOTMC', href: 'https://www.spigotmc.org/resources/raveling-mmorpg-plugin.94929/' }],
                media: { type: 'image', src: '/page-image/raveling.png', alt: 'Raveling' }
            },
            {
                title: '2D Platformer Game',
                date: '27 DESEMBER 2021',
                description: 'I tried to make platformer game for the first time in Godot. I make it in 5 days.',
                tags: ['GODOT ENGINE', 'GAME DESIGN', '.c PROTOTYPE'],
                links: [{ text: 'ITCH.IO', href: 'https://nbrth.itch.io/platgame' }],
                media: { type: 'video', src: 'https://youtube.com/embed/NA4XvV3uTY4', alt: 'Platformer Game' }
            },
            {
                title: 'Chat Application',
                date: '9 JULY 2022',
                description: 'An attempt to make a messaging application that implements some digital signature for authentication.',
                tags: ['MITHRIL.JS', 'SOCKET.IO', 'NODE.JS', 'CRYPTOGRAPHY'],
                links: [{ text: 'GITHUB', href: 'https://github.com/Nbrthx/syscers' }],
                media: { type: 'image', src: '/page-image/chatapp.png', alt: 'Chat Application' }
            },
            {
                title: 'Water Conservation RPG',
                date: '19 MARCH 2024',
                description: 'An educational RPG game focused on teaching water conservation principles through engaging gameplay.',
                tags: ['GODOT ENGINE', 'GAME DESIGN', '.c PROTOTYPE'],
                links: [{ text: 'ITCH.IO', href: 'https://nbrth.itch.io/asura-war' }],
                media: { type: 'video', src: 'https://youtube.com/embed/4E25lTZWNrQ', alt: 'Water Conservation RPG' }
            },
            {
                title: 'Medalist in Research Competition with Game',
                date: '8 NOVEMBER 2024',
                description: 'Developed an educational MMORPG game focused on the revitalization and preservation of "Pitutur Luhur" Javanese principles through engaging gameplay.',
                tags: ['PHASER.JS', 'SOCKET.IO', 'JAVASCRIPT', 'NODE.JS', '.c PROTOTYPE'],
                links: [
                    { text: 'HOSTING EXPIRED', href: '#', disabled: true },
                    { text: 'GITHUB', href: 'https://github.com/Nbrthx/starter-micro-api' }
                ],
                media: { type: 'video', src: 'https://youtube.com/embed/D3FUn0zy5Ps', alt: 'Research Competition Game' }
            },
            {
                title: 'Online Card Collection Game',
                date: '2 DECEMBER 2024',
                description: 'With a Bible theme, collect your cards and engage in PVP to climb the leaderboard.',
                tags: ['PHASER.JS', 'SOCKET.IO', 'TYPESCRIPT', '.c COMMISSION', '.c UNCLEAR CONTINUATION'],
                links: [{ text: 'NOT ACCESSIBLE', href: '#', disabled: true }],
                media: { type: 'image', src: '/page-image/ss-divine-quest.png', alt: 'Divine Quest' }
            },
            {
                title: 'Story-Heavy MMORPG and Ecosystem',
                date: '1 MAY 2025',
                description: 'Wanna hear my story? I will be telling all the stories from my head, my ideas, my experiences, and my journey into this game. It\'s my ultimate project.',
                tags: ['PHASER.JS', 'PLANCK.JS', 'SOCKET.IO', 'TYPESCRIPT', '.c BETA LIMITED', '.c IN-PROGRESS'],
                links: [{ text: 'DISCORD', href: 'https://discord.gg/BsMEbsU655' }],
                media: { type: 'video', src: 'https://youtube.com/embed/Zrq8wln69Fg', alt: 'MMORPG Project' }
            },
            {
                title: 'Physics Simulation of Frictional Force',
                date: '22 JUNE 2025',
                description: 'An interactive learning media about physics. Simulating the physics of frictional force.',
                tags: ['PHASER.JS', 'PLANCK.JS', 'TYPESCRIPT', '.c COMMISSION', '.c PROTOTYPE', '.c IN-PROGRESS'],
                links: [
                    { text: 'TRY IT!', href: 'https://physics-simulation-chi.vercel.app/' },
                    { text: 'GITHUB', href: 'https://github.com/Nbrthx/physics-simulation' }
                ],
                media: { type: 'image', src: '/page-image/physics-simulation.png', alt: 'Physics Simulation' }
            }
        ];

        return m('section.section', { id: 'projects' }, [
            m('.container', [
                m('h2.section-title', 'My Projects'),
                m('.projects-grid',
                    projects.map(project =>
                        m('.project-card', [
                            m('.project-img',
                                project.media && typeof project.media !== 'string' ? (
                                    project.media.type === 'video' ?
                                        m('iframe', {
                                            src: project.media.src,
                                            title: 'YouTube video player',
                                            frameborder: '0',
                                            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
                                            style: 'width: 100%; height: 100%;',
                                            allowfullscreen: true
                                        }) :
                                        m('img', {
                                            src: project.media.src,
                                            alt: project.media.alt,
                                            style: 'width:100%; height:100%; object-fit:cover;'
                                        })
                                ) : m('div.project-img', project.media)
                            ),
                            m('.project-content', [
                                m('h3', project.title),
                                m('p', project.date),
                                m('p', project.description),
                                m('.project-tags',
                                    project.tags.map(tag =>
                                        m('span', {
                                            class: tag.includes('.c ') ? 'tag tag-caution' : 'tag'
                                        }, tag.replace('.c ', ''))
                                    )
                                ),
                                project.links.map(link =>
                                    m('a', {
                                        class: `btn ${link.disabled ? 'btn-disabled' : ''}`,
                                        href: link.href,
                                        ...(link.disabled ? {} : { target: '_blank', rel: 'noopener noreferrer' })
                                    }, link.text)
                                )
                            ])
                        ])
                    )
                )
            ])
        ]);
    }
};

// Main App Component
export const Portfolio: m.Component = {
    oncreate() {
        // Apply initial font settings
        AppState.applyFontChanges();

        // Add pixel corners to project cards after DOM creation
        setTimeout(() => {
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                const corners = ['tl', 'tr', 'bl', 'br'];
                corners.forEach(corner => {
                    const pixel = document.createElement('div');
                    pixel.className = `pixel-corner pixel-corner-${corner}`;
                    card.appendChild(pixel);
                });
            });
        }, 100);
    },

    view() {
        return m('div', [
            m(Header),
            m(Skills),
            m(Projects),
            m(Footer)
        ]);
    }
};