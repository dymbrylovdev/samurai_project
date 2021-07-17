import React from 'react';
import Module2 from './Main.module.css'

function Main() {
	return (
		<main className={Module2.main}>
			<aside className={Module2.main__nav}>
				<div className={Module2.main__nav_items}>
					<div className={Module2.nav_items__item}><a href="#" className={Module2.nav__silca}>Моя страница</a></div>
					<div className={Module2.nav_items__item}><a href="#" className={Module2.nav__silca}>Новости</a></div>
					<div className={Module2.nav_items__item}><a href="#" className={Module2.nav__silca}>Сообщения</a></div>
					<div className={Module2.nav_items__item}><a href="#" className={Module2.nav__silca}>Навигация</a></div>
				</div>
			</aside>
			<div className={Module2.main__content}>
				<div className={Module2.main__content_img}>
					<div className={Module2.content_img}>
					</div>
				</div>

			</div>
		</main>
	);
}

export default Main