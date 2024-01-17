module.exports = {
  post: {
    tags: ["Users"],
    description: "Create a user",
    summary: "Create a user",
    operationId: "createUser",
    security: [
      {
        JWT: [],
      },
    ],
    parameters: [{}],
  },
};
