import { classNames } from 'shared/lib/classNames/classNames';
import Text, { TextSize } from 'shared/ui/Text/Text';
import classes from './ArticleImageBlockComponent.module.scss';
interface ArticleImageBlockComponentProps {
    className?: string;
    src: string;
    alt: string;
    title: string;
}
 
const ArticleImageBlockComponent = (props : ArticleImageBlockComponentProps) => {
    const { className, src, alt, title } = props;
	
    return ( 
        <div className={classNames(classes.articleImageBlockComponent, {}, [ className ])}>
            <img src={src} alt={alt} />
            <Text text={title} size={TextSize.XS}/>
        </div>
    );
};
 
export default ArticleImageBlockComponent;