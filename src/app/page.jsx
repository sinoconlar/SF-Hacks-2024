import { deletePost, readPost } from "./create/actions";

export default async function Home() {
  const data = await readPost();
  return (
    <div className="min-h-screen flex flex-col gap-5 items-center py-14">
      {data?.map((post, index) => {
        const deleteFunc = deletePost.bind(null, post.id);
        return (
          <div className="flex flex-col p-4 gap-3 text-white" key={index}>
            <h3 className="text-lg font-bold">{post.title}</h3>
            <p className="text-sm italic">{post.username}</p>
            <p className="text-sm">{post.location}</p>
            <p className="text-sm">{post.description}</p>
            <form action={deleteFunc}>
              <button>delete post</button>
            </form>
          </div>
        );
      })}
    </div>
  );
}
