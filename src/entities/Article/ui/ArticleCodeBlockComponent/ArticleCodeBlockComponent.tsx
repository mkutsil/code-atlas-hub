import classes from './ArticleCodeBlockComponent.module.scss';
interface ArticleCodeBlockComponentProps {
    code: string;
}
 
const ArticleCodeBlockComponent = (props : ArticleCodeBlockComponentProps) => {
    const { code } = props;
	
    return ( 
        <div className={classes.articleCodeBlockComponent}>
            <pre>
                <code>
                    {code}
                </code>
            </pre>
        </div>
    );
};
 
export default ArticleCodeBlockComponent;