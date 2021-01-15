import { useState, useEffect } from 'react'
import './gameHome.css'

export default function GameHome () {
  return (
    <div className='gameHome'>
      <div className='gameNav'>
        <ul className='clearfix'>
          <li className='bg-r dropdown nav-sub'>
            <a href='javascript:void(0);' className='toggle'>快捷导航</a>
            <i />
            <div className='content spe-content'>
              <div className='inner pop-shadow'>
                <a href='http://www.5eplay.com/'>返回专区</a>
                <a href='http://www.5eplay.com/'>新闻存档</a>
                <a href='http://www.5eplay.com/'>赛事存档</a>
                <a href='http://www.5eplay.com/' style={{ borderBottom: '0px ' }}>视频存档</a>
              </div>
            </div>
          </li>
          <li className='bg-r'><a href='javascript:void(0);'>近期比赛</a></li>
          <li className='bg-r spe-nav'><a href='javascript:void(0);'>CS在线约战</a></li>
          <li className='bg-r nav-sub'>
            <a href='javascript:void(0);'>常用下载</a>
            <i />
            <div className='content down-con'>
              <div className='inner pop-shadow'>
                <a href='http://www.5eplay.com/'>CSGO最新备份包</a>
                <a href='http://www.5eplay.com/' style={{ borderBottom: '0px ' }}>sXe注入了15.0</a>
              </div>
            </div>
          </li>
        </ul>
        <span className='cssec-bg'>
          <a title='返回CS首页' href='http://www.5eplay.com/%27' />
        </span>
      </div>
    </div>
  )
}
