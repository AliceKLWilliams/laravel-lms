import React from 'react';
import dayjs from 'dayjs';
import Authenticated from '@/Layouts/Authenticated';
import UserCoursesTable from '@/Components/Users/UserCoursesTable';

const Show = ({user, courses, role, auth, errors}) => {
    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">User - {user.name}</h2>}>

			<div className="flex flex-col gap-6">
				<div>
					<p className="font-bold mb-2">Name</p>
					<p className="mb-0">{user.name}</p>
				</div>

				<div>
					<p className="font-bold mb-2">Email</p>
					<p className="mb-0">{user.email}</p>
				</div>

				<div>
					<p className="font-bold mb-2">Role</p>
					<p className="mb-0">{role.display_name}</p>
				</div>

				<div>
					<p className="font-bold mb-2">Created</p>
					<p className="mb-0">{dayjs(user.created_at).format('DD/MM/YYYY HH:mm')}</p>
				</div>

				<div>
					<p className="font-bold mb-2">Courses</p>
					<UserCoursesTable courses={courses} user={user} />
				</div>
			</div>
        </Authenticated>
    )
}

export default Show;