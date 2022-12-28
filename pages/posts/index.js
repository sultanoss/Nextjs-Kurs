import Head from "next/head";
import { Fragment } from "react";

import AllPosts from "../../components/posts/all-post";
import { getAllPosts } from "../../lib/posts-util";

function allPostsPage(props) {

    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="A list of all Posts" />
            </Head>
            <AllPosts posts={props.posts} />
        </Fragment>

    )
}

export function getStaticProps() {

    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        }
    }
}

export default allPostsPage;