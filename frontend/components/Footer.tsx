
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='footer_container'>

      <div className='img_container'>
        <img src="/favicon_io/favicon-32x32.png" alt="icon image" />
        <h2>Easylinks</h2>
      </div>

      <div>
        <h2>Páginas</h2>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/pages/inspect">Inspecionar URL</Link></li>
        </ul>
      </div>

      <div>
        <h2>Contato</h2>
        <ul>

          <li>
            <a href="https://github.com/HeitorRaimundoPrado" rel="noreferrer" target='_blank'>GitHub Heitor</a>
          </li>
          <li>
            <a href="https://github.com/pedrop-dev" rel="noreferrer" target='_blank'>GitHub Pedro</a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className='h2_sobre'>Sobre</h2>
        <ul>
          <li>
            <Link href="/pages/how-to-use">
              Como usar
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
