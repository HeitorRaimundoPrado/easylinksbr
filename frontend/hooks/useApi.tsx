export default function useApi() {
  const getApi = async (endpoint: string, callback = (_data: any) => { }) => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`, {
      method: "GET",
    })
      .then(res => res.json())
      .then(callback)
      .catch((error) => {
        console.error("Error fetching api", error);
      })
  }

  const postApi = async (endpoint: string, body: any = {}, callback: (data: any) => void = (_data: any) => { }) => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(callback)
      .catch((error) => {
        console.error("Error fetching api", error);
      })
  }

  return {
    getApi,
    postApi
  }
}
