"use client";
import React from "react";
import { createPost } from "../../lib/actions";
import { useRouter } from "next/navigation";
import { Button } from "../../../@/components/ui/button";
import { useForm } from "react-hook-form";
import { Textarea } from "../../../@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../@/components/ui/form";
import { Input } from "../../../@/components/ui/input";

const formSchema = z.object({
  title: z.string().min(8).max(100),
  location: z.string().min(8).max(100),
  description: z.string().min(50),
});

const PostForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      location: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await createPost(
      values.title,
      values.location,
      values.description
    );
    router.push("/");
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormDescription>What is your title?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Location" {...field} />
                </FormControl>
                <FormDescription>
                  Where is your business located?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Description" {...field} />
                </FormControl>
                <FormDescription>Tell us what happened.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>Submit post</Button>
        </form>
      </Form>
    </div>
  );
};

export default PostForm;
