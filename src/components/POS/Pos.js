import React from 'react'
import SideNav from '../SideNav'
import Topnav from '../Topnav'
import Topheader from '../Topheader'
import PosContent from './PosContent'

function Pos() {
    return (
        <>
            <div >
                <Topnav />
            </div>
            <div style={{ display: 'flex' }}>
                <div className='sideNav' style={{ justifyContent: 'start', width: '5%' }}>
                    <SideNav />
                </div>
                <div className='Body' style={{ width: '100%' }}>
                    <Topheader />
                    <PosContent/>
                </div>
            </div>
        </>
    )
}

export default Pos