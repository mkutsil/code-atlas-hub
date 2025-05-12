import Button from 'shared/ui/Button/Button';
import {  Copy } from 'lucide-react';

import classes from './ArticleCodeBlockComponent.module.scss';
interface ArticleCodeBlockComponentProps {
    code: string;
}
 
const ArticleCodeBlockComponent = (props : ArticleCodeBlockComponentProps) => {
    const { code } = props;

    const handleCopyCode = () => {
        navigator.clipboard.writeText(code);
    };
	
    return ( 
        <div className={classes.articleCodeBlockComponent}>
            <Button
                className={classes.copyButton} 
                onClick={handleCopyCode}
            >
                <Copy/>
            </Button>
            <pre>
                <code>
                    {code}
                </code>
            </pre>
        </div>
    );
};
 
export default ArticleCodeBlockComponent;