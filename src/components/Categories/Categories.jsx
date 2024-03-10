import React from 'react'
import styles from './Categories.module.scss'
const Categories = ({
	privacyFilter,
	setPrivacyFilter,
	colorFilter,
	setColorFilter,
	friendsFilter,
	setFriendsFilter,
}) => {
	return (
		<div className={styles.block}>
			<label>
				Доступ:
				<select
					value={privacyFilter}
					onChange={(e) => setPrivacyFilter(e.target.value)}
				>
					<option value='all'>Все</option>
					<option value='open'>Открытая</option>
					<option value='closed'>Закрытая</option>
				</select>
			</label>
			<label>
				Аватарка:
				<select
					value={colorFilter}
					onChange={(e) => setColorFilter(e.target.value)}
				>
					<option value='any'>Любая</option>
					<option value='red'>Красная</option>
					<option value='green'>Зеленая</option>
					<option value='yellow'>Желтая</option>
					<option value='blue'>Синяя</option>
				</select>
			</label>
			<label>
				Наличие друзей:
				<input
					type='checkbox'
					checked={friendsFilter}
					onChange={(e) => setFriendsFilter(e.target.checked)}
				/>
			</label>
		</div>
	)
}

export default Categories
