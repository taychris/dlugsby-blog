import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
// @ts-ignore
import Quote from "@editorjs/quote";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import LinkTool from "@editorjs/link";
// @ts-ignore
import SimpleImage from "@editorjs/simple-image";
import { useDispatch, useSelector } from "react-redux";
import { updateArticle } from "../stores/articleSlice";
import { Link } from "react-router-dom";

const Editor = () => {
  const { handleSubmit } = useForm();
  const ref = useRef<EditorJS>();
  const [isMounted, setIsMounted] = useState(false);
  const dispatch = useDispatch();
  const output = useSelector((state: any) => state.output);

  const initializeEditor = async () => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        onReady() {
          ref.current = editor;
        },
        placeholder: "Type here..",
        inlineToolbar: true,
        data: output,
        tools: {
          quote: Quote,
          header: Header,
          list: List,
          linkTool: LinkTool,
          image: SimpleImage,
        },
        autofocus: true,
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      initializeEditor();

      return () => {
        ref.current?.destroy();
        ref.current = undefined;
      };
    }
  }, [isMounted, initializeEditor]);

  const savePost = async () => {
    const blocks = await ref.current?.save();
    dispatch(updateArticle({ title: "sup", output: blocks }));
  };

  return (
    <form onSubmit={handleSubmit(savePost)} className="">
      <div className="flex items-center justify-between w-full px-10 py-2">
        <Button type="button" variant={"secondary"} asChild>
          <Link to={"/"}>Back</Link>
        </Button>
        <Button type="submit">Save</Button>
      </div>
      <div className="px-10 mx-auto prose max-w-7xl">
        <div id="editorjs" className=""></div>
      </div>
    </form>
  );
};
export default Editor;
