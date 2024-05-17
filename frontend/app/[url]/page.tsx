"use client"
import { useContext, useEffect, useState } from "react";

import { UseApiContext } from "@/contexts/useApiContext";
import { useRouter } from "next/navigation";

const RedirectTo = ({ params }: { params: { url: string } }) => {
  const [error, setError] = useState(false);
  const apiContext = useContext(UseApiContext);
  const url = params.url
  const router = useRouter();

  useEffect(() => {
    if (!apiContext) {
      setError(true);
      return
    }

    const { getApi } = apiContext;

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

  }, [url, apiContext])

  if (error) {
    return (
      <div>
        <h1>Houve um erro no aplicativo! Por favor registre uma issue no nosso repositório no GitHub</h1>
      </div>
    )
  }

  return (<>
    <h1>Te redirecionando para o link</h1>
  </>);
}

export default RedirectTo;
