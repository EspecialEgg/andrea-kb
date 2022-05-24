import { FC, useState, useEffect } from "react";
import { IPostcard } from "../../interfaces/IPostcard";
import PostcardItem from "./PostcardItem";
import { useForm } from "react-hook-form";
import { Form, FormGroup, Input, Button, Container } from "reactstrap";
import "/Users/andreameyer/code/andreameyer.no/src/style/postcard.css";
import { create } from "domain";

const getPostcards = () => {
  const postcards = localStorage.getItem("postcards");

  if (postcards == null) {
    return [];
  }
  return JSON.parse(postcards as string);
};

const initialValues: IPostcard = {
  to: "",
  from: "",
  date: "",
  message: "",
};

const PostcardForm: FC = () => {
  const [newPostcard, setNewPostcard] = useState<IPostcard>(initialValues);
  const [postcards, setPostcards] = useState<IPostcard[]>(getPostcards());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setNewPostcard({ ...newPostcard, [name]: value });
  };

  const addPostcard = () => {
    setPostcards([...postcards, newPostcard]);
    setNewPostcard(initialValues);
    console.log(addPostcard);
  };

  useEffect(() => {
    localStorage.setItem("postcards", JSON.stringify(postcards));
  }, [postcards]);

  return (
    <Form className="postcard-form">
      <h2 className="postcard-title-form">Postcard</h2>
      <Input
        type="text"
        onChange={handleChange}
        placeholder="To: "
        name="to"
      ></Input>
      <Input
        type="text"
        onChange={handleChange}
        placeholder="From: "
        name="from"
      ></Input>
      <Input
        type="text"
        onChange={handleChange}
        placeholder="Date: "
        name="date"
      ></Input>
      <Input
        type="text"
        onChange={handleChange}
        placeholder="Message: "
        name="message"
      ></Input>
      <button className="form-btn" type="button" onClick={addPostcard}>
        Send postcard
      </button>
    </Form>
  );
};

export default PostcardForm;
