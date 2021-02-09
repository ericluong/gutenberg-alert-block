import {registerBlockType} from '@wordpress/blocks';
import {useBlockProps, RichText} from '@wordpress/block-editor';

import AlertBlock from "./js/alert-block";

import './scss/index.scss';
import './scss/style.scss';

registerBlockType('gutenberg-alert-block/info', {
    apiVersion: 2,
    title: 'Info Alert Block',
    icon: 'info',
    category: 'text',
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'p'
        },
        content: {
            type: 'string',
            source: 'html',
            selector: 'p'
        },
    },
    example: {
        attributes: {
            title: "Title",
            content: "Content"
        }
    },
    edit: (props) => {
        const {attributes, setAttributes} = props;
        const {title, content} = attributes;
        const blockProps = useBlockProps({class: "gutenberg-alert-block gutenberg-alert-block-info"});

        const onChangeTitle = (newTitle) => {
            setAttributes({title: newTitle})
        }

        const onChangeContent = (newContent) => {
            setAttributes({content: newContent})
        }

        return <div {...blockProps}>
            <RichText tagName="p" value={title} onChange={onChangeTitle} placeholder="Title"/>
            <RichText tagName="p" value={content} onChange={onChangeContent} placeholder="Content"/>
        </div>
    },
    save: (props) => {
        const {attributes} = props;
        const {title, content} = attributes;
        const blockProps = useBlockProps.save({class: "gutenberg-alert-block gutenberg-alert-block-info"});
        return <AlertBlock {...blockProps} icon="info" title={title} content={content}/>
    }
});