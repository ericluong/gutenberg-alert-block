import {Icon} from '@wordpress/components';

function AlertBlock({title, content, icon, ...props}) {
    return <div {...props}>
        <Icon icon={icon}/>
        <div class="gutenberg-alert-block-text">
            <p class="gutenberg-alert-block-heading">{title}</p>
            <p class="gutenberg-alert-block-content">{content}</p>
        </div>
    </div>
}

export default AlertBlock;