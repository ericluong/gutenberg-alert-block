import {registerBlockType} from '@wordpress/blocks';
import {useBlockProps} from '@wordpress/block-editor';

import './index.scss';
import './style.scss';

registerBlockType('gutenberg-alert-block/info', {
    apiVersion: 2,
    title: 'Info Alert Block',
    icon: 'info',
    category: 'text',
    edit: () => {
        const blockProps = useBlockProps();
        return <div {...blockProps}>Info Alert Block</div>
    },
    save: () => {
        const blockProps = useBlockProps.save();
        return <div {...blockProps}>Info Alert Block</div>
    }
});