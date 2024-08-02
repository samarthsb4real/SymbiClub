import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import PostCard from "../cards/PostCard";

interface Props {
    currentUserId: string;
    accountId: string;
    accountType: string;
}

// https://youtu.be/O5cmLDVTgAs?feature=shared&t=14981

const PostsTab = async ({
    currentUserId,
    accountId,
    accountType }: Props) => {

    let result = await fetchUserPosts(accountId);

    if (!result) {
        redirect('/');
    }

    return (
        <section className="mt-10 flex flex-col gap-10">
            {result.posts.map((post: any) => (

                <PostCard
                    key={post._id}
                    id={post._id}
                    currentUserId={currentUserId}
                    parentId={post.parentId}
                    content={post.text}
                    author={accountType === 'User'
                        ? { name: result.name, image: result.image, id: result.id }
                        : { name: post.author.name, image: post.author.image, id: post.author.id }
                    } 
                    community={post.community} //todo 
                    createdAt={post.createdAt}
                    comments={post.children} />
            ))}
        </section>
    )
}

export default PostsTab;