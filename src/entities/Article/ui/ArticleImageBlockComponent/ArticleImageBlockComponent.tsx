interface ArticleImageBlockComponentProps {
	id?: string;
}
 
const ArticleImageBlockComponent = (props : ArticleImageBlockComponentProps) => {
    const { id } = props;
	
    return ( <h1>ddd - {id || 'dw'}</h1> );
};
 
export default ArticleImageBlockComponent;