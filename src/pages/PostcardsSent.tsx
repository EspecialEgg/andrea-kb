import { FC, useState } from "react";
import PostcardForm from "../components/postcard/PostcardForm";
import PostcardItem from "../components/postcard/PostcardItem";
import { IPostcard } from "../interfaces/IPostcard";
import "/Users/andreameyer/code/andreameyer.no/src/style/postcards-sent.css";

const getPostcards = () => {
  const postcards = localStorage.getItem("postcards");

  if (postcards == null) {
    return [];
  }
  return JSON.parse(postcards as string);
};

const PostcardsSent: FC = () => {
  const [postcards, setPostcards] = useState<IPostcard[]>(getPostcards());

  const createPostcardForm = () => {
    return postcards.map((postcard, key) => {
      return <PostcardItem key={key} postcard={postcard} />;
    });
  };

  return (
    <div>
      <h2 className="sent-title">Postcards sent</h2>
      <div className="sent-data">{createPostcardForm()}</div>
    </div>
  );
};

export default PostcardsSent;
