import React from "react";
import { BiHomeAlt, BiSolidVideo, BiUser, BiShoppingBag } from "react-icons/bi";

//INTERNAL IMPORT
import {
  HeaderAvatar,
  HeaderMenu,
  HeaderNotification,
  HeaderSearch,
  HeaderTheme,
  HeaderTop,
} from "./index";

const Header = ({
  intrestedUsers,
  setActiveComponent,
  setOpenSideChat,
  openSideChat,
  openTheme,
  setOpenTheme,
  setTheme,
  theme,
  menuPostion,
  setMenuPostion,
  backgroundTheme,
  setBackgroundTheme,
  functionName,
  navbarActive,
  setNavbarActive,
}) => {
  return (
    <div class="nav-header bg-white shadow-xs border-0">
      <HeaderTop
        functionName={functionName}
        setOpenSideChat={setOpenSideChat}
        openSideChat={openSideChat}
        setActiveComponent={setActiveComponent}
        navbarActive={navbarActive}
        setNavbarActive={setNavbarActive}
      />
      <HeaderSearch />
      <HeaderNotification
        setActiveComponent={setActiveComponent}
        intrestedUsers={intrestedUsers}
      />
      <HeaderTheme
        backgroundTheme={backgroundTheme}
        setBackgroundTheme={setBackgroundTheme}
        menuPostion={menuPostion}
        setMenuPostion={setMenuPostion}
        theme={theme}
        setTheme={setTheme}
        openTheme={openTheme}
        setOpenTheme={setOpenTheme}
        openSideChat={openSideChat}
        setOpenSideChat={setOpenSideChat}
      />
      <HeaderAvatar setActiveComponent={setActiveComponent} />
    </div>
  );
};

export default Header;
