import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function({href, className, children}) {
	return (
		<Link href={href} className={`button ${className}`}>{children}</Link>
	)
}