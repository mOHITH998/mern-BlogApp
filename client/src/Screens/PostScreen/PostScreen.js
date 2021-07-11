import SinglePost from '../../components/singlePost/SinglePost';
import useStyles from '../styles';

function PostScreen() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.home}>
        <SinglePost />
      </div>
    </>
  );
}

export default PostScreen;
