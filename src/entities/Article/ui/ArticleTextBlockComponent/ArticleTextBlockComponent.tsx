interface ArticleTextBlockComponentProps {
	id?: string;
}
 
const ArticleTextBlockComponent = (props : ArticleTextBlockComponentProps) => {
    const { id } = props;
	
    return ( <h1>ddd - {id || 'dw'}</h1> );
};
 
export default ArticleTextBlockComponent;