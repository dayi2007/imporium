# Imporium 


## [Imporium](https://imporium.netlify.app "Imporium")

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
![screen_shot_2021-11-21_at_5 03 44_pm](https://user-images.githubusercontent.com/9592819/142796462-e6a6836f-71a4-4106-a74f-aec5d55fe735.png)

![screen_shot_2021-11-21_at_5 03 30_pm](https://user-images.githubusercontent.com/9592819/142796464-0edd0d34-2d25-4cfb-84e5-b3ef40454bb7.png)

Wireframe UI: https://www.figma.com/file/4zEaux79Sbybg8qrPBSdMx/Imporium?node-id=0%3A1

![screen_shot_2021-11-21_at_4 46 18_pm](https://user-images.githubusercontent.com/9592819/142796346-299c4d72-20c6-4204-88eb-88ba88d251e9.png)


Component Structure: https://whimsical.com/imporium-RGpNBgc58uN9dbCwspKTjC
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

## Team Expectations: 

https://docs.google.com/document/d/18g4GcseKsVteMSpRMYecZCKjOtByZ7WB9xaNa0J-ttc/edit

## GitHub Project Board: 

https://github.com/dayi2007/imporium/projects/1?add_cards_query=is%3Aopen

## Time Frames

![Screen Shot 2021-11-12 at 5 06 32 PM](https://user-images.githubusercontent.com/91752553/141540647-d8a7ba3a-7975-4900-9fdb-9eaec852f75b.png)

##Credits 

- Opening Carousel by: DevLoop01 -- Reference: https://codepen.io/dev_loop/pen/MWKbJmO
- Particles by: Vincent Garreau -- Reference: https://codepen.io/akey96/pen/oNgeQYX
- Revolving Carousel's by Bilal Rizwaan -- Reference: https://codepen.io/Bilal1909/pen/KKVRbeQ?editors=1100

