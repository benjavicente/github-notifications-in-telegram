import { env } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';

import { App } from 'octokit';
export type { OAuthApp } from 'octokit';

export const githubApp = new App({
	appId: env.GITHUB_APP_ID ?? '000',
	oauth: {
		clientId: publicEnv.PUBLIC_GITHUB_CLIENT_ID,
		clientSecret: env.GITHUB_CLIENT_SECRET
	},
	privateKey: env.GITHUB_PRIVATE_KEY ?? 'BAD-KEY',
	webhooks: {
		secret: env.GITHUB_WEBHOOK_SECRET ?? 'BAD-SECRET'
	}
});
