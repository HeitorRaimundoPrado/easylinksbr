import { HiOutlineLockClosed } from 'react-icons/hi2'
import { HiOutlineLink } from 'react-icons/hi2'
import { HiOutlineStar } from 'react-icons/hi2'
import { HiOutlineFlag } from 'react-icons/hi2'

export default function Section() {
  return (
    <main className='main_section'>
      <h1>Por que usar a Easylink</h1>

      <div className="responsive_container">
        <div className="main_info_container">
          <HiOutlineStar className='icon' />
          <div>
            <h2>Fácil e intuitivo</h2>
            <p>
              Transforme seus URLs longos em links curtos e compartilháveis em apenas alguns passos simples. Copie e cole seu link original e obtenha um link compacto em instantes.
            </p>
          </div>
        </div>
        <div className="main_info_container">
          <HiOutlineLockClosed className='icon' />
          <div>
            <h2>Confiável</h2>
            <p>
              Nossa plataforma é confiável e estável, garantindo uma experiência tranquila ao encurtar seus links. Valorizamos a confiança dos usuários e trabalhamos para oferecer um serviço confiável.
            </p>
          </div>
        </div>
        <div className="main_info_container">
          <HiOutlineLink className='icon' />
          <div>
            <h2>Links seguros</h2>
            <p>
              Mantenha seus links protegidos com medidas avançadas de segurança. Nossa plataforma garante a privacidade dos seus links e oferece opções de personalização e rastreamento para uma experiência segura.
            </p>
          </div>
        </div>
        <div className="main_info_container">
          <HiOutlineFlag className='icon' />
          <div>
            <h2>Objetivo</h2>
            <p>
              Nossa missão é simplificar o compartilhamento de links, transformando URLs longos em links curtos e fáceis de lembrar. Facilitando o compartilhamento de conteúdo em diversas plataformas.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
