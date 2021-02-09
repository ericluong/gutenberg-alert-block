import {registerBlockType} from '@wordpress/blocks';
import {useBlockProps} from '@wordpress/block-editor';

import AlertBlock from "./js/alert-block";

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
        return <AlertBlock {...blockProps} icon="info" title="Title" content="Content"/>
    }
});