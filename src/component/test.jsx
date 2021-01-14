import { useState, useEffect } from 'react'
const fetch = window.fetch

export default function Test () {
  fetch('http://localhost:3000/test')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  return (
    <div>
      22222222222
    </div>
  )
}
