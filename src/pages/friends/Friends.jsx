import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchGroups } from '../../store/groupsSlice'
import styles from './Friends.module.scss'
const Friends = () => {
	const { id } = useParams()

	const groups = useSelector((state) => state.groups.groups)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchGroups())
	}, [])
	return (
		<div className={styles.block}>
			{groups.map((group) => {
				{
					return (
						group.id == id &&
						group.friends?.map((f) => {
							return (
								<div className={styles.name}>
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
