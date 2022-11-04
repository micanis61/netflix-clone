import { requests } from "../request"
import React, { useState, useEffect } from 'react'
import axios from "../axios"

type movieProps = {
  title?: string
  name?: string
  original_name?: string
  backdrop_path?: string
  overview?: string
}

export const Banner = () => {
  const [movie, setMovie] = useState<movieProps>({})
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.feachNetflixOriginals)

      //apiからランダムで価を取得している
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }
    fetchData()
  })
}