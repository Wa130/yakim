class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav>
        <div id="navcontainer">
        <div id="navlistholder">
        <a href="index.html">
        <img class="mainicon" src="YakimIcon.png" alt="Lion Icon" width="70rem" height="70rem">
        </a>
        <ul>
            <li><a id="nav_default" href="index.html">Home</a></li>
            <li><a href="contact.html">Contact Us</a></li>
        </ul>
        </div>
        </div>
        </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);



function highlightActive() {
    const ACTIVE_CLASS = "nav_active";

	const current = window.location.pathname;

	document.querySelectorAll("nav-bar ul li a").forEach(link => {
		if (new URL(link.href).pathname === current) {
		    link.id = ACTIVE_CLASS;
		}
	});

    if (!current.endsWith(".html")) {
        document.getElementById("nav_default").id = ACTIVE_CLASS;
    }
}


document.addEventListener("DOMContentLoaded", function () {
    highlightActive();
    document.getElementsByTagName('head')[0].innerHTML += `<link rel="icon" type="image/x-icon" href="PlainIcon.ico"></link>`;
});
