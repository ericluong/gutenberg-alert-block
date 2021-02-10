import {useBlockProps, RichText} from '@wordpress/block-editor';
import {Icon} from '@wordpress/components';

import {BLOCK_CLASS_NAME, BODY_CLASS_NAME, TEXT_CLASS_NAME, TITLE_CLASS_NAME} from "./constants";

export default function settingFactory(title, editorIcon, frontIcon) {
    return {
        apiVersion: 2,
        title,
        icon: editorIcon,
        category: 'text',
        attributes: {
            title: {
                type: 'array',
                source: 'children',
                selector: `.${TITLE_CLASS_NAME}`
            },
            body: {
                type: 'array',
                source: 'children',
                selector: `.${BODY_CLASS_NAME}`
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
            blockProps.className += ` ${BLOCK_CLASS_NAME}`;

            const onChangeTitle = (newTitle) => {
                setAttributes({title: newTitle})
            }

            const onChangeBody = (newBody) => {
                setAttributes({body: newBody})
            }

            return <div {...blockProps}>
                <Icon icon={frontIcon}/>
                <div className={TEXT_CLASS_NAME}>
                    <RichText tagName="p" value={title} onChange={onChangeTitle} placeholder="Title"
                              keepPlaceholderOnFocus={true} className={TITLE_CLASS_NAME}/>
                    <RichText tagName="p" value={body} onChange={onChangeBody} placeholder="Body"
                              keepPlaceholderOnFocus={true} className={BODY_CLASS_NAME}/>
                </div>
            </div>
        },
        save: (props) => {
            const {attributes} = props;
            const {title, body} = attributes;

            const blockProps = useBlockProps.save();
            blockProps.className += ` ${BLOCK_CLASS_NAME}`;

            return <div {...blockProps}>
                <Icon icon={frontIcon}/>
                <div className={TEXT_CLASS_NAME}>
                    <RichText.Content tagName="p" className={TITLE_CLASS_NAME} value={title}/>
                    <RichText.Content tagName="p" className={BODY_CLASS_NAME} value={body}/>
                </div>
            </div>
        }
    }
}