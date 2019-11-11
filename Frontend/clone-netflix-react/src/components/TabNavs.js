import React, { useState } from "react"
import { Tabs, TabList, Tab, TabPanel } from "react-tabs"
import { ReactComponent as TabDoor } from "../assets/svg/tab-door.svg"
import { ReactComponent as TabDevices } from "../assets/svg/tab-devices.svg"
import { ReactComponent as TabPrice } from "../assets/svg/tab-price.svg"
import TabDoorContent from "./TabDoorContent"
import TabDevicesContent from "./TabDevicesContent"
import TabPriceContent from "./TabPriceContent"
import styles from './TabNavs.module.css'

export default function TabNavs() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs
      className={styles.tabs}
      selectedIndex={tabIndex}
      onSelect={setTabIndex}>

      <TabList className={styles.tabNavContainer}>
        <Tab className={tabIndex === 0 && `${styles.active} ${styles.tabSelected}`}>
          <TabDoor className={styles.tabIconDoor} />
          <p>
            <strong>
              No commitments <br />
              Cancel online at anytime
            </strong>
          </p>
        </Tab>

        <Tab className={tabIndex === 1 && `${styles.active} ${styles.tabSelected}`}>
          <TabDevices className={styles.tabIconDevices} />
          <p style={{ marginTop: "-4.8125rem" }}>
            <strong>Watch anywhere</strong>
          </p>
        </Tab>

        <Tab className={tabIndex === 2 && `${styles.active} ${styles.tabSelected}`}>
          <TabPrice className={styles.tabIconPrice} />
          <p>
            <strong>Pick your price</strong>
          </p>
        </Tab>
      </TabList>

      <TabPanel> <TabDoorContent/> </TabPanel>
      <TabPanel> <TabDevicesContent/> </TabPanel>
      <TabPanel> <TabPriceContent/> </TabPanel>
    </Tabs>
  )
}
