// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"

const url_api = 'https://secrett-message.000webhostapp.com/api'

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


export const getMessage = async () => {
  try {
    const data = await axios.get(`${url_api}/messages`, {
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json'
      }
    })

    return data;
  } catch (error) {
    return error
  }
}

export const createMessage = async ({ from, message }) => {
  try {
    const data = await axios.postForm(`${url_api}/messages`, {
      from, message
    }, {
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      }
    })

    return data;
  } catch (error) {
    return error;
  }
}