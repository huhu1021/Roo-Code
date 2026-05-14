// npx vitest run src/__tests__/index.test.ts

import { generatePackageJson } from "../index.js"

describe("generatePackageJson", () => {
	it("should be a test", () => {
		const generatedPackageJson = generatePackageJson({
			packageJson: {
				name: "jxmh-code-chinese",
				displayName: "%extension.displayName%",
				description: "%extension.description%",
				publisher: "RooVeterinaryInc",
				version: "3.17.2",
				icon: "assets/icons/icon.png",
				contributes: {
					viewsContainers: {
						activitybar: [
							{
								id: "jxmh-code-chinese-ActivityBar",
								title: "%views.activitybar.title%",
								icon: "assets/icons/icon.svg",
							},
						],
					},
					views: {
						"jxmh-code-chinese-ActivityBar": [
							{
								type: "webview",
								id: "jxmh-code-chinese.SidebarProvider",
								name: "",
							},
						],
					},
					commands: [
						{
							command: "jxmh-code-chinese.plusButtonClicked",
							title: "%command.newTask.title%",
							icon: "$(edit)",
						},
						{
							command: "jxmh-code-chinese.openInNewTab",
							title: "%command.openInNewTab.title%",
							category: "%configuration.title%",
						},
					],
					menus: {
						"editor/context": [
							{
								submenu: "jxmh-code-chinese.contextMenu",
								group: "navigation",
							},
						],
						"jxmh-code-chinese.contextMenu": [
							{
								command: "jxmh-code-chinese.addToContext",
								group: "1_actions@1",
							},
						],
						"editor/title": [
							{
								command: "jxmh-code-chinese.plusButtonClicked",
								group: "navigation@1",
								when: "activeWebviewPanelId == jxmh-code-chinese.TabPanelProvider",
							},
							{
								command: "jxmh-code-chinese.settingsButtonClicked",
								group: "navigation@6",
								when: "activeWebviewPanelId == jxmh-code-chinese.TabPanelProvider",
							},
							{
								command: "jxmh-code-chinese.accountButtonClicked",
								group: "navigation@6",
								when: "activeWebviewPanelId == jxmh-code-chinese.TabPanelProvider",
							},
						],
					},
					submenus: [
						{
							id: "jxmh-code-chinese.contextMenu",
							label: "%views.contextMenu.label%",
						},
						{
							id: "jxmh-code-chinese.terminalMenu",
							label: "%views.terminalMenu.label%",
						},
					],
					configuration: {
						title: "%configuration.title%",
						properties: {
							"jxmh-code-chinese.allowedCommands": {
								type: "array",
								items: {
									type: "string",
								},
								default: ["npm test", "npm install", "tsc", "git log", "git diff", "git show"],
								description: "%commands.allowedCommands.description%",
							},
							"jxmh-code-chinese.customStoragePath": {
								type: "string",
								default: "",
								description: "%settings.customStoragePath.description%",
							},
						},
					},
				},
				scripts: {
					lint: "eslint **/*.ts",
				},
			},
			overrideJson: {
				name: "roo-code-nightly",
				displayName: "Roo Code Nightly",
				publisher: "RooVeterinaryInc",
				version: "0.0.1",
				icon: "assets/icons/icon-nightly.png",
				scripts: {},
			},
			substitution: ["jxmh-code-chinese", "roo-code-nightly"],
		})

		expect(generatedPackageJson).toStrictEqual({
			name: "roo-code-nightly",
			displayName: "Roo Code Nightly",
			description: "%extension.description%",
			publisher: "RooVeterinaryInc",
			version: "0.0.1",
			icon: "assets/icons/icon-nightly.png",
			contributes: {
				viewsContainers: {
					activitybar: [
						{
							id: "roo-code-nightly-ActivityBar",
							title: "%views.activitybar.title%",
							icon: "assets/icons/icon.svg",
						},
					],
				},
				views: {
					"roo-code-nightly-ActivityBar": [
						{
							type: "webview",
							id: "roo-code-nightly.SidebarProvider",
							name: "",
						},
					],
				},
				commands: [
					{
						command: "roo-code-nightly.plusButtonClicked",
						title: "%command.newTask.title%",
						icon: "$(edit)",
					},
					{
						command: "roo-code-nightly.openInNewTab",
						title: "%command.openInNewTab.title%",
						category: "%configuration.title%",
					},
				],
				menus: {
					"editor/context": [
						{
							submenu: "roo-code-nightly.contextMenu",
							group: "navigation",
						},
					],
					"roo-code-nightly.contextMenu": [
						{
							command: "roo-code-nightly.addToContext",
							group: "1_actions@1",
						},
					],
					"editor/title": [
						{
							command: "roo-code-nightly.plusButtonClicked",
							group: "navigation@1",
							when: "activeWebviewPanelId == roo-code-nightly.TabPanelProvider",
						},
						{
							command: "roo-code-nightly.settingsButtonClicked",
							group: "navigation@6",
							when: "activeWebviewPanelId == roo-code-nightly.TabPanelProvider",
						},
						{
							command: "roo-code-nightly.accountButtonClicked",
							group: "navigation@6",
							when: "activeWebviewPanelId == roo-code-nightly.TabPanelProvider",
						},
					],
				},
				submenus: [
					{
						id: "roo-code-nightly.contextMenu",
						label: "%views.contextMenu.label%",
					},
					{
						id: "roo-code-nightly.terminalMenu",
						label: "%views.terminalMenu.label%",
					},
				],
				configuration: {
					title: "%configuration.title%",
					properties: {
						"roo-code-nightly.allowedCommands": {
							type: "array",
							items: {
								type: "string",
							},
							default: ["npm test", "npm install", "tsc", "git log", "git diff", "git show"],
							description: "%commands.allowedCommands.description%",
						},
						"roo-code-nightly.customStoragePath": {
							type: "string",
							default: "",
							description: "%settings.customStoragePath.description%",
						},
					},
				},
			},
			scripts: {},
		})
	})
})
