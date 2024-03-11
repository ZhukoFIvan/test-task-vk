import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchGroups } from '../../store/groupsSlice'
import styles from './Friends.module.scss'
const Friends = () => {
	const { id } = useParams()

	const groups = useSelector((state) => state.groups.groups)
	const dispatch = useDispatch()

	useEffect(() => {
		setTimeout(() => {
			try {
				dispatch(fetchGroups())
			} catch (error) {
				console.log(error)
			}
		}, 1000)
	}, [])
	return (
		<div className={styles.block}>
			<Link to='/'>Вернуться назад</Link>
			{groups?.map((group) => {
				{
					return (
						group.id == id &&
						group.friends?.map((f, index) => {
							return (
								<div key={index} className={styles.name}>
									{f.first_name + ' ' + f.last_name}
								</div>
							)
						})
					)
				}
			})}
		</div>
	)
}

export default Friends
