import { classNames } from 'shared/lib/classNames/classNames';
import Text, { TextSize } from 'shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
    title?: string;
    paragraphs: string[];
    className?: string;
}

const ArticleTextBlockComponent = (props : ArticleTextBlockComponentProps) => {
    const { title, paragraphs, className } = props;
	
    return ( 
        <div className={classNames('ArticleTextBlockComponent', {}, [ className ])}>
            <Text title={title} size={TextSize.M}/>

            {paragraphs.length && paragraphs.map((paragraph, index) => (
                <Text 
                    key={index} 
                    text={paragraph} 
                    size={TextSize.S}
                />
            ))}
        </div>
    );
};
 
export default ArticleTextBlockComponent;