
import UserCard from "@/components/cards/UserCard";
import PostsTab from "@/components/shared/PostsTab";
import ProfileHeader from "@/components/shared/ProfileHeader";
import { profileTabs } from "@/constants";
import { fetchUser, fetchUserPosts, fetchUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { redirect } from "next/navigation";

async function Page() {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect('/onboarding');


    //fetch users
    const result = await fetchUsers({
        userId: user.id,
        searchString: '',
        pageNumber: 1,
        pageSize: 25
    });

    return (
        <section>
            <h1 className="head-text mb-10">Search</h1>
            //search
            <div>
                {result.users.length === 0 ? (
                    <p className="no-result">no users</p>
                ) : (<>
                    {result.users.map((person) => (
                        <UserCard
                            key={person.id}
                            id={person.id}
                            name={person.name}
                            username={person.username}
                            imgUrl={person.image}
                            personType='User'
                        />
                    ))}</>)}

            </div>

        </section>
    )
}

export default Page