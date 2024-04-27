

import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import { Link } from '@chakra-ui/next-js'
//Icons
import { MdNotifications } from 'react-icons/md';
import { BiStats, BiHomeAlt2 } from "react-icons/bi";
import { GrConnect } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { HiOutlineCollection } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
//Internal
import Style from "./NavBar.module.css"
import {Notification, Profile, sidebar, Collections, MobileNav} from './index'
import {button} from '../cindex'
import images from '../../img'
import { useRouter } from 'next/router';


  //component states


  const NavBar = () => {

  const [notifications, setNotifications] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);  


  const openNotification = ()=>{
    if(!notifications){

      setNotifications(true);
      setProfile(false);
    } else {
      setNotifications(false);

      setNotifications(false)

    }
  };

  const openSideBar = () => {
    if(!openSideMenu){
      setOpenSideMenu(true)
    } else {
      openSideMenu(false)
    }
  }

  const openProfile = ()=>{
    if(!Profile){
      setProfile(true);

    }  else {
      setProfile(false)
    }
  }

 

  return (
  <div class="w-full">
    <div class="hidden md:block">
      <div class=" relative mx-auto flex h-20 w-full items-center justify-between bg-zinc-200 px-">
        <div className='hidden md:block'>
            <a href="/">
                <Image src={images.logo} alt='YugiMart' class='h-full max-w-48' />
            </a>
        </div>
        <div class="flex-shrink flex-grow-0 justify-start pl-4">
            <div class="inline-flex max-w-full items-center">
                <div class="relative flex flex-shrink flex-grow-0 items-center rounded-full border-2 border-black px-1 py-2 pl-4">
                    <FaSearch />
                    <input type="text" class="pl-4 bg-transparent placeholder-black border-0 border-transparent outline-none flex-grow" placeholder='Search...' />
                </div>
            </div>
        </div>
        <div class="flex-initial">
          <div class='relative flex items-center justify-end m-4'>
            <div class="mr-4 flex items-center m-4">
              <Link class="inline-block rounded-full px-3 py-2 hover:bg-gray-200 m-2" href="/collections">
                <b class="relative flex cursor-pointer items-center whitespace-nowrap">Collections</b>
              </Link>
              <Link class="inline-block rounded-full px-3 py-2 hover:bg-gray-200 m-2" href="/leaderboard">
                <b class="relative flex cursor-pointer items-center whitespace-nowrap">Leaderboard</b>
              </Link>
              <Link class="inline-block rounded-full px-3 py-2 hover:bg-gray-200 m-2" href="/activity">
                <b class="relative flex cursor-pointer items-center whitespace-nowrap">Activity</b>
              </Link>
            
              <div class="relative block">
                <button class="relative inline-block rounded-full px-3 py-2 hover:bg-gray-200" onClick={() => openNotification()}>
                  <div className={Style.nav_container_right_notify}>
                    <MdNotifications class="flex h-5 items-center"/>
                    {notifications && (
                    <Notification />
                    )}
                  </div>
                </button>
              </div>
            </div>
            <div class="block">
              <div class="relative inline">
                <div class="relative inline-flex items-center rounded-lg border px-2 hover:shadow-lg">
                  <div class="block h-10 w-10 flex-shrink-0 flex-grow-0 pl-0 items-center">
                    <Image src={images.user1} alt="Profile" onClick={() => openProfile()}
                    class="rounded-xl "/>
                    {profile && <Profile/>}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block md:hidden  ">
      <MobileNav />
    </div>
  </div>

  )
}
export default NavBar
