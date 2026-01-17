
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p><strong>FakeStore</strong></p>
        <p>Tienda virtual desarrollada con JavaScript y FakeStore API</p>

        <p class="small">
          Desarrollado por: <strong>María Alejandra G.</strong>
        </p>

        <small>© 2025 FakeStore - Proyecto académico</small>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
