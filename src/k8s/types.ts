import * as k8s from '@kubernetes/client-node'

export type BotCode = { fromString: { value: string } }

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
	id: string
	code: BotCode
}

export interface BotWebhookResource {
	apiVersion: string
	kind: string
	metadata: k8s.V1ObjectMeta
	spec?: BotWebhookResourceSpec
}

export type UserSpec = { discordID: string } | { auth0ID: string }
export type BotTeamMemberSpec = { role: string } & UserSpec

export interface BotResource {
	apiVersion: string
	kind: string
	metadata: k8s.V1ObjectMeta
	spec?: {
		token: string
		intents: string[]
		owner: UserSpec
		repo?: {
			depth?: number
			ref?: string
			url: string
		}
		commands?: ({ spec: BotCommandResourceSpec } | { ref: string })[]
		messageHooks?: ({ spec: BotMessageHookResourceSpec } | { ref: string })[]
		webhooks?: ({ spec: BotWebhookResourceSpec } | { ref: string })[]
		members?: ({ spec: BotTeamMemberSpec } | { ref: string })[]
	}
}

export interface BotListResource {
	apiVersion: string
	kind: string
	metadata: k8s.V1ListMeta
	items?: Array<BotResource>
}

export interface BotRunnerResourceSpec {
	bots: string[]
}

export interface BotRunnerResource {
	apiVersion: string
	kind: string
	metadata: k8s.V1ObjectMeta
	spec?: BotRunnerResourceSpec
}

export interface BotRunnerListResource {
	apiVersion: string
	kind: string
	metadata: k8s.V1ListMeta
	items?: Array<BotRunnerResource>
}
