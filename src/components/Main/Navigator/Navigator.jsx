import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import Module2 from "./Navigator.module.css";

function Navigator() {
  return (
    <aside className={Module2.main__nav}>
      <div className={Module2.main__nav_items}>
        <NavLink to="/profile">
          <button type="submit" className={Module2.nav_items__item}>
            Профиль
          </button>
        </NavLink>
        <NavLink to="/news">
          <button type="submit" className={Module2.nav_items__item}>
            Новости
          </button>
        </NavLink>
        <NavLink to="/messages">
          <button type="submit" className={Module2.nav_items__item}>
            Сообщения
          </button>
        </NavLink>
        <NavLink to="/music">
          <button type="submit" className={Module2.nav_items__item}>
            Музыка
          </button>
        </NavLink>
        <NavLink to="/settings">
          <button type="submit" className={Module2.nav_items__item}>
            Настройки
          </button>
        </NavLink>
      </div>
    </aside>
  );
}

export default Navigator;
