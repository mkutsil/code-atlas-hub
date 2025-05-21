import classes from './ArticlesPage.module.scss';
import { Article, ArticleList } from 'entities/Article';

const articlesMock = [
    {
        id: '1',
        title: 'Dolore exercitation commodo ea minim consequat nisi culpa. Nostrud anim ex mollit do quis esse Lorem esse sint veniam dolor ea mollit velit. Reprehenderit aliqua id laboris sit qui et pariatur.',
        subtitle: 'Content of article 1',
        description: 'Asperiores facere dolores dolor autem dolorum et similique omnis. Officia quos dolore vel illo consequuntur amet. Aut omnis sit est nulla accusantium veritatis nihil magnam id. Suscipit dignissimos expedita id. Quis qui molestias consequatur maiores in tenetur dolorem. Asperiores facere dolores dolor autem dolorum et similique omnis. Officia quos dolore vel illo consequuntur amet. Aut omnis sit est nulla accusantium veritatis nihil magnam id. Suscipit dignissimos expedita id. Quis qui molestias consequatur maiores in tenetur dolorem.',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        views: 100,
        createdAt: '26.02.2025',
        author: {
            id: '1',
            avatar: 'https://static.vecteezy.com/system/resources/previews/048/216/761/non_2x/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png',
            userName: 'admin',
        },
        type: [
            'IT',
            'Science'
        ],
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                title: 'Quas voluptates eveniet eligendi magni eaque.',
                paragraphs: [
                    'Elit occaecat velit velit anim labore eu amet enim ea. Ad incididunt eu sint anim et ex enim consequat occaecat veniam. Aute do fugiat fugiat eu deserunt. Aute voluptate consequat anim ullamco consectetur. Aute magna dolore proident cupidatat elit ea esse consectetur.',
                    'Proident reprehenderit qui dolor adipisicing anim sint aute nisi culpa aliqua cupidatat. Velit ipsum eiusmod est cupidatat consectetur amet. Do fugiat et ea veniam commodo sunt nostrud duis laborum irure commodo incididunt.'
                ]
            },
            {
                id: '2',
                type: 'CODE',
                code: "console.log('Hello, world!')"
            },
            {
                id: '3',
                type: 'TEXT',
                title: 'Pariatur repellendus delectus id non ex molestias velit.',
                paragraphs: [
                    'Fugiat ut laboris sint veniam. Tempor amet occaecat quis ea nostrud pariatur consectetur esse proident. Ad aute eiusmod occaecat nulla. Velit officia adipisicing velit proident occaecat excepteur mollit. Labore deserunt commodo ad ad proident labore tempor ex dolor commodo Lorem aliquip tempor. Esse sit do velit in magna commodo nisi sit.',
                    'Velit velit eu sit aute eiusmod mollit non. Irure eu officia esse exercitation ad ex tempor. Labore culpa occaecat excepteur duis occaecat. Dolor velit aliqua duis aliqua cillum excepteur in nisi cillum consectetur nulla. Laboris id officia cupidatat elit.'
                ]
            }
        ]
    }
] as Article[];

const ArticlesPage = () => (
    <div className={classes.articlesPage}>
        <ArticleList
            articles={
                new Array(16)
                    .fill(0)
                    .map((item, index) => ({
                        ...articlesMock[0],
                        id: String(index + item)
                    }))
            }
            isLoading={false}
        />
    </div>
);

export default ArticlesPage;