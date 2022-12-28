import classes from "./all-post.module.css"
import PostsGid from "./posts-grid"

function AllPosts(props) {

    return (

        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostsGid posts={props.posts} />
        </section>
    )

}

export default AllPosts;