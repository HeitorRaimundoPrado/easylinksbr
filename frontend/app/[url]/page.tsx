"use client"
import { useContext, useEffect } from "react";

import { UseApiContext } from "@/contexts/useApiContext";
import { useRouter } from "next/navigation";

const RedirectTo = ({ params }: { params: { url: string } }) => {
  const apiContext = useContext(UseApiContext);
  const url = params.url
  const router = useRouter();

  if (!apiContext) {
    return (
      <div>
        <h1>Houve um erro no aplicativo! Por favor registre uma issue no nosso repositório no GitHub</h1>
      </div>
    )
  }

  const { getApi } = apiContext;

  useEffect(() => {
    if (!url) {
      return;
    }

    getApi(`/api/link/get/${url}`, (data) => {
      if (!data.link) {
        alert("O link que você colou não existe em nossos servidores")
        alert("Se você acha que isso é um bug, por favor registre uma issue em nosso repositório no GitHub")
        return
      }

      router.push(data.link)
    })

  }, [url, getApi])

  return (<>
    <h1>Te redirecionando para o link</h1>
  </>);
}

export default RedirectTo;
