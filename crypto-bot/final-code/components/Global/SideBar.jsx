import React, { useState } from "react";

const SideBarComponent = ({
  array,
  title,
  setActive,
  active,
  setActiveComponent,
}) => (
  <div className="nav_group">
    <h2 className="group__title">{title}</h2>
    <ul className="group__list">
      {array.map((menu, index) => (
        <li key={index} onClick={() => setActiveComponent(menu.menu)}>
          <a
            onClick={() => setActive(menu.menu)}
            className={`
          fn__tooltip ${active == menu.menu ? "active" : ""} menu__item`}
            data-position="right"
            title={menu.menu}
          >
            <span className="icon">
              <img src={menu.icon} className="fn__svg" alt="" />
            </span>
            <span className="text">{menu.menu}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SideBar = ({ setActiveComponent }) => {
  const [active, setActive] = useState("Home");

  const array1 = [
    {
      menu: "Home",
      icon: "img/lighticon/light-14.png",
    },
    {
      menu: "Trade Tokens",
      icon: "img/lighticon/light-17.png",
    },
    {
      menu: "Top Exchange Tokens",
      icon: "img/lighticon/light-7.png",
    },
    {
      menu: "Networks",
      icon: "img/lighticon/light-15.png",
    },
  ];

  const array2 = [
    {
      menu: "Add Network",
      icon: "img/lighticon/light-10.png",
    },
    {
      menu: "Trading",
      icon: "img/lighticon/light-6.png",
    },
    {
      menu: "Pricing",
      icon: "img/lighticon/light-16.png",
    },
    {
      menu: "Profile",
      icon: "img/lighticon/light-4.png",
    },
    {
      menu: "Add Token Pair",
      icon: "img/lighticon/light-19.png",
    },
  ];

  const logout = () => {
    localStorage.removeItem("CryptoAUT_TOKEN");

    window.location.reload();
  };

  return (
    <div className="techwave_fn_leftpanel">
      <div className="mobile_extra_closer"></div>
      <div className="leftpanel_logo">
        <a className="fn_logo">
          <span className="full_logo">
            <img src="img/light-logo.png" className="desktop_logo" alt="" />
            <img src="img/light-logo.png" className="retina_logo" alt="" />
          </span>
          <span className="short_logo">
            <img
              src="img/logo-desktop-mini.png"
              className="desktop_logo"
              alt=""
            />
            <img src="img/crypto.png" className="retina_logo" alt="" />
          </span>
        </a>
        <a href="#" className="fn__closer fn__icon_button desktop_closer">
          <img src="img/lighticon/light-22.png" alt="" className="fn__svg" />
        </a>
        <a href="#" className="fn__closer fn__icon_button mobile_closer">
          <img src="img/lighticon/light-22.png" alt="" className="fn__svg" />
        </a>
      </div>

      {/* //COMPOMENT */}
      <div className="leftpanel_content">
        <SideBarComponent
          setActiveComponent={setActiveComponent}
          setActive={setActive}
          active={active}
          array={array1}
          title={"Start Here"}
        />
        <SideBarComponent
          setActiveComponent={setActiveComponent}
          setActive={setActive}
          active={active}
          array={array2}
          title={"User Tools"}
        />

        <div className="nav_group">
          <h2 className="group__title">Controls</h2>
          <ul className="group__list">
            <li className="" onClick={() => logout()}>
              <a
                className="fn__tooltip menu__item"
                data-position="right"
                title="Log Out"
              >
                <span className="icon">
                  <img
                    src="img/lighticon/light-10.png"
                    className="fn__svg"
                    alt=""
                  />
                </span>
                <span className="text">{"Log Out"}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
