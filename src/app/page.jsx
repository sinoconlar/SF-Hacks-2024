import { readPost } from "../lib/actions";
import PostComponent from "./components/PostComponent";

export default async function Home() {
  const data = await readPost();
  return (
    <div className="min-h-screen flex flex-col gap-5 items-center py-14">
      {data?.map((post, index) => {
        return (
          <PostComponent
            key={index}
            id={post.id}
            title={post.title}
            username={post.username}
            location={post.location}
            description={post.description}
            showFullPage={false}
          ></PostComponent>
        );
      })}
    </div>
  );
}
