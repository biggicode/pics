import axios from "axios"

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID _sXPJXHuGY4BF3gPiyja4TByYbUKoSMCYTwtO3tPt6c",
  },
})
