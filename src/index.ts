import m from "mithril";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { Galleries } from "./pages/Gallery";
import { MoreAbout } from "./pages/MoreAbout";
import { Blogs } from "./pages/Blog";

const mountNode = document.querySelector("#app");
if (mountNode) {
    m.route(mountNode, '/', {
        '/': Home,
        '/about': MoreAbout,
        '/portfolio': Portfolio,
        '/gallery': Galleries,
        '/blog': Blogs
    });
}
