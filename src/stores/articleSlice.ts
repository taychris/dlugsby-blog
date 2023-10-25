import { OutputData } from "@editorjs/editorjs";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Article = {
  title: string;
  output: OutputData | undefined;
};

const initialState: Article = {
  title: "default title",
  output: {
    time: 1698222849518,
    blocks: [
      {
        id: "_0swqL5uVm",
        type: "header",
        data: {
          text: "Greatest example article so now",
          level: 1,
        },
      },
      {
        id: "_0jwqL5uVm",
        type: "paragraph",
        data: {
          text: "What a description this is. However, I think it should be a lot longer so that it looks okay. I don't know what to say because I am lost for words. Hopefully, everything will work out in the end.",
        },
      },
      {
        id: "Q2dv2tvCsx",
        type: "paragraph",
        data: {
          text: "<i>This is supposed to be italic</i>",
        },
      },
      {
        id: "j2rh6SoVFK",
        type: "paragraph",
        data: {
          text: "<b>And I am bold.<br></b>",
        },
      },
      {
        id: "O6esmsIXSq",
        type: "list",
        data: {
          style: "ordered",
          items: ["The first", "second", "and so on"],
        },
      },
      {
        id: "f1LD-P-7qh",
        type: "paragraph",
        data: {
          text: "So what's next? I guess bullet points.",
        },
      },
      {
        id: "E_lzVexwEt",
        type: "list",
        data: {
          style: "unordered",
          items: ["Very good", "Great for all"],
        },
      },
      {
        id: "BrWxIVpnLc",
        type: "quote",
        data: {
          text: "Better late than never.",
          caption: "",
          alignment: "left",
        },
      },
    ],
    version: "",
  },
};

export const articleSlice = createSlice({
  name: "article-slice",
  initialState: initialState,
  reducers: {
    updateArticle: (state, action: PayloadAction<Article>) => {
      state.title = action.payload.title;
      state.output = action.payload.output;
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateArticle } = articleSlice.actions;
// You must export the reducer as follows for it to be able to be read by the store.
export default articleSlice.reducer;
