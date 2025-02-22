class CyclingHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
       <nav
      class="navbar navbar-expand-lg bg-dark bg-body-tertiary fixed-top"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="./index.html">Cycling</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > 
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./index.html"
                >Home</a
              >
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./road.html">Road</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./track.html">Track</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./cyclocross.html">Cyclocross</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./mountainbike.html">MTB</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="./about.html">About</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./gallery.html">Gallery</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;
  }
}

customElements.define("nav-component", CyclingHeader);
