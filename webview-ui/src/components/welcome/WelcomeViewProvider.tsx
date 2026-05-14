import { useCallback, useState } from "react"

import type { ProviderSettings } from "@roo-code/types"

import { useExtensionState } from "@src/context/ExtensionStateContext"
import { validateApiConfiguration } from "@src/utils/validate"
import { vscode } from "@src/utils/vscode"
import { useAppTranslation } from "@src/i18n/TranslationContext"
import { Button } from "@src/components/ui"

import ApiOptions from "../settings/ApiOptions"
import { Tab, TabContent } from "../common/Tab"

import { Brain } from "lucide-react"

const WelcomeViewProvider = () => {
	const { apiConfiguration, currentApiConfigName, setApiConfiguration, uriScheme } = useExtensionState()
	const { t } = useAppTranslation()
	const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)

	// Memoize the setApiConfigurationField function to pass to ApiOptions
	const setApiConfigurationFieldForApiOptions = useCallback(
		<K extends keyof ProviderSettings>(field: K, value: ProviderSettings[K]) => {
			setApiConfiguration({ [field]: value })
		},
		[setApiConfiguration],
	)

	const handleSave = useCallback(() => {
		const error = apiConfiguration ? validateApiConfiguration(apiConfiguration) : undefined

		if (error) {
			setErrorMessage(error)
			return
		}

		setErrorMessage(undefined)
		vscode.postMessage({ type: "upsertApiConfiguration", text: currentApiConfigName, apiConfiguration })
	}, [apiConfiguration, currentApiConfigName])

	return (
		<Tab>
			<TabContent className="flex flex-col gap-4 p-6 justify-center">
				<Brain className="size-8" strokeWidth={1.5} />
				<h2 className="mt-0 mb-0 text-xl">{t("welcome:providerSignup.useAnotherProvider")}</h2>

				<p className="text-base text-vscode-descriptionForeground mt-0">
					{t("welcome:providerSignup.useAnotherProviderDescription")}
				</p>

				<ApiOptions
					fromWelcomeView
					apiConfiguration={apiConfiguration || {}}
					uriScheme={uriScheme}
					setApiConfigurationField={setApiConfigurationFieldForApiOptions}
					errorMessage={errorMessage}
					setErrorMessage={setErrorMessage}
				/>

				<div className="flex gap-2 mt-2">
					<Button onClick={handleSave} variant="primary">
						{t("welcome:providerSignup.finish")} →
					</Button>
				</div>
			</TabContent>
		</Tab>
	)
}

export default WelcomeViewProvider
