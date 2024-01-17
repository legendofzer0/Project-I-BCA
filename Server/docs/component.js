module.exports = {
  components: {
    schemas: {
      Id: {
        type: "number",
        description: "Unique identifier",
        example: 2,
      },
      user: {
        type: "object",
        properties: {
          user_id: {
            type: "number",
            description: "User identification number",
            example: 23,
          },
          Full_Name: {
            type: "string",
            description: "User's Full name",
            example: "John Doe",
          },
          email: {
            type: "string",
            description: "User's email address",
            example: "johndoe@email.com",
          },
          roles: {
            type: "string",
            default: "customer",
            description: "User's roles",
            example: "admin",
          },
          username: {
            type: "string",
            description: "User's username",
            example: "JohnD",
          },
          phone_number: {
            type: "number",
            description: "User's phone number",
            example: "9800000000",
          },
        },
      },
      items: {
        type: "object",
        properties: {
          item_Id: {
            type: "number",
            description: "Item identification number",
            example: 23,
          },
          item_name: {
            type: "string",
            description: "Item name",
          },
          tags: {
            type: "array",
            items: "string",
            description: "Item tags",
          },
          price: {
            type: "integer",
            description: "item price",
          },

          imageUrl: {
            type: "string",
            default: "image-not-found.png",
            description: "Product image URL",
          },
        },
      },
      CartItem: {
        type: "object",
        properties: {
          productId: {
            type: "number",
            description: "Product identification number",
            example: 23,
          },
          name: {
            type: "string",
            description: "Product name",
          },
          price: {
            type: "integer",
            description: "Product price",
            example: 456.79,
          },
          description: {
            type: "string",
            description: "Product description",
          },
          imageUrl: {
            type: { type: "string" },
            description: "Product image URL",
          },
          subtotal: {
            type: "integer",
            description: "Product total price",
            example: 3009.1,
          },
          quantity: {
            type: "number",
            description: "Total quantity in cart",
            example: 5,
          },
        },
      },
      LoginInput: {
        type: "object",
        properties: {
          email: {
            type: "string",
            example: "johndoe@email.com",
          },
          password: {
            type: "string",
            example: "^@wra@m+SrNs!lS",
          },
        },
      },
      LoginResponse: {
        type: "object",
        properties: {
          token: {
            type: "string",
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsInJvbGVzIjpbImN1c3RvbWVyIl0sImNhcnRfaWQiOjE0LCJpYXQiOjE2MjIyODkwMDksImV4cCI6MTYyMjI4OTA2OX0.Y0XarrAfQVR7we-s5mZvBN3DqcjW08-_QmS1Z0W9bpI",
          },
          user: {
            type: "object",
            properties: {
              userId: {
                type: "integer",
              },
              fullName: {
                type: "string",
              },
              username: {
                type: "string",
              },
            },
          },
        },
      },
      SignupInput: {
        type: "object",
        properties: {
          email: {
            type: "string",
          },
          fullName: {
            type: "string",
          },
          username: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
      OrderInput: {
        type: "object",
        properties: {
          amount: {
            type: "integer",
          },
          itemTotal: {
            type: "integer",
          },
          stripePaymentId: {
            type: "string",
          },
        },
      },
      Order: {
        type: "object",
        properties: {
          items: {
            type: "array",
            items: {
              type: "object",
              properties: {
                orderId: {
                  type: "integer",
                },
                userId: {
                  type: "integer",
                },
                amount: {
                  type: "integer",
                },
                date: {
                  type: "string",
                },
                status: {
                  type: "string",
                  default: "complete",
                },
                total: {
                  type: "integer",
                },
              },
            },
          },
          total: {
            type: "number",
          },
        },
      },
      Error: {
        type: "object",
        properties: {
          message: {
            type: "string",
            description: "Error message",
            example: "Not found",
          },
          statusCode: {
            type: "number",
            description: "Error internal code",
            example: 500,
          },
          status: {
            type: "string",
            example: "error",
          },
        },
      },
    },
    securitySchemes: {
      JWT: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
      Cookie: {
        type: "apiKey",
        in: "cookie",
        name: "refreshToken",
      },
    },
  },
};
