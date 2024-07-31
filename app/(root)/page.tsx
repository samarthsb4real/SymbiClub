
import PostCard from "@/components/cards/PostCard";
import { fetchPosts } from "@/lib/actions/post.actions";
import { currentUser } from "@clerk/nextjs/server";


export default async function Home() {
  const result = await fetchPosts(1, 30);
  const user = await currentUser();
  console.log(result);

  return (
    <>
      <h1 className="head-text text-white">Home Page</h1>

      <section className="mt-10 flex flex-col gap-8">
        {result.posts.length === 0 ? (
          <p>No Posts found</p>

        ) : (
          <>
            {result.posts.map((post) => (

              <PostCard key={post._id} id={post._id} currentUserId={user?.id || ""} parentId={post.parentId} content={post.text} author={post.author} community={post.community} createdAt={post.createdAt} comments={post.children} />
            ))}
          </>
        )}
      </section>
    </>
  );
}
