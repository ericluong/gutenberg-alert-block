import {registerBlockType} from '@wordpress/blocks';
import {useBlockProps} from '@wordpress/block-editor';
import {Icon} from '@wordpress/components';

import './scss/index.scss';
import './scss/style.scss';

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
        const blockProps = useBlockProps.save({class: "gutenberg-alert-block gutenberg-alert-block-info"});
        return <div {...blockProps}>
            <Icon icon="info"/>
            <div class="gutenberg-alert-block-text">
                <p class="gutenberg-alert-block-heading">Title
                </p>
                <p class="gutenberg-alert-block-content">Content
                </p>
            </div>
        </div>
    }
});