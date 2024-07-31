"use client"

import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from '../ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod'



import { usePathname, useRouter } from 'next/navigation';
import { PostValidation, CommentValidation } from "@/lib/validations/post";
import { createPost } from "@/lib/actions/post.actions";

// import { updateUser } from '@/lib/actions/user.actions';
// import { UserValidation } from '@/lib/validations/user';

interface Props {
    user: {
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string;
    };
    btnTitle: string;
}



function PublishPost({ userId }: { userId: string }) {

    const router = useRouter();
    const pathname = usePathname();

    const form = useForm({
        resolver: zodResolver(PostValidation),
        defaultValues: {
            post: '',
            accountId: userId,
        }
    })

    const onSubmit = async (values: z.infer<typeof PostValidation>) => {

        await createPost({ text: values.post, author: userId, communityId: null, path: pathname })
        router.push("/");

    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-12 flex flex-col justify-start gap-10">

                <FormField
                    control={form.control}
                    name="post"
                    render={({ field }) => (
                        <FormItem className='flex flex-col w-full gap-1'>
                            <FormLabel className='text-base-semibold text-light-2'>
                                Content
                            </FormLabel>
                            <FormControl className='no-focus border border-dark-4 bg-dark-3 text-light-1'
                            >
                                <Textarea
                                    rows={10}
                                    {...field}
                                />

                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="bg-red-500">
                    Post
                </Button>

            </form>

        </Form>

    )

}

export default PublishPost;