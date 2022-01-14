import React from 'react';

export default function({questions}) {
    return (
        <table className="table">
			<thead>
				<tr>
					<td>Question</td>
					<td>Created at</td>
					<td></td>
				</tr>
			</thead>
			<tbody>
				{(!questions || !questions.length) && <tr><td colSpan="2">No questions yet.</td></tr>}

				{questions.map(question => (
					<tr key={question.id}>
						<td>{question.quetion}</td>
						<td>{dayjs(question.created_at).format('DD/MM/YYYY')}</td>
						<td>
							
						</td>
					</tr>
				))}
			</tbody>
		</table>
    )
}