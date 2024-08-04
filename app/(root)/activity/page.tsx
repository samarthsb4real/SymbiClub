

import UserCard from "@/components/cards/UserCard";
import PostsTab from "@/components/shared/PostsTab";
import ProfileHeader from "@/components/shared/ProfileHeader";
import { profileTabs } from "@/constants";
import { fetchUser, fetchUserPosts, fetchUsers, getActivity } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { TabsTrigger } from "@radix-ui/react-tabs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function Page() {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect('/onboarding');

    const activity = await getActivity(userInfo._id);


    return (
        <section>
            <h1 className="head-text mb-10">Activity</h1>
            <section className="mt-10 flex flex-col gap-6">
                {activity.length > 0
                    ? (<>{
                        activity.map((activity) => (
                            <Link key={activity._id} href={`/post/${activity.parentId}`}>
                                <article className="activity-card">
                                    <Image
                                        src={activity.author.image}
                                        alt="profile"
                                        width={20}
                                        height={20}
                                        className="rounded-full object-cover"
                                    />
                                    <p className="!text-small-regular text-gray-400"><span className=" text-white font-semibold">{activity.author.name}</span>{" "}replied to your note,</p>
                                </article>
                            </Link>
                        ))
                    }
                    </>) : <p className="!text-base-regular text-light-3">No Activity yet</p>}
            </section>
        </section>
    )
}


export default Page