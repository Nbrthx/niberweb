import m from 'mithril';
import "../global.css";

import { Footer } from '../components/Footer';
import { AppState } from './Home';
import { Header } from '../components/Header';


interface GalleryCategory {
    title: string;
    items: { src: string; alt: string }[];
}


const Gallery: m.Component = {
    view() {
        const galleryCategories: GalleryCategory[] = [
            {
                title: '- Self Taught / Original Character Pixel Art',
                items: [
                    { src: '/gallery/mountain-view.png', alt: 'Mountain View' },
                    { src: '/gallery/oc-girl-1.png', alt: 'Original Character Girl 1' },
                    { src: '/gallery/oc-girl-2.png', alt: 'Original Character Girl 2' },
                    { src: '/gallery/oc-girl-3.png', alt: 'Original Character Girl 3' },
                    { src: '/gallery/oc-javanese-boy.png', alt: 'Original Character Javanese Boy' }
                ]
            },
            {
                title: '- Pixel Fan Art',
                items: [
                    { src: '/gallery/glamrock-freddys.png', alt: 'Glamrock Freddy\'s' },
                    { src: '/gallery/toriel.png', alt: 'Toriel' },
                    { src: '/gallery/ralsei.png', alt: 'Ralsei' },
                    { src: '/gallery/hina.png', alt: 'Hina' },
                    { src: '/gallery/zoey.png', alt: 'Zoey' }
                ]
            },
            {
                title: '- Others',
                items: [
                    { src: '/gallery/brick-bg.png', alt: 'Niberthix' }
                ]
            }
        ];

        return m('section.section.gallery', { id: 'gallery' }, [
            m('.container', [
                m('h2.section-title', 'Art Gallery'),
                galleryCategories.map(category => [
                    m('p.gallery-title', category.title),
                    m('.gallery-grid',
                        category.items.map(item =>
                            m('.gallery-card',
                                m('img', {
                                    src: item.src,
                                    alt: item.alt,
                                    style: 'width:100%; height:100%; object-fit:cover;'
                                })
                            )
                        )
                    )
                ]),
                m('p.gallery-title', '- Non Pixel Art'),
                m('a.btn', {
                    href: 'https://instagram.com/nbrthx',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                }, 'VISIT INSTAGRAM')
            ])
        ]);
    }
};

// Main App Component
export const Galleries: m.Component = {
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
            m(Gallery),
            m(Footer)
        ]);
    }
};