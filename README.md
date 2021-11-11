# imporium 

## Description

Easy to use online market place for NFT's of the etherium network. Also a platform for creator to mint their own NFT's


## Data schema example:
```

    Products:
  {
    title: { type: String, required: true },
    creator: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Integer, required: true }
  },
  { timestamps: true }
    

    Authentication:
  {
    username: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
```
## MVP:

- Built using React with at least 6 separate components in an organized and understandable React file structure. 

- Utilizes functional React components.

- Utilizes built-from-scratch API with MongoDB, Mongoose, & Express.js.

- Utilizes React Router for client-side routing.

- Features User Authentication and Profile. 

- Features Home Screen, Listing Screen, & Detail Screen.

- Styled with CSS, utilizing Flex-Box Design.

- Utilizes Two Media Query Screen Sizes for varying viewports.

- Deployed on Netlify, Heroku, & MongoDB Atlas.

## Post MVP

- Implement a user profile page with collections

- Sell button component attached to Product Details

- Three.js animation

- Unique brand logo

## Project schedule

## Team Expectations: 

https://docs.google.com/document/d/18g4GcseKsVteMSpRMYecZCKjOtByZ7WB9xaNa0J-ttc/edit

## GitHub Project Board: 

https://github.com/dayi2007/imporium/projects/1?add_cards_query=is%3Aopen

## Time Frames

## SWOT Analysis