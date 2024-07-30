import Post from "../models/post.model";
import { connectToDB } from "../mongoose";

interface Params {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
}

export async function createPost({ text, author, communityId, path }: Params) {
  connectToDB();

  const createdPost = await Post.create({
    text,
    author,
    community: null,
  });


  //Update user Model, 2:44:20 / 5:50:34, https://youtu.be/O5cmLDVTgAs?feature=shared&t=9860

}
