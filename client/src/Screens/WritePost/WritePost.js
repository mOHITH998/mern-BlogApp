import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Container,
  Button,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { Context } from "../../context/Context";

import EDITORJS from "react-editor-js";
import { EDITORJS_TOOLS } from "../../editorjs/constants";

import useStyles from "../styles";

function WritePost() {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const { user } = useContext(Context);

  const onSubmitPost = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.all.username,
      title,
      description,
      category,
    };
    if (file) {
      const formData = new FormData();
      const fileName = file.name;
      formData.append("name", fileName);
      formData.append("file", file);
      newPost.image = fileName;
      try {
        await axios.post("http://localhost:4000/api/v3/upload", formData);
      } catch (error) {}
      try {
        const { data } = await axios.post(
          "http://localhost:4000/api/v3/posts/post-create",
          newPost
        );
        window.location.replace(`/posts/?user=${data.savePost.username}`);
      } catch (error) {}
    }
  };

  return (
    <Container>
      <div className={classes.writePost}>
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="post"
            className={classes.writePostImg}
          />
        )}
        <form className={classes.writePostForm} onSubmit={onSubmitPost}>
          <div className={classes.writeFormGroup}>
            <label htmlFor="fileInput">
              <IconButton aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              className={classes.writePostInput}
              placeholder="Title"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormControl className={classes.formControl}>
              <InputLabel>Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="Sports">Sports</MenuItem>
                <MenuItem value="Tech">Tech</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Music">Music</MenuItem>
                <MenuItem value="Entertainment">Entertainment</MenuItem>
                <MenuItem value="Science">Science</MenuItem>
                <MenuItem value="Art">Art</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.writeFormGroup}>
            <textarea
              className={`${classes.writePostInput} ${classes.writePostText}`}
              placeholder="Tell your beautiful Story..."
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" className="writePostBtn">
            Publish
          </button>
        </form>
      </div>
    </Container>
  );
}

export default WritePost;
