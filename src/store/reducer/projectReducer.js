const initState = {
  projects: [
    {
      id: "1",
      title: "dummy text 1",
      content: "Occaecat incididunt dolor ad nostrud aute.",
    },
    {
      id: "2",
      title: "dummy text 3",
      content:
        "Duis minim non proident laborum commodo consequat consectetur esse laboris nisi.",
    },
    {
      id: "3",
      title: "dummy text 3",
      content:
        "Incididunt culpa dolor nostrud fugiat nisi elit enim dolore veniam Lorem ipsum exercitation consectetur.",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;