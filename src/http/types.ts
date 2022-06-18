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
	email?: string
	discordID?: string
	username?: string
	discriminator?: string
	avatarHash?: string
}

export interface APIBot extends APIObject {
	isPremium: boolean
	isPublic: boolean
	running: boolean
	intents: string[]
	token?: string
	name?: string
	description?: string
	discordID?: string
	icon?: string
}
