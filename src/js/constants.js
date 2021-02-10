export const BLOCK_CLASS_NAME = "gutenberg-alert-block";
export const TEXT_CLASS_NAME = `${BLOCK_CLASS_NAME}__text`;
export const TITLE_CLASS_NAME = `${BLOCK_CLASS_NAME}__title`;
export const BODY_CLASS_NAME = `${BLOCK_CLASS_NAME}__body`;

const BLOCK_PREFIX = "gutenberg-alert-block";

export const BLOCKS = [
    {
        name: `${BLOCK_PREFIX}/info`,
        title: 'Info Alert Block',
        editorIcon: 'info',
        frontIcon: 'info'
    },
    {
        name: `${BLOCK_PREFIX}/warning`,
        title: 'Warning Alert Block',
        editorIcon: 'warning',
        frontIcon: 'warning'
    }
];