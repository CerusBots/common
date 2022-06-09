export interface APIObject {
	id: number
	created: Date
}

export interface APIList<T extends APIObject> {
	list: T[]
	offset: number
	size: number
	total: number
}

export interface APIUser extends APIObject {
	banned: boolean
	type: 'default' | 'admin'
}
