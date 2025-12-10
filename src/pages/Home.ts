import m from 'mithril';
import "../global.css";

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

// State management
export const AppState = {
    pixelFont: true,

    toggleFont: () => {
        AppState.pixelFont = !AppState.pixelFont;
        AppState.applyFontChanges();
        m.redraw();
    },

    applyFontChanges: () => {
        const bodyFont = AppState.pixelFont ? '"pixel body", cursive' : '"Outfit", sans-serif';
        const headFont = AppState.pixelFont ? '"pixel header", cursive' : '"Madimi One", sans-serif';
        // Apply font changes to match original HTML behavior
        document.body.style.fontFamily = bodyFont;

        // Update all heading tags
        for (let i = 0; i < document.getElementsByTagName('h1').length; i++) {
            (document.getElementsByTagName('h1')[i] as HTMLElement).style.fontFamily = headFont
        }
        for (let i = 0; i < document.getElementsByTagName('h2').length; i++) {
            (document.getElementsByTagName('h2')[i] as HTMLElement).style.fontFamily = headFont
        }
        for (let i = 0; i < document.getElementsByTagName('h3').length; i++) {
            (document.getElementsByTagName('h3')[i] as HTMLElement).style.fontFamily = headFont
        }
        for (let i = 0; i < document.getElementsByTagName('h4').length; i++) {
            (document.getElementsByTagName('h4')[i] as HTMLElement).style.fontFamily = headFont
        }

        // Update buttons
        for (let i = 0; i < document.getElementsByClassName('btn').length; i++) {
            (document.getElementsByClassName('btn')[i] as HTMLElement).style.fontFamily = headFont
        }

        // Update logo
        for (let i = 0; i < document.getElementsByClassName('logo').length; i++) {
            (document.getElementsByClassName('logo')[i] as HTMLElement).style.fontFamily = headFont
        }

        // Update gallery titles
        for (let i = 0; i < document.getElementsByClassName('gallery-title').length; i++) {
            (document.getElementsByClassName('gallery-title')[i] as HTMLElement).style.fontFamily = headFont
        }
    },

    // Smooth scroll function
    scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }
};

const Hero: m.Component = {
    view() {
        return m('section.hero', { id: 'home' }, [
            m('.container', [
                m('img.bg', { src: '/page-image/bg.gif' }),
                m('h1', [
                    'HI, I\'M A ',
                    m('span.highlight', 'WEB DEVELOPER'),
                    ' & ',
                    m('span.highlight', 'PIXEL ARTIST')
                ]),
                m('p', 'I create pixel art, games, and interactive web experiences. Passionate about retro aesthetics and modern technologies.'),
                m('a.btn', { href: '/#!/portfolio' }, 'VIEW MY WORK')
                // m('br'),
                // m('button.btn', { id: 'changefont', onclick: () => AppState.toggleFont() }, 'CHANGE FONT')
            ])
        ]);
    }
};

const About: m.Component = {
    view() {
        return m('section.section', { id: 'about' }, [
            m('.container', [
                m('h2.section-title', 'About Me'),
                m('.about-content', [
                    m('.about-text', [
                        m('p', m.trust('&nbsp;&nbsp;&nbsp;&nbsp; Hellow! I\'m a passionate web developer (especially for games) and pixel artist with a love for games and modern web technologies. I started my journey in programming at a young age and have been continuously learning and evolving ever since.')),
                        m('p', m.trust('&nbsp;&nbsp;&nbsp;&nbsp; My focus is on developing online games and exploring decentralized technologies for future large-scale projects. I\'m always looking for opportunities to collaborate with creative individuals, especially pixel artists and other developers.')),
                        m('p', m.trust('&nbsp;&nbsp;&nbsp;&nbsp; When I\'m not coding or creating pixel art, you can find me playing games, reading books, watching movies, or studying game design and other things that are correlated to games.')),
                        m('br'),
                        m('a.btn', { href: '/#!/about' }, 'MORE ABOUT ME')
                    ]),
                    m('.about-image', [
                        m('.pixel-art-container', [
                            m('img', { src: '/page-image/profile3.gif', alt: 'Avatar', style: 'width:100%; height:100%; object-fit:cover;' }),
                            m('.pixel-corner.pixel-corner-tl'),
                            m('.pixel-corner.pixel-corner-tr'),
                            m('.pixel-corner.pixel-corner-bl'),
                            m('.pixel-corner.pixel-corner-br')
                        ]),
                        m('p', { style: 'margin-top: 1rem;' }, 'Niberthix')
                    ])
                ])
            ])
        ]);
    }
};



// Main App Component
export const Home: m.Component = {
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
            m(Hero),
            m(About),
            m(Footer)
        ]);
    }
};
