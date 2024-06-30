function NavBar() {
  const submenu = [
    { name: "Products", hasArrow: true },
    { name: "Solutions", hasArrow: true },
    { name: "Pricing", hasArrow: true },
    { name: "Resources", hasArrow: true },
    { name: "Blog", hasArrow: false },
  ];

  return (
    <nav className="w-full h-[60px] bg-white flex flex-row items-center justify-between px-[100px]">
      <section className="flex flex-row items-center">
        <div className="mx-[20px] w-[130px]">
          <img src="../assets/1_invgate-logo.png" alt="Invgate Logo" />
        </div>
        <ul className="text-textGrey font-Montserrat-Medium flex flex-row">
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
      </section>
      <div className="flex flex-row items-center">
        <a className="font-Montserrat-Medium text-textGrey">Contact Us</a>
        <button className="bg-actionButton text-white rounded-md h-[40px] w-[120px] mx-[20px]">
          <p className="font-Montserrat-Medium text-white">Suscribe</p>
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
      </div>
    </nav>
  );
}

export default NavBar;
