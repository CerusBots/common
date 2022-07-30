interface GitSource {
	url: string
	depth?: number
	ref?: string
	submodules?: boolean
}

interface DockerSource {
	image: string
}

export type BotSource =
	| { git: GitSource }
	| { docker: DockerSource }
	| Record<string, never>

interface BaseAction {
	type: string
	source?: { path: string } | { value: string }
}

interface BotWebhook extends BaseAction {
	type: 'webhook'
	token: string
}

interface BotMessageHook extends BaseAction {
	type: 'messageHook'
	matches: ({ regex: RegExp } | { contains: string }) & { user?: { id: string } }
}

interface BotCommand extends BaseAction {
	type: 'command'
	name: string
	description?: string
	options?: Record<
		string,
		{ type: string; description?: string; required?: boolean } & (
			| { type: 'string'; choices?: Record<string, string> }
			| { type: 'integer' | 'number' }
			| { type: 'user' }
			| { type: 'channel' }
			| { type: 'boolean' }
			| { type: 'role' }
			| { type: 'mentionable' }
			| { type: 'file' }
		)
	>
	subcommands?: Record<string, Omit<BotCommand, 'type'>>
	requires?: {
		dm?: boolean
		admin?: boolean
		perms?: boolean
	}
}

export type BotAction = BotWebhook | BotMessageHook | BotCommand

export interface BotMetadata {
	token: string
	source: BotSource
	actions?: Record<string, BotAction>
}
