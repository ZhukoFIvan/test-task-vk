import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = (props) => (
	<ContentLoader
		speed={2}
		width={400}
		height={150}
		viewBox='0 0 400 150'
		backgroundColor='#a3a3a3'
		foregroundColor='#1d1b1b'
		{...props}
	>
		<circle cx='63' cy='87' r='44' />
		<rect x='146' y='77' rx='5' ry='5' width='140' height='19' />
		<rect x='324' y='40' rx='10' ry='10' width='68' height='15' />
		<rect x='326' y='70' rx='10' ry='10' width='65' height='15' />
		<rect x='327' y='102' rx='14' ry='14' width='64' height='15' />
	</ContentLoader>
)

export default MyLoader
