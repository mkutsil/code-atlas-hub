import classes from './Title.module.scss'

const Title = ({text}: {text: string}) => (
  <div className={classes.titleWrap}> 
    <h1 className={classes.title}>{text}</h1>
	</div>
);


export default Title;