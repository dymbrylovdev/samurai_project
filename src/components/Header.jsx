import React from 'react';
import Module1 from './Header.module.css'

function Header() {
	return (
		<header className={Module1.header}>
			<div className={Module1.logotip}><div className={Module1.logotip_top}> </div></div>
			<div className={Module1.heder__menu}>
					<div className={Module1.menu__items}>
					<div className={Module1.menu_item}><a href="#" className={Module1.menu_item_sillca} >Пункт навигации</a></div>
					<div className={Module1.menu_item}><a href="#" className={Module1.menu_item_sillca} >Пункт навигации</a></div>
					<div className={Module1.menu_item}><a href="#" className={Module1.menu_item_sillca} >Пункт навигации</a></div>

				</div>
			</div>
		</header>
	);
}

export default Header