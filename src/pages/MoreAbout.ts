import { AppState } from "./Home";

import m from 'mithril';
import "../global.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const About: m.Component = {
    view() {
        return m('section.hero', { id: 'home' }, [
            m('.container', [
                m('p', 'Still in progress...')
            ])
        ]);
    }
};

export const MoreAbout: m.Component = {
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
            m(About),
            m(Footer)
        ]);
    }
};