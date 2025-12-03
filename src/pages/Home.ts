import m from 'mithril';
import "../global.css";

import { Footer } from '../components/Footer';

// Interface untuk TypeScript
interface Project {
  title: string;
  date: string;
  description: string;
  tags: string[];
  links: { text: string; href: string; disabled?: boolean }[];
  media: { type: 'image' | 'video'; src: string; alt: string } | string;
}

interface GalleryCategory {
  title: string;
  items: { src: string; alt: string }[];
}

// State management
export const AppState = {
  pixelFont: true,
  
  toggleFont: () => {
    AppState.pixelFont = !AppState.pixelFont;
    AppState.applyFontChanges();
    m.redraw();
  },
  
  applyFontChanges: () =>  {
    const bodyFont = AppState.pixelFont ? '"pixel body", cursive' : '"Outfit", sans-serif';
    const headFont = AppState.pixelFont ? '"pixel header", cursive' : '"Madimi One", sans-serif';
    // Apply font changes to match original HTML behavior
    document.body.style.fontFamily = bodyFont;
    
    // Update all heading tags
    for(let i = 0; i < document.getElementsByTagName('h1').length; i++) {
      (document.getElementsByTagName('h1')[i] as HTMLElement).style.fontFamily = headFont
    }
    for(let i = 0; i < document.getElementsByTagName('h2').length; i++) {
      (document.getElementsByTagName('h2')[i] as HTMLElement).style.fontFamily = headFont
    }
    for(let i = 0; i < document.getElementsByTagName('h3').length; i++) {
      (document.getElementsByTagName('h3')[i] as HTMLElement).style.fontFamily = headFont
    }
    for(let i = 0; i < document.getElementsByTagName('h4').length; i++) {
      (document.getElementsByTagName('h4')[i] as HTMLElement).style.fontFamily = headFont
    }
    
    // Update buttons
    for(let i = 0; i < document.getElementsByClassName('btn').length; i++) {
      (document.getElementsByClassName('btn')[i] as HTMLElement).style.fontFamily = headFont
    }
    
    // Update logo
    for(let i = 0; i < document.getElementsByClassName('logo').length; i++) {
      (document.getElementsByClassName('logo')[i] as HTMLElement).style.fontFamily = headFont
    }
    
    // Update gallery titles
    for(let i = 0; i < document.getElementsByClassName('gallery-title').length; i++) {
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

// Components
const Header: m.Component = {
  view() {
    const navLinks = [
      { href: '#home', text: 'Home' },
      { href: '#about', text: 'About' },
      { href: '#skills', text: 'Skills' },
      { href: '#projects', text: 'Projects' },
      { href: '#gallery', text: 'Gallery' }
    ];

    return m('header', [
      m('.container', [
        m('nav', [
          m('a.logo', { href: '#', onclick: (e: Event) => { e.preventDefault(); AppState.scrollToSection('home'); } }, 'Niberthix'),
          m('ul.nav-links', 
            navLinks.map(link => 
              m('li', 
                m('a', { 
                  href: link.href, 
                  onclick: (e: Event) => { e.preventDefault(); AppState.scrollToSection(link.href.substring(1)); }
                }, link.text)
              )
            )
          )
        ])
      ])
    ]);
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
        m('a.btn', { href: '#projects', onclick: (e: Event) => { e.preventDefault(); AppState.scrollToSection('projects'); } }, 'VIEW MY WORK')
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
            m('p', m.trust('&nbsp;&nbsp;&nbsp;&nbsp; When I\'m not coding or creating pixel art, you can find me playing games, reading books, watching movies, or studying game design and other things that are correlated to games.'))
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
        tags: ['PHASER.JS', 'PLANCK.JS', 'TYPESCRIPT', '.c COMMISSION','.c PROTOTYPE', '.c IN-PROGRESS'],
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
      m(Skills),
      m(Projects),
      m(Gallery),
      m(Footer)
    ]);
  }
};
