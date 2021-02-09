import {registerBlockType} from '@wordpress/blocks';

registerBlockType('gutenberg-alert-block/info', {
    title: 'Info Alert Block',
    icon: 'info',
    category: 'text',
    edit: () => <div>Info Alert Block</div>,
    save: () => <div>Info Alert Block</div>,
});