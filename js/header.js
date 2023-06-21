const headerContent = `<div class="banner">
				<a href="index.html"><img src="images/Cover.png" alt="Cwmaman Music Festival"></a>
			</div>
		<nav>
			<ul>
				<li><a href="index.html">Home</a></li>
				<li><a href="lineup.html">Lineup</a></li>
				<li><a href="programme.html">Programme</a></li>
				<li><a href="map.html">Map</a></li>
				<li><a href="sponsors.html">Sponsors</a></li>
			</ul>
		</nav>
		<br>
		<nav>
			<ul>
				<li><a href="changes.html">Last Minute Changes</a></li>
			</ul>
		</nav>`;

class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = headerContent;
  }
}

customElements.define("header-component", Header);