import FeedCard from "~/components/FeedCard";
import TabsLayout from "~/layout/Tabs";
import { api } from "~/utils/api";

export default function Home() {
  const allPosts = api.posts.findAllPost.useQuery();
  const { isRefetching } = allPosts;

  return (
    <TabsLayout title="Feed">
      <div className="flex h-full max-h-[90vh] w-full flex-col items-center justify-start gap-3 overflow-y-auto pb-16 pt-[85px]">
        {allPosts.data
          ?.map((post, index) => (
            <FeedCard isLoading={isRefetching} post={post} key={index} />
          ))
          .reverse()}
      </div>
    </TabsLayout>
  );
}
