import React from 'react'
import { WorkItem } from './WorkItem'
import images from '../Images/images'

export const Works = () => {
  return (
    <> <h2>Works</h2>
    <div className='work-cont'> 
    <WorkItem
    titulo = "Z-shop"
    deploy = "https://zshop-omega.vercel.app/"
    fondo ={ images.p2}></WorkItem>
    <WorkItem
    titulo="Sabujcha"
    deploy="https://sabujcha-nine.vercel.app/"
    fondo ={ images.p1}></WorkItem>
    <WorkItem
    titulo="Dezzer"
    deploy="https://dezzer-teal.vercel.app/"
    fondo ={ images.p5}></WorkItem>
    <WorkItem
    titulo="Tetris"
    deploy="https://tetris-blush.vercel.app/"
    fondo ={ images.p3}></WorkItem>
    <WorkItem
    titulo="Wheel of duck"
    deploy="https://wheel-of-duck.vercel.app/"
    fondo ={ images.p4}></WorkItem>
    <WorkItem
    titulo="Taller Lucerito"
    deploy="https://taller-cl-3000.vercel.app/"
    fondo ={ images.p6}></WorkItem>
   
    </div>
   
    </>
   
  )
}
