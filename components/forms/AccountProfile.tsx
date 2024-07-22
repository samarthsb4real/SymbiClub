"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import { UserValidation } from '@/lib/validations/user';
import { z } from "zod";
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
import { Input } from "@/components/ui/input"
import Image from 'next/image';
import { ChangeEvent } from 'react';
import { Textarea } from '../ui/textarea';

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


const AccountProfile = ({ user, btnTitle }: Props) => {

    const form = useForm({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            profile_photo: user?.image || "",
            name: user?.name || "",
            username: user?.username || "",
            bio: user?.bio || ""
        }
    })

    const handleImage = (e: ChangeEvent, fieldChange: (value: string) => void) => {
        e.preventDefault();
    }

    function onSubmit(values: z.infer<typeof UserValidation>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col justify-start gap-10">
                <FormField
                    control={form.control}
                    name="profile_photo"
                    render={({ field }) => (
                        <FormItem className='flex items-center gap-4'>
                            <FormLabel className='account-form_image-label'>
                                {
                                    field.value ? (
                                        <Image src={field.value}
                                            alt='profile photo'
                                            width={96}
                                            height={96}
                                            priority
                                            className='rounded-full object-contain cursor-pointer'
                                        />
                                    ) :
                                        (
                                            <Image src="/assets/profile.svg"
                                                alt='profile photo'
                                                width={24}
                                                height={24}
                                                className='object-contain cursor-pointer' />

                                        )
                                }
                            </FormLabel>
                            <FormControl className='flex-1 text-base-semibold text-gray-200'>
                                <Input type='file'
                                    accept='image/*'
                                    placeholder='Upload a photo'
                                    className='account-form_image-input cursor-pointer'
                                    onChange={(e) => handleImage(e, field.onChange)}
                                />
                            </FormControl>

                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className='flex flex-col w-full gap-1'>
                            <FormLabel className='text-base-semibold text-light-2'>
                                Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    className='account-form_input no-focus'
                                    {...field}
                                />

                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className='flex flex-col w-full gap-1'>
                            <FormLabel className='text-base-semibold text-light-2'>
                                Username
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    className='account-form_input no-focus'
                                    {...field}
                                />

                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem className='flex flex-col w-full gap-1'>
                            <FormLabel className='text-base-semibold text-light-2'>
                                Bio
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    rows={10}
                                    className='account-form_input no-focus'
                                    {...field}
                                />

                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button type="submit" className='bg-red-700 hover:bg-red-950'>Submit</Button>
            </form>
        </Form>
    )
}

export default AccountProfile;