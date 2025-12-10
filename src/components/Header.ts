import m from "mithril";

// Components
export const Header: m.Component = {
    view() {
        const navLinks = [
            { href: '#!/about', text: 'About' },
            { href: '#!/portfolio', text: 'Portfolio' },
            { href: '#!/gallery', text: 'Gallery' },
            { href: '#!/blog', text: 'Blog' }
        ];

        return m('header', [
            m('.container', [
                m('nav', [
                    m('a.logo', { href: '#!/' }, 'Niberthix'),
                    m('ul.nav-links',
                        navLinks.map(link =>
                            m('li',
                                m('a', {
                                    href: link.href
                                }, link.text)
                            )
                        )
                    )
                ])
            ])
        ]);
    }
};