import Blocks from "editorjs-blocks-react-renderer";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Article = () => {
  // const title = useSelector((state: any) => state.title);
  const output = useSelector((state: any) => state.output);

  return (
    <>
      <Button asChild className="mx-10 my-4">
        <Link to="/editor">Edit article</Link>
      </Button>
      <article className="px-10 mx-auto prose max-w-7xl lg:prose-xl">
        <Blocks data={output} />
      </article>
    </>
  );
};
