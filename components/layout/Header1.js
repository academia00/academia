import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const Header1 = ({
  handleOpen,
  handleRemove,
  searchToggle,
  handleToggle,
  scroll,
}) => {
  return (
    <>
      <header
        className={`main-header header-style-one ${
          scroll ? "fixed-header" : ""
        } ${searchToggle ? "moblie-search-active" : ""}`}
      >
        <div className="main-box">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <h4 className="txt">Academia</h4>
              </Link>
            </div>
          </div>
          <div className="nav-outer">
            <nav className="nav main-menu">
              <NavLinks extraClassName="header1" />
            </nav>
            <div className="outer-box">
              <div className="ui-btn-outer">
                <button
                  className="ui-btn ui-btn search-btn"
                  onClick={handleToggle}
                >
                  <span className="icon lnr lnr-icon-enter" />
                </button>
              </div>

              <div className="mobile-nav-toggler" onClick={handleOpen}>
                <span className="icon lnr-icon-bars" />
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={handleRemove} />
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link href="/">
                  <h4 className="txt text-white">Academia</h4>
                </Link>
              </div>
              <div className="close-btn" onClick={handleRemove}>
                <i className="icon fa fa-times" />
              </div>
            </div>

            {/* ======================================================================================== */}
            <MobileMenu />
          </nav>
        </div>
        <div className="search-popup">
          <span className="search-back-drop" />
          <button className="close-search" onClick={handleToggle}>
            <span className="fa fa-times" />
          </button>
          <div className="search-inner">
            <div className="d-flex  justify-content-center">
              <Link
                href="https://stdacademia.netlify.app/login"
                target="__blank"
              >
                <button className="btn btn-outline-info me-4">
                  Student Login
                </button>
              </Link>
              <Link
                href="https://admacademia.netlify.app/login"
                target="__blank"
              >
                <button className="btn btn-outline-warning">
                  Institute Login
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`sticky-header ${
            scroll ? "fixed-header animated slideInDown" : ""
          }`}
        >
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo">
                <Link href="/" title>
                  <h4 className="txt">Academia</h4>
                </Link>
              </div>
              <div className="nav-outer">
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <MobileMenu />
                  </div>
                </nav>
                <div className="mobile-nav-toggler" onClick={handleOpen}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header1;
