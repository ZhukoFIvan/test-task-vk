import React from 'react'
import { Link } from 'react-router-dom'
import styles from './GroupItem.module.scss'

const GroupItem = ({
	id,
	name,
	members_count,
	avatar_color,
	closed,
	friends,
}) => {
	return (
		<li key={id} className={styles.block}>
			<div
				className={styles.avatar}
				style={avatar_color && { backgroundColor: ` ${avatar_color}` }}
			></div>
			<h3 className={styles.name}>{name}</h3>
			<div className={styles.info_block}>
				<span className={styles.count}>{members_count} участников</span>
				<Link to={`/friends/${id}`}>
					Среди них {friends ? friends?.length : 0} друзей
				</Link>
				<span
					className={styles.type}
					style={closed ? { color: 'red' } : { color: 'green' }}
				>
					{closed ? 'Закрытая' : 'Открытая'}
				</span>
			</div>
		</li>
	)
}

export default GroupItem
