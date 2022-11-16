import { Link, Outlet, NavLink } from "react-router-dom";
import Chevron from "./Chevron";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-top">
          <img className="logo" src={require("../img/DRESSNOTE.png")} />
          <div className="header-top__icons">
            <button className="header-top__btn">
              <svg
                className="header-top__icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172V3.84172Z"
                  stroke="#E6E5E8"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="header-top__btn">
              <svg
                className="header-top__icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6663 17.5V15.8333C16.6663 14.9493 16.3151 14.1014 15.69 13.4763C15.0649 12.8512 14.2171 12.5 13.333 12.5H6.66634C5.78229 12.5 4.93444 12.8512 4.30932 13.4763C3.6842 14.1014 3.33301 14.9493 3.33301 15.8333V17.5"
                  stroke="#E6E5E8"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.0003 9.16667C11.8413 9.16667 13.3337 7.67428 13.3337 5.83333C13.3337 3.99238 11.8413 2.5 10.0003 2.5C8.15938 2.5 6.66699 3.99238 6.66699 5.83333C6.66699 7.67428 8.15938 9.16667 10.0003 9.16667Z"
                  stroke="#E6E5E8"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="header-top__btn">
              <svg
                className="header-top__icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1.66663L2.5 4.99996V16.6666C2.5 17.1087 2.67559 17.5326 2.98816 17.8451C3.30072 18.1577 3.72464 18.3333 4.16667 18.3333H15.8333C16.2754 18.3333 16.6993 18.1577 17.0118 17.8451C17.3244 17.5326 17.5 17.1087 17.5 16.6666V4.99996L15 1.66663H5Z"
                  stroke="#E6E5E8"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 5H17.5"
                  stroke="#E6E5E8"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3337 8.33337C13.3337 9.21743 12.9825 10.0653 12.3573 10.6904C11.7322 11.3155 10.8844 11.6667 10.0003 11.6667C9.11627 11.6667 8.26842 11.3155 7.6433 10.6904C7.01818 10.0653 6.66699 9.21743 6.66699 8.33337"
                  stroke="#E6E5E8"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <nav className="nav">
          <div className="nav-links">
            <NavLink className="nav__item" to="/">
              New in
            </NavLink>
            <Chevron></Chevron>
            <NavLink className="nav__item" to="/clothing">
              Clothing
            </NavLink>
            <Chevron></Chevron>
            <NavLink className="nav__item" to="/shoes">
              Shoes
            </NavLink>
            <Chevron></Chevron>
            <NavLink className="nav__item" to="/accessories">
              Accessories
            </NavLink>
            <Chevron></Chevron>
            <NavLink className="nav__item" to="/brands">
              Brands
            </NavLink>
            <Chevron></Chevron>
            <NavLink className="nav__item" to="/sale">
              Sale
            </NavLink>
            <Chevron></Chevron>
          </div>
          <div className="nav-search">
            <button className="nav-search__btn">
              <svg
                className="search-btn__icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 14C10.5376 14 13 11.5376 13 8.5C13 5.46243 10.5376 3 7.5 3C4.46243 3 2 5.46243 2 8.5C2 11.5376 4.46243 14 7.5 14Z"
                  stroke="#32313A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 18L12 13"
                  stroke="#32313A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <input
              className="nav-search__input"
              type="text"
              placeholder="Search for..."
            />
          </div>
        </nav>
        <div className="header-btm">
          <span className="header-btm__text">
            Up to 50% off all dresses when use code DRESSLOVER
          </span>
          <NavLink className="header-btm__link" to="/">
            Shop dresses
          </NavLink>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
      <footer className="footer">
        <div className="footer-nav">
          <h2 className="footer-nav__headline">Customer support</h2>
          <NavLink className="footer-nav__item" to="/">
            Size guides
          </NavLink>
          <NavLink className="footer-nav__item" to="/">
            Shipping
          </NavLink>
          <NavLink className="footer-nav__item" to="/">
            Returns
          </NavLink>
          <NavLink className="footer-nav__item" to="/">
            Track my order
          </NavLink>
        </div>
        <div className="footer-nav">
          <h2 className="footer-nav__headline">My account</h2>
          <NavLink className="footer-nav__item" to="/">
            Order history
          </NavLink>
          <NavLink className="footer-nav__item" to="/">
            Payment methods
          </NavLink>
          <NavLink className="footer-nav__item" to="/">
            Account settings
          </NavLink>
          <NavLink className="footer-nav__item" to="/">
            Favorites
          </NavLink>
        </div>
        <p className="footer-text">
          Sign up today for email exclusives including early access to Sale, the
          latest trends and arrivals from your favorite designers and can’t miss
          promotions.
        </p>
        <form className="footer-signup">
          <input
            className="input"
            type="text"
            name="email"
            id="email"
            placeholder="jojo@jojo.com"
          />
          <button className="btn">Subscribe</button>
        </form>
        <div className="footer-socials">
          <NavLink className="footer-socials__item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9972 8.33177C9.97738 8.33177 8.32902 9.98014 8.32902 12C8.32902 14.0199 9.97738 15.6682 11.9972 15.6682C14.0171 15.6682 15.6655 14.0199 15.6655 12C15.6655 9.98014 14.0171 8.33177 11.9972 8.33177ZM22.9992 12C22.9992 10.481 23.0129 8.97571 22.9276 7.45943C22.8423 5.69824 22.4406 4.13519 21.1527 2.84732C19.8621 1.55669 18.3018 1.15767 16.5406 1.07237C15.0215 0.987059 13.5163 1.00082 12 1.00082C10.481 1.00082 8.97571 0.987059 7.45943 1.07237C5.69824 1.15767 4.13519 1.55945 2.84732 2.84732C1.55669 4.13794 1.15767 5.69824 1.07237 7.45943C0.987059 8.97846 1.00082 10.4837 1.00082 12C1.00082 13.5163 0.987059 15.0243 1.07237 16.5406C1.15767 18.3018 1.55945 19.8648 2.84732 21.1527C4.13794 22.4433 5.69824 22.8423 7.45943 22.9276C8.97846 23.0129 10.4837 22.9992 12 22.9992C13.519 22.9992 15.0243 23.0129 16.5406 22.9276C18.3018 22.8423 19.8648 22.4406 21.1527 21.1527C22.4433 19.8621 22.8423 18.3018 22.9276 16.5406C23.0157 15.0243 22.9992 13.519 22.9992 12V12ZM11.9972 17.6441C8.87389 17.6441 6.35318 15.1234 6.35318 12C6.35318 8.87664 8.87389 6.35594 11.9972 6.35594C15.1206 6.35594 17.6413 8.87664 17.6413 12C17.6413 15.1234 15.1206 17.6441 11.9972 17.6441ZM17.8725 7.44292C17.1432 7.44292 16.5543 6.85402 16.5543 6.12478C16.5543 5.39554 17.1432 4.80664 17.8725 4.80664C18.6017 4.80664 19.1906 5.39554 19.1906 6.12478C19.1908 6.29794 19.1569 6.46945 19.0907 6.62947C19.0245 6.78949 18.9275 6.93489 18.805 7.05733C18.6826 7.17978 18.5372 7.27686 18.3772 7.34303C18.2171 7.40919 18.0456 7.44314 17.8725 7.44292V7.44292Z"
                fill="#6E6D74"
              />
            </svg>
          </NavLink>
          <NavLink className="footer-socials__item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1109_649)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z"
                  fill="#6E6D74"
                />
              </g>
              <defs>
                <clipPath id="clip0_1109_649">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </NavLink>
          <NavLink className="footer-socials__item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.6425 4.93708C22.8075 5.30708 21.9105 5.55708 20.9675 5.67008C21.9405 5.08787 22.6685 4.17154 23.0155 3.09208C22.1014 3.63507 21.1009 4.01727 20.0575 4.22208C19.3559 3.47294 18.4266 2.9764 17.4138 2.80955C16.4011 2.6427 15.3616 2.81487 14.4568 3.29933C13.5519 3.78379 12.8323 4.55344 12.4097 5.48878C11.9871 6.42412 11.8851 7.47283 12.1195 8.47208C10.2672 8.37907 8.45515 7.89763 6.80095 7.05898C5.14674 6.22034 3.68736 5.04324 2.51752 3.60408C2.11752 4.29408 1.88752 5.09408 1.88752 5.94608C1.88708 6.71307 2.07596 7.46832 2.4374 8.14481C2.79885 8.8213 3.32168 9.39812 3.95952 9.82408C3.2198 9.80054 2.4964 9.60066 1.84952 9.24108V9.30108C1.84945 10.3768 2.22156 11.4195 2.90271 12.2521C3.58386 13.0847 4.53209 13.656 5.58652 13.8691C4.90031 14.0548 4.18086 14.0821 3.48252 13.9491C3.78002 14.8747 4.35952 15.6841 5.13989 16.264C5.92026 16.8439 6.86244 17.1653 7.83452 17.1831C6.18436 18.4785 4.14641 19.1812 2.04852 19.1781C1.6769 19.1782 1.3056 19.1565 0.936523 19.1131C3.066 20.4823 5.54486 21.2089 8.07652 21.2061C16.6465 21.2061 21.3315 14.1081 21.3315 7.95208C21.3315 7.75208 21.3265 7.55008 21.3175 7.35008C22.2288 6.69105 23.0154 5.87497 23.6405 4.94008L23.6425 4.93708V4.93708Z"
                fill="#6E6D74"
              />
            </svg>
          </NavLink>
          <NavLink className="footer-socials__item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1109_655)">
                <path
                  d="M0 12C0 17.123 3.211 21.497 7.73 23.218C7.62 22.281 7.503 20.736 7.755 19.652C7.972 18.72 9.156 13.714 9.156 13.714C9.156 13.714 8.799 12.999 8.799 11.94C8.799 10.28 9.761 9.04 10.96 9.04C11.98 9.04 12.472 9.805 12.472 10.722C12.472 11.747 11.819 13.279 11.482 14.7C11.201 15.889 12.079 16.859 13.251 16.859C15.374 16.859 17.007 14.62 17.007 11.388C17.007 8.527 14.951 6.528 12.016 6.528C8.618 6.528 6.623 9.077 6.623 11.712C6.623 12.739 7.018 13.839 7.512 14.438C7.55412 14.4832 7.58387 14.5386 7.59841 14.5986C7.61295 14.6587 7.61177 14.7215 7.595 14.781C7.504 15.159 7.302 15.97 7.263 16.136C7.21 16.354 7.09 16.401 6.863 16.295C5.371 15.601 4.439 13.42 4.439 11.668C4.439 7.899 7.176 4.439 12.331 4.439C16.475 4.439 19.696 7.392 19.696 11.338C19.696 15.455 17.101 18.769 13.497 18.769C12.286 18.769 11.149 18.139 10.759 17.396C10.759 17.396 10.16 19.678 10.015 20.236C9.733 21.32 8.951 22.692 8.466 23.471C9.584 23.815 10.77 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0C5.373 0 0 5.373 0 12Z"
                  fill="#6E6D74"
                />
              </g>
              <defs>
                <clipPath id="clip0_1109_655">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </NavLink>
          <NavLink className="footer-socials__item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1109_658)">
                <path
                  d="M23.4996 6.50708C23.3637 6.02231 23.099 5.58342 22.7336 5.23708C22.3579 4.88008 21.8974 4.62471 21.3956 4.49508C19.5176 4.00008 11.9936 4.00008 11.9936 4.00008C8.85697 3.96439 5.72107 4.12135 2.60364 4.47008C2.10183 4.60929 1.6422 4.87036 1.26564 5.23008C0.895641 5.58608 0.627641 6.02508 0.487641 6.50608C0.151334 8.31782 -0.0120674 10.1574 -0.000359379 12.0001C-0.0123594 13.8411 0.150641 15.6801 0.487641 17.4941C0.624641 17.9731 0.891641 18.4101 1.26264 18.7631C1.63364 19.1161 2.09564 19.3711 2.60364 19.5061C4.50664 20.0001 11.9936 20.0001 11.9936 20.0001C15.1343 20.0358 18.2742 19.8789 21.3956 19.5301C21.8974 19.4004 22.3579 19.1451 22.7336 18.7881C23.1036 18.4351 23.3666 17.9961 23.4986 17.5181C23.8437 15.707 24.0115 13.8667 23.9996 12.0231C24.0256 10.1717 23.858 8.32264 23.4996 6.50608V6.50708ZM9.60164 15.4241V8.57708L15.8616 12.0011L9.60164 15.4241Z"
                  fill="#6E6D74"
                />
              </g>
              <defs>
                <clipPath id="clip0_1109_658">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </NavLink>
        </div>
      </footer>
      <div className="footer-btm">
        <img
          className="footer-logo logo"
          src={require("../img/dressnote-logo-black.png")}
        />
        <span className="footer-btm-text">
          {" "}
          &copy; 2021 All rights reserved
        </span>
      </div>
    </>
  );
};

export default Header;
