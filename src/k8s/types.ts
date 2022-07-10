import * as k8s from '@kubernetes/client-node'

export interface BotCode {
	fromString: { value: string }
	fromRepo: { path: string; repo: string; ref: string }
}

export interface BotCommandResourceSpec {
	name: string
	description: string
	code: BotCode
}

export interface BotCommandResource {
	apiVersion: string
	kind: string
	metadata: k8s.V1ObjectMeta
	spec?: BotCommandResourceSpec
}

export interface BotMessageHookResourceSpec {
	regex: RegExp
	code: BotCode
}

export interface BotMessageHookResource {
	apiVersion: string
	kind: string
	metadata: k8s.V1ObjectMeta
	spec?: BotMessageHookResourceSpec
}

export interface BotWebhookResourceSpec {
	secret: string
	code: BotCode
}

export interface BotWebhookResource {
	apiVersion: string
	kind: string
	metadata: k8s.V1ObjectMeta
	spec?: BotWebhookResourceSpec
}

export type UserSpec = { discordID: string } | { apiUID: string }
export type BotTeamMemberSpec = { role: string } & UserSpec

export interface BotResource {
	apiVersion: string
	kind: string
	metadata: k8s.V1ObjectMeta
	spec?: {
		token: string
		intents: string[]
		owner: UserSpec
		commands?: BotCommandResourceSpec[]
		messageHooks?: BotMessageHookResourceSpec[]
		webhooks?: BotWebhookResourceSpec[]
		members?: BotTeamMemberSpec[]
	}
}
