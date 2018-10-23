import React from 'react';
import $ from 'jquery';

const Header = () => {
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar.fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
    return (
      <nav className="navbar navbar-expand-md my-portfolio fixed-top initial" id="navbar">
        <a className="navbar-brand" href="#">ZH</a>
        <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#mainNavigation" aria-label="Navigation toggle">
          <span className="menu-icon fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavigation">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
  )
};

export default Header;
