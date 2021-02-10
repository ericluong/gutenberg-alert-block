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
            type: 'array',
            source: 'children',
            selector: '.gutenberg-alert-block-title'
        },
        body: {
            type: 'array',
            source: 'children',
            selector: '.gutenberg-alert-block-body'
        },
    },
    example: {
        body: {
            title: "Title",
            content: "Body"
        }
    },
    edit: (props) => {
        const {attributes, setAttributes} = props;
        const {title, body} = attributes;

        const blockProps = useBlockProps();
        blockProps.className += ` gutenberg-alert-block`;

        const onChangeTitle = (newTitle) => {
            setAttributes({title: newTitle})
        }

        const onChangeBody = (newBody) => {
            setAttributes({body: newBody})
        }

        return <div {...blockProps}>
            <RichText tagName="p" value={title} onChange={onChangeTitle} placeholder="Title"
                      keepPlaceholderOnFocus={true}/>
            <RichText tagName="p" value={body} onChange={onChangeBody} placeholder="Body"
                      keepPlaceholderOnFocus={true}/>
        </div>
    },
    save: (props) => {
        const {attributes} = props;
        const {title, body} = attributes;

        const blockProps = useBlockProps.save();

        return <AlertBlock title={title} body={body} {...blockProps} icon="info"/>
    }
});