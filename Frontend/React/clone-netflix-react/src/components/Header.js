import React, { useState } from 'react'
import logo from '../assets/svg/logo.svg'
import { NavLink, Link } from 'react-router-dom'
import styles from './Header.module.css'
import { Icon } from "react-icons-kit"
import { ic_chevron_right } from "react-icons-kit/md/ic_chevron_right"
import StyledButton from './StyledButton'

export default function Header (props) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTop}>
        <img className={styles.logo} src={logo} alt="" />
        <NavLink className={styles.signInBtn} to="" children="Sign In" />
      </div>
      <div className={styles.headerContent}>
        <h1>See what's next.</h1>
        <h2>WATCH ANYWHERE. CANCEL ANYTIME.</h2>
        <StyledButton className={styles.mainOfferBtn} primary>
          Try it now
          <span className={styles.icon}>
            <Icon size={"100%"} icon={ic_chevron_right} />
          </span>
        </StyledButton>
      </div>
    </div>
  )
}