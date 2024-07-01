import { useState } from "react";

  interface Props {
    showMenu: boolean;
    handleSubMenu: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }

  interface SubMenu {
    name: string;
    hasArrow: boolean;
  }

  interface SubMenuProps {
    submenu: SubMenu[];
  }

  const Logo = () => {
    return(
      <div className="mx-[20px] w-[130px] sm:mx-0 sm:w-[100px]">
            <img src="../assets/1_invgate-logo.png" alt="Invgate Logo" />
      </div>
    )}

  const NavButtons = ({showMenu, handleSubMenu}: Props) => {
    return(
      <div className="flex flex-row items-center">
        <a className="font-Montserrat-Medium text-textGrey sm:hidden">Contact Us</a>
        <button className="bg-actionButton text-white rounded-md h-[40px] w-[120px] mx-[20px] sm:hidden">
          <p className="font-Montserrat-Medium text-white ">Suscribe</p>
        </button>
        <button className="bg-transparent text-white rounded-md h-[40px]">
          <svg
            className="h-8 w-8 text-textGrey"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="12" cy="12" r="9" />{" "}
            <line x1="3.6" y1="9" x2="20.4" y2="9" />{" "}
            <line x1="3.6" y1="15" x2="20.4" y2="15" />{" "}
            <path d="M11.5 3a17 17 0 0 0 0 18" />{" "}
            <path d="M12.5 3a17 17 0 0 1 0 18" />
          </svg>
        </button>
        <button className="bg-transparent text-white rounded-md h-[40px] sm:ml-[10px] hidden sm:block" onClick={handleSubMenu}>
          {!showMenu ? <svg className="h-8 w-8 text-textGrey"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg> 
          : <svg className="h-8 w-8 text-textGrey"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
          }
          </button>
      </div>
    )
  }

const MobileMenu = ({submenu} : SubMenuProps) => {
  return(
    <section className="sm:w-full sm:flex sm:flex-col">
    <ul className="sm:text-textGrey sm:font-Montserrat-Medium sm:flex sm:flex-col sm:items-start sm:mt-[20px] sm:w-full sm:mb-[10px]">
      {submenu.map((item) => (
        <li className="sm:flex sm:flex-row mx-[20px] sm:mx-0 sm:w-full sm:justify-between sm:border-b-2 sm:border-textGrey sm:my-2" key={item.name}>
          <p>{item.name}</p>
          {item.hasArrow && (
            <svg
              className="h-6 w-6 text-[#687382]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <polyline points="6 9 12 15 18 9" />
            </svg>
          )}
        </li>
      ))}
    </ul>
    <button className="sm:bg-transparent sm:rounded-md sm:h-[40px] sm:w-full sm:border-[0.5px] sm:border-textGrey sm:mb-[10px]">
    <p className="font-Montserrat-Medium text-textGrey">Contact Us</p>
    </button>
    <button className="sm:bg-actionButton sm:text-white sm:rounded-md sm:h-[40px] sm:w-full">
      <p className="font-Montserrat-Medium text-white ">Suscribe</p>
    </button>
    </section>
  )}

  const DesktopMenu = ({submenu}: SubMenuProps) => {
    return(
      <ul className="text-textGrey font-Montserrat-Medium flex flex-row sm:hidden">
      {submenu.map((item) => (
        <li className="flex flex-row mx-[20px]" key={item.name}>
          <p>{item.name}</p>
          {item.hasArrow && (
            <svg
              className="h-6 w-6 text-[#687382]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <polyline points="6 9 12 15 18 9" />
            </svg>
          )}
        </li>
      ))}
    </ul>
    )
  }


function NavBar() {
  const submenu: SubMenu[] = [
    { name: "Products", hasArrow: true },
    { name: "Solutions", hasArrow: true },
    { name: "Pricing", hasArrow: true },
    { name: "Resources", hasArrow: true },
    { name: "Blog", hasArrow: false },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const handleSubMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <nav className={`w-full h-[60px] bg-white flex flex-row items-center justify-between px-[100px] sm:px-9 ${showMenu && "sm:h-full sm:z-10 sm:absolute sm:top-0 sm:items-start sm:flex-col sm:justify-start"}`}>
      <div className={`w-full h-[60px] flex flex-row items-center justify-between`}>
      <section className="flex flex-row items-center">
        <Logo />
        <DesktopMenu  submenu={submenu}/>
      </section>
      <NavButtons showMenu={showMenu} handleSubMenu={handleSubMenu} />
      </div>
      {showMenu && (
        <MobileMenu submenu={submenu} />
      )}
    </nav>
  );
}

export default NavBar;
