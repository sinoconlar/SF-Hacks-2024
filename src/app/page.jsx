import GoogleMaps from "./components/GoogleMaps";
import { readPost } from "../lib/actions";
import PostComponent from "./components/PostComponent";

export default async function Home() {
  const data = await readPost();
  return (
    <div>
      <GoogleMaps />
      <div className="min-h-screen flex flex-col gap-8 items-center py-14">
        <h2>Featured Businesses</h2>
        {data?.map((post, index) => {
          return (
            <PostComponent
              key={index}
              id={post.id}
              title={post.title}
              username={post.username}
              location={post.location}
              description={post.description}
              author={post.author}
              showFullPage={false}
            ></PostComponent>
          );
        })}
      </div>
    </div>
  );
}
