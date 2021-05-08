import PlaceholderButtonUI from "./placeholderbuttonui";
import Plugin from "@ckeditor/ckeditor5-core/src/plugin";

export default class Placeholder extends Plugin {
	static get requires() {
		return [PlaceholderButtonUI];
	}

	static get pluginName() {
		return "placeholder";
	}
}
