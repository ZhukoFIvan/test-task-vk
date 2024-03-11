import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../../components/Categories/Categories'
import GroupItem from '../../components/GroupItem/GroupItem'
import { fetchGroups } from '../../store/groupsSlice'
import styles from './Home.module.scss'

const Home = () => {
	// const [groups, setGroups] = useState([])

	const [privacyFilter, setPrivacyFilter] = useState('all')
	const [colorFilter, setColorFilter] = useState('any')
	const [friendsFilter, setFriendsFilter] = useState(false)

	const groups = useSelector((state) => state.groups.groups)
	const dispatch = useDispatch()

	const filteredGroups = groups.filter((group) => {
		if (
			privacyFilter !== 'all' &&
			group.closed !== (privacyFilter === 'closed')
		) {
			return false
		}

		if (colorFilter !== 'any' && group.avatar_color !== colorFilter) {
			return false
		}

		if (friendsFilter && !group.friends) {
			return false
		}

		return true
	})

	useEffect(() => {
		setTimeout(() => {
			try {
				dispatch(fetchGroups())
			} catch (error) {
				console.log(error)
			}
		}, 1000)
	}, [dispatch])

	return (
		<>
			<h1>Список групп</h1>
			<Categories
				groups={groups}
				privacyFilter={privacyFilter}
				setPrivacyFilter={setPrivacyFilter}
				colorFilter={colorFilter}
				setColorFilter={setColorFilter}
				friendsFilter={friendsFilter}
				setFriendsFilter={setFriendsFilter}
			/>

			{
				<ul className={styles.groups}>
					{filteredGroups.map((group) => {
						return <GroupItem {...group} />
					})}
				</ul>
			}
		</>
	)
}

export default Home
