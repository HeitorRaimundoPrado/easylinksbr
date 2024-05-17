
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function HowToUse() {
  return (
    <>
      <main className='howto_main'>
        <div className='howto_logo'>
          <img src="/favicon_io/favicon-32x32.png" alt="icon image" />
          <h2>Easylink</h2>
        </div>
        <section>
          <h2>Como Usar</h2>
          <ul>
            <li>
              1- Localize a caixa de texto ou campo de entrada identificado como "Cole sua URL aqui".
            </li>
            <li>
              2- Copie a URL longa que você deseja encurtar da barra de endereços do seu navegador.
            </li>
            <li>
              3- Cole a URL longa na caixa de texto ou campo de entrada designado no site.
            </li>
            <li>
              4- Após colar a URL longa, clique no botão "Encurtar".
            </li>
            <li>
              5- Uma vez concluído o processo, um link encurtado será gerado.
            </li>
            <li>
              6- Copie o link encurtado fornecido pelo site.
            </li>
            <li>
              7- Agora você pode usar o link encurtado para compartilhar, postar ou qualquer outro propósito.
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
