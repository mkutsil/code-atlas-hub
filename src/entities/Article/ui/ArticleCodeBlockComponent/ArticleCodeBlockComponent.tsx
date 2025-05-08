interface ArticleCodeBlockComponentProps {
	id?: string;
}
 
const ArticleCodeBlockComponent = (props : ArticleCodeBlockComponentProps) => {
    const { id } = props;
	
    return ( <h1>ddd - {id || 'dw'}</h1> );
};
 
export default ArticleCodeBlockComponent;