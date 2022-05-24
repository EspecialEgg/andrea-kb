import { FC } from "react";
import { Row, Col } from "react-bootstrap";
import { IPostcard } from "../../interfaces/IPostcard";
import "/Users/andreameyer/code/andreameyer.no/src/style/postcards-sent.css";

type PostcardItemProps = {
  postcard: IPostcard;
};

const PostcardItem: FC<PostcardItemProps> = ({ postcard }) => {
  return (
    <article className="postcard-title">
      <p>To: {postcard.to}</p>

      <p>From: {postcard.from}</p>

      <p>Date: {postcard.date}</p>

      <p>Message: {postcard.message}</p>
    </article>
  );
};

export default PostcardItem;
