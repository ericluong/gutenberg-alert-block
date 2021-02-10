import { registerBlockType } from '@wordpress/blocks';

import { BLOCKS } from './js/constants';
import settingFactory from './js/settings-factory';

import './scss/index.scss';
import './scss/style.scss';

BLOCKS.forEach((block) => {
	const { name, title, editorIcon, frontIcon } = block;
	registerBlockType(name, settingFactory(title, editorIcon, frontIcon));
});
