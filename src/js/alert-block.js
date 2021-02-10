import {RichText} from '@wordpress/block-editor';
import {Icon} from '@wordpress/components';

function AlertBlock({title, body, icon, ...props}) {
    props.className += ` gutenberg-alert-block`;

    return <div {...props}>
        <Icon icon={icon}/>
        <div class="gutenberg-alert-block-text">
            <RichText.Content tagName="p" className="gutenberg-alert-block-title" value={title}/>
            <RichText.Content tagName="p" className="gutenberg-alert-block-body" value={body}/>
        </div>
    </div>
}

export default AlertBlock;