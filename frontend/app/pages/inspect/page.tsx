"use client"
import { useState, useContext, FormEvent, ChangeEvent } from "react";
import { UseApiContext } from "@/contexts/useApiContext";

const InspectUrl = () => {
  const [urlToInspect, setUrlToInspect] = useState("");
  const [numberClicked, setNumberClicked] = useState(null);

  const apiContext = useContext(UseApiContext);

  if (!apiContext) {
    return (
      <div>
        <h1>Houve um erro no aplicativo por favor registre uma issue no nosso repositório no GitHub</h1>
      </div>
    )
  }

  const { getApi } = apiContext;

  const handleGetTimesClicked = (e: FormEvent) => {
    e.preventDefault();
    getApi("/api/times-clicked?" + new URLSearchParams({ url: urlToInspect }), data => {
      setNumberClicked(data.clicked);
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrlToInspect(e.currentTarget.value);
  }

  return (
    <>
      <div className="inspect_url">
        <h2>Inspecionar URL:</h2>
        <form onSubmit={handleGetTimesClicked}>
          <input id="url" type="text" value={urlToInspect} onChange={handleInputChange} placeholder="Cole sua URL aqui" />

          <button>Inspecionar</button>
        </form>

        <div className="display">
          {numberClicked && "clicked " + numberClicked + " times"}
        </div>
      </div>
    </>
  )
}

export default InspectUrl;
