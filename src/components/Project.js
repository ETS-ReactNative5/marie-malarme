import React from 'react'
import { Link } from '@reach/router'

const Project = ({ project }) => 
	<Link to={project.id} className='project'>
		<div style={{ background: `center / cover no-repeat url(${project.thumbnailImage})` }} />
		<h4>
			{project.title}
			<br/>
			{project.shortDescription}
		</h4>
	</Link>	

export default Project