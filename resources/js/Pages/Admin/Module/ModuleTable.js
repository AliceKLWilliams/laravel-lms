import dayjs from 'dayjs'
import React from 'react'

export default function({modules}) {
	return (
		<table class="table">
			<thead>
				<tr>
					<td>Title</td>
					<td>Created at</td>
				</tr>
			</thead>
			<tbody>
				{(!modules || !modules.length) && <tr><td colSpan="2">No modules yet.</td></tr>}

				{modules.map(module => (
					<tr key={module.id}>
						<td>{module.title}</td>
						<td>{dayjs(module.created_at).format('DD/MM/YYYY')}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}