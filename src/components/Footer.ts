import m from "mithril";
import { AppState } from "../pages/Home";

export const Footer: m.Component = {
    view() {
        const quickLinks = [
            { text: 'Home', href: '#!/' },
            { text: 'About', href: '#!/about' },
            { text: 'Portfolio', href: '#!/portfolio' },
            { text: 'Gallery', href: '#!/gallery' }
        ];

        const resources = [
            { text: 'Blog (in future)', href: '#' }
        ];

        const connectLinks = [
            { text: 'Github', href: 'https://github.com/Nbrthx' },
            { text: 'Youtube', href: 'https://youtube.com/@nbrthx' },
            { text: 'Bluesky', href: 'https://bsky.app/profile/nbrthx.my.id' },
            { text: 'VGen', href: 'https://vgen.co/nbrthx' },
            { text: 'Ko-fi', href: 'https://ko-fi.com/nbrthx' },
            { text: 'Itch.io', href: 'https://nbrth.itch.io' }
        ];

        return m('footer', [
            m('.container', [
                m('.footer-content', [
                    m('div', [
                        m('.footer-logo', 'Niberthix'),
                        m('p', [
                            'Creating digital experiences with code and art.',
                            m('br'),
                            'Official domain is ',
                            m('a', { href: 'https://nbrthx.my.id', target: '_blank', rel: 'noopener noreferrer' }, 'nbrthx.my.id'),
                            ' & ',
                            m('a', { href: 'https://nbrthx.neocities.org', target: '_blank', rel: 'noopener noreferrer' }, 'nbrthx.neocities.org'),
                            '.',
                            m('br')
                        ]),
                        m('br'),
                        m('br')
                    ]),
                    m('.footer-links', [
                        m('.footer-links-column', [
                            m('h4', 'QUICK LINKS'),
                            m('ul',
                                quickLinks.map(link =>
                                    m('li',
                                        m('a', {
                                            href: link.href,
                                            onclick: (e: Event) => { e.preventDefault(); AppState.scrollToSection(link.href.substring(1)); }
                                        }, link.text)
                                    )
                                )
                            )
                        ]),
                        m('.footer-links-column', [
                            m('h4', 'RESOURCES'),
                            m('ul',
                                resources.map(resource =>
                                    m('li', m('a', { href: resource.href }, resource.text))
                                )
                            )
                        ]),
                        m('.footer-links-column', [
                            m('h4', 'CONNECT'),
                            m('ul',
                                connectLinks.map(link =>
                                    m('li', m('a', { href: link.href, target: '_blank', rel: 'noopener noreferrer' }, link.text))
                                )
                            )
                        ])
                    ])
                ]),
                m('.copyright', '© 2023 Niberthix. ALL RIGHTS RESERVED. | MADE WITH ❤️ AND PIXELS')
            ])
        ]);
    }
};