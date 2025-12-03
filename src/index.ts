import m from "mithril";
import { Home } from "./pages/Home";

const mountNode = document.querySelector("#app");
if (mountNode) {
  m.route(mountNode, '/', {
    '/': Home
  });
}
