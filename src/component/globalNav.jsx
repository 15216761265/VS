import { useState, useEffect } from 'react'
import './globalNav.css'
import logo from '../public/logo.png'
const fetch = window.fetch

export default function GlobalNav () {
  fetch('http://localhost:3000/test')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  return (
    <div className='nav'>
      <div className='bg'>
        <div className='leftpng'>
          <a href='https://csgo.5eplay.com/'>
            <img src={logo} alt='' />
          </a>
        </div>
        <div class='middlepng'>
          <ul class='clearfix'>
            <li class='bg'>
              <a href='https://csgo.5eplay.com/' target='blank' tppabs='http://www.5eplay.com/' class='current'><em>反恐精英CSGO</em></a>
            </li>
          </ul>
        </div>
        <div className='rightblock'>
          <div className='unlogin'>
            <a href='javascript:void(0);' className='register'>注册</a>
            <a href='javascript:void(0);' className='login'>登录</a>
          </div>
        </div>
      </div>
    </div>
  )
}
