import React from "react";
import { useRef } from "react";
import "./Navigation.style.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  // 메뉴와 폼을 함께 접근하기 위해 초깃값을 빈 배열로 했다.
  const menuRef = useRef([]);
  const openClose = () => {
    // 메뉴와 폼 영역이 나타났다가 사라지도록 한다.
    menuRef.current[0].classList.toggle("appear");
    menuRef.current[1].classList.toggle("appear");
  };
  console.log(menuRef);

  return (
    <header>
      <div className="nav_logo_list">
        <div className="nav_logo">
          <Link to="/">
            <img
              src="src/Navigation/img/netflix-logo.png"
              alt="logo"
              width={140}
            />
          </Link>
        </div>
        <ul className="nav_list" ref={(elem) => (menuRef.current[0] = elem)}>
          <li>
            <Link to="/" className="nav_list_item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies" className="nav_list_item">
              Movies
            </Link>
          </li>
        </ul>
      </div>
      <form ref={(elem) => (menuRef.current[1] = elem)}>
        <input type="text" />
        <Button variant="danger">Search</Button>
      </form>
      <FontAwesomeIcon
        icon={faBars}
        size="2xl"
        style={{ color: "#ffffff" }}
        className="menu_bars"
        onClick={openClose}  // 버튼 클릭 시 실행
      />
    </header>
  );
};

export default Navigation;
