import React, { useState } from "react";
import icon from "./pragmatemaroon.png";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { checkAuthStatus } from "../../api/authReq";

function Homenav() {
  const [show, setShow] = useState(false);
  const authStatus = useQuery("authstatus", checkAuthStatus, {
    initialData: { user: undefined, isLoggedIn: false },
  });
  return (
    <div className="sticky top-0 z-50 bg-white ">
      <nav id="mobileview" className="lg:hidden">
        <div className="flex flex-row justify-between">
          <div className="">
            <a href="/" className="flex items-center">
              <img src={icon} alt="" className="h-12 py-2 pl-2 pr-2" />
              <div className="">
                <span className="pr-1 font-bans text-cus font-extrabold text-first">
                  PRAG
                </span>
                <span className="font-bans text-cus font-extrabold text-merry">
                  MATE
                </span>
              </div>
            </a>
          </div>
          <div onClick={() => setShow(!show)} className="-translate-y-1">
            <i class="uil uil-bars pr-3 pt-1 text-cus2 "></i>
          </div>
        </div>
        <div>
          {show ? (
            <ul className="flex flex-col justify-center pb-6 pl-14 font-pops text-xl shadow-xl ">
              <li className="py-3 pt-5 hover:text-first">
                <i class="uil uil-estate pr-2"></i>
                <a href="#" onClick={() => setShow(false)} className="">
                  HOME
                </a>
              </li>
              <li className="py-3 hover:text-first">
                <i class="uil uil-chart pr-2"></i>
                <a href="#about" onClick={() => setShow(false)} className="">
                  ABOUT
                </a>
              </li>
              <li className="py-3 hover:text-first">
                <i class="uil uil-users-alt pr-2"></i>
                <a href="#partners" onClick={() => setShow(false)} className="">
                  PARTNERS
                </a>
              </li>
              <li className="py-3 hover:text-first">
                <i class="uil uil-envelope pr-2"></i>
                <a href="#contact" onClick={() => setShow(false)} className="">
                  CONTACT
                </a>
              </li>
              <div className="justify-betweem flex flex-row pt-5">
                {/* <div className="hover:text-orange-500">
                            <button className="flex justify-center w-32 py-1 mb-3 mr-5 border-2 hover:border-first rounded-xl group active:scale-95">
                                <Link to="/login" className="text-base font-semibold text-slate-400 group-hover:text-orange-500">LOG IN</Link>
                            </button>
                        </div>
                        <button className="flex items-center justify-center w-32 h-9 rounded-xl hover:text-first bg-first hover:bg-orange-500 active:scale-95">
                            <a href="#" className="text-base font-semibold text-white ">SIGN IN</a>
                        </button> */}
                {authStatus.isFetched && authStatus.data.isLoggedIn ? (
                  <button className="flex h-9 w-32 items-center justify-center rounded-xl bg-first hover:bg-orange-500 hover:text-first active:scale-95">
                    {authStatus.data.user.userType === "School" ? (
                      <Link
                        to="/School_D"
                        className="text-base font-semibold text-white "
                      >
                        DASHBOARD
                      </Link>
                    ) : authStatus.data.user.userType === "Student" ? (
                      <Link
                        to="/Student_D"
                        className="text-base font-semibold text-white "
                      >
                        DASHBOARD
                      </Link>
                    ) : (
                      <Link
                        to="/Teacher_D"
                        className="text-base font-semibold text-white "
                      >
                        DASHBOARD
                      </Link>
                    )}
                  </button>
                ) : (
                  <button className="flex h-9 w-32 items-center justify-center rounded-xl bg-first hover:bg-orange-500 hover:text-first active:scale-95">
                    <Link
                      to="/login"
                      className="text-base font-semibold text-white "
                    >
                      LOG IN
                    </Link>
                  </button>
                )}
              </div>
            </ul>
          ) : null}
        </div>
      </nav>
      <nav id="desktopview" className="mr-0 hidden lg:block">
        <div className="flex justify-between">
          <div className="flex flex-row">
            <a href="/" className="flex items-center">
              <img src={icon} alt="" className="h-12 py-2 pl-2 pr-2" />

              <span className="pr-1 font-bans text-cus font-extrabold text-first">
                PRAG
              </span>
              <span className="font-bans text-cus font-extrabold text-merry">
                MATE
              </span>
            </a>
          </div>

          <ul className="flex flex-row items-center justify-center pl-14 font-pops text-xl">
            <li className="p-3 hover:text-first">
              <i class="uil uil-estate pr-2"></i>
              <a href="#" className="">
                HOME
              </a>
            </li>
            <li className="p-3 hover:text-first">
              <i class="uil uil-chart pr-2"></i>
              <a href="#about" className="">
                ABOUT
              </a>
            </li>
            <li className="px-2 py-3 hover:text-first">
              <i class="uil uil-users-alt pr-2"></i>
              <a href="#partners" className="">
                PARTNERS
              </a>
            </li>
            <li className="p-3 hover:text-first">
              <i class="uil uil-envelope pr-2"></i>
              <a href="#contact" className="">
                CONTACT
              </a>
            </li>
          </ul>
          <div className="mt-2 mr-4 flex flex-row justify-between">
            {/* <div className="hover:text-orange-500">
                        <button className="flex justify-center w-32 py-1 mb-3 mr-5 border-2 hover:border-first rounded-xl group active:scale-95">
                            <Link to="/login" className="text-base font-semibold text-slate-400 group-hover:text-orange-500">LOG IN</Link>
                        </button>
                    </div>
                    <button className="flex items-center justify-center w-32 h-9 rounded-xl hover:text-first bg-first hover:bg-orange-500 active:scale-95">
                        <a href="#" className="text-base font-semibold text-white ">SIGN IN</a>
                    </button> */}
            {authStatus.isFetched && authStatus.data.isLoggedIn ? (
              <button className="flex h-9 w-32 items-center justify-center rounded-xl bg-first hover:bg-orange-500 hover:text-first active:scale-95">
                {authStatus.data.user.userType === "School" ? (
                  <Link
                    to="/School_D"
                    className="text-base font-semibold text-white "
                  >
                    DASHBOARD
                  </Link>
                ) : authStatus.data.user.userType === "Student" ? (
                  <Link
                    to="/Student_D"
                    className="text-base font-semibold text-white "
                  >
                    DASHBOARD
                  </Link>
                ) : (
                  <Link
                    to="/Teacher_D"
                    className="text-base font-semibold text-white "
                  >
                    DASHBOARD
                  </Link>
                )}
              </button>
            ) : (
              <button className="flex h-9 w-32 items-center justify-center rounded-xl bg-first hover:bg-orange-500 hover:text-first active:scale-95">
                <Link
                  to="/login"
                  className="text-base font-semibold text-white "
                >
                  LOG IN
                </Link>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Homenav;
