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
import { Input } from '../ui/input';
import { zodResolver } from '@hookform/resolvers/zod'



import { usePathname, useRouter } from 'next/navigation';
import { CommentValidation } from "@/lib/validations/post";
import { addCommentToPost, createPost } from "@/lib/actions/post.actions";
import Image from "next/image";






interface Props {
    postId: string;
    currentUserImg: string;
    currentUserId: string;
}


const Comment = ({ postId, currentUserImg, currentUserId }: Props) => {

    const router = useRouter();
    const pathname = usePathname();

    const form = useForm({
        resolver: zodResolver(CommentValidation),
        defaultValues: {
            post: '',
        }
    })

    const onSubmit = async (values: z.infer<typeof CommentValidation>) => {

        await addCommentToPost(postId, values.post, JSON.parse(currentUserId), pathname);

        form.reset();

    }


    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="comment-form">

                    <FormField
                        control={form.control}
                        name="post"
                        render={({ field }) => (
                            <FormItem className='flex w-full items-center gap-2'>
                                <FormLabel>
                                    <Image src={currentUserImg} alt="Profile Image" width={48} height={48} className="rounded-full object-cover" />
                                </FormLabel>
                                <FormControl className='border-none bg-transparent'>
                                    <Input type="text" placeholder="Comment..." className="no-focus text-light-1 outline-none"
                                        {...field}
                                    />

                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="bg-red-500">
                        Reply
                    </Button>

                </form>

            </Form>
        </div>
    )
}

export default Comment;