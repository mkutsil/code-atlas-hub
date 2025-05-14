import { memo } from 'react';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import ArticleCodeBlockComponent from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleImageBlockComponent from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleTextBlockComponent from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsContentProps {
		blocks: ArticleBlock[];	
}

const ArticleDetailsContent = ({ blocks }: ArticleDetailsContentProps) => {
    const renderBlock = (block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} code={block.code} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} {...block} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} {...block} />;
        default:
            return null;
        }
    };

    return <>{blocks.map(renderBlock)}</>;
};

export default memo(ArticleDetailsContent);