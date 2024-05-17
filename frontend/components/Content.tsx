"use client"
import { useState, useRef, useEffect, useContext, FormEvent } from 'react'
import { UseApiContext } from '@/contexts/useApiContext';

export default function Content() {
  const [linkCreated, setLinkCreated] = useState(0);
  const [linkName, setLinkName] = useState('');
  const [formData, setFormData] = useState({
    link: "",
    link_name: ""
  })

  const [errorMsg, setErrorMsg] = useState('');
  const [error, setError] = useState(0);

  const apiContext = useContext(UseApiContext);

  if (!apiContext) {
    return (
      <div>
        <h1>Houve um erro em nosso aplicativo! Por favor registre uma issue em nosso repositório no GitHub!</h1>
      </div>
    )
  }

  const { getApi } = apiContext;

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();

    getApi("/api/link/create?" + new URLSearchParams(formData), data => {
      console.log(data)
      if (data.success == 0) {
        setError(1);
        setLinkCreated(0);
        setErrorMsg(data.error)
        return;
      }

      setError(0);
      setLinkName(window.origin + '/' + data.link_name);
      setLinkCreated(1);
    })
  }



  return (
    <main className='main_form'>
      <div className='name_and_logo'>

      </div>
      <div>
        <h2>Encurte seu link:</h2>
      </div>

      <form onSubmit={handleSubmitForm}>
        <div>
          <input
            onChange={e => {
              setFormData(old => {
                return { ...old, link: e.target.value }
              })
            }}
            type="text"
            name="link"
            className="form_input_text_url"
            placeholder='Cole sua URL aqui'

          />
          <input

            type="submit"
            value="Encurtar link"
            className='form_input_submit'
          />
        </div>
        <input
          onChange={e => {
            setFormData(old => {
              return { ...old, link_name: e.target.value }
            })
          }}
          type="text"
          name="new_name"
          className='form_input_text'
          placeholder="Nome para sua url (opcional)"
        />
      </form>

      {
        linkCreated ?
          <a href={linkName}> {linkName} </a> :
          ''
      }
      {
        error ? errorMsg : ''
      }

    </main>
  )
}
