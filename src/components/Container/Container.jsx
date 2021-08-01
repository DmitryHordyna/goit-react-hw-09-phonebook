//module
import React from "react"
//style
import style from './Container.module.css'

const Container = ({ children }) => <div className={style.Container}>{children}</div>

export default Container;