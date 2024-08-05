import { currentUser } from "@clerk/nextjs/server";

import UserCard from "../cards/UserCard";

import { fetchCommunities } from "@/lib/actions/community.actions";
import { fetchUsers } from "@/lib/actions/user.actions";
import CommunityCard from "../cards/CommunityCard";

async function RightSidebar() {
    const user = await currentUser();
    if (!user) return null;

    const similarMinds = await fetchUsers({
        userId: user.id,
        pageSize: 4,
    });

    const suggestedCOmmunities = await fetchCommunities({ pageSize: 4 });

    const result = await fetchCommunities({
        searchString: '',
        pageNumber: 1,
        pageSize: 25
    });

    return (
        <section className='custom-scrollbar rightsidebar'>
            <div className='flex flex-1 flex-col justify-start'>
                <h3 className='text-heading4-medium text-light-1'>
                    Suggested Clubs
                </h3>

                <div className='mt-7 flex w-full flex-col gap-8 shadow-2xl'>
                    {result.communities.length === 0 ? (
                        <p className="no-result">No Communities</p>
                    ) : (<>
                        {result.communities.map((community) => (
                            <CommunityCard
                                key={community.id}
                                id={community.id}
                                name={community.name}
                                username={community.username}
                                imgUrl={community.image}
                                bio={community.bio}
                                members={community.members}
                            />
                        ))}</>)}

                </div>
            </div>
        </section>
    );
}

export default RightSidebar;