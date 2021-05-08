import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import pilcrow from './icons/pilcrow.svg';

export default class PlaceholderButtonUI extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('placeholder', (locale) => {
      const placeHolderButtonOnToolbar = new ButtonView(locale);

      placeHolderButtonOnToolbar.set({
        label: 'fsms-Placeholder',
        icon: pilcrow,
        tooltip: true,
      });

      placeHolderButtonOnToolbar.on('execute', () => '');

      return placeHolderButtonOnToolbar;
    });
  }
}
