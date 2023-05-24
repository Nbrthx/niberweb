class Router {
  constructor(root, routes) {
    this.root = root
    this.routes = routes
  }
  async loadContent(url) {
    if(!url) this.root.innerHTML = this.routes.err404 || "Error 404 not found"
    else {
      this.root.innerHTML = await (await fetch(url)).text()

      const script = document.createElement("script")
      script.setAttribute('type', 'module')
      script.innerHTML = this.root.childNodes[0].innerHTML
      this.root.childNodes[0].remove()
      
      const script2 = document.createElement("script")
      script2.innerHTML = "function Q(s){return document.querySelector(s)}"
      
      this.root.appendChild(script2)
      this.root.appendChild(script)
    }
  }
  route() {
    const path = window.location.pathname
    this.loadContent(this.routes[path])
  }
}

export default Router