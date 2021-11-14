import db from '../db/connection.js'
import Product from '../models/product.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

const insertData = async () => {
     // reset database
  await db.dropDatabase()

  const user1 = new User({
    username: 'Johnny Domingo',
    email: 'johnny@gmail.com',
    password_digest: await bcrypt.hash('!a$ecureP@ssw0Rd55!', 11)
  })
  await user1.save()

  const user2 = new User({
    username: 'Andrew Hood',
    email: 'hoody@gmail.com',
    password_digest: await bcrypt.hash('!$h0pp3R1', 11)
  })
  await user2.save()

  const user3 = new User({
    username: 'Andrew Lee',
    email: 'andrew@gmail.com',
    password_digest: await bcrypt.hash('!$eller4Lif3', 11)
  })
  await user3.save()

  const user4 = new User({
    username: 'Joseph S',
    email: 'j@gmail.com',
    password_digest: await bcrypt.hash('L0v32!p4int', 11)
  })
  await user5.save()

  const user5 = new User({
    username: 'Dayanna',
    email: 'dayanna@gmail.com',
    password_digest: await bcrypt.hash('!h3ll0W0rld', 11)
  })
  await user5.save()

  const products = [
    {
      title: 'Angry Apes United #2607',
      creator: 'Angry Apes United',
      image: 'https://lh3.googleusercontent.com/6dcU0JG5LCQ6hsAqqzolGfCeXDhwxkR8y5ZCZSuZmR-9PGLdMsbbxDk5YG39PL0OaQbm-3RG6i9E3PwsdjDFw5TPJpLzGaDf8JSfEA=s0',
      description: 'Angry Apes United is a high utility NFT collection of 8,888 apes that allows holders to earn additional crypto assets through blockchain gaming',
      price: '0.29'
    },
    {
      title: 'Alpha Keytauri',
      creator: 'popwonder',
      image: 'https://lh3.googleusercontent.com/rkzfXhxl_Sv5KVDfbrEMrlGbVkhk0SsSiljsstfaU-F228iwBgOKusmmfOE3x2qAHpWn_xWsZUYUZecCQjFfE-MD0tkMwSmTHDHK=w600',
      description: 'Intergalactic space oscillations transmorphed into good times.',
      price: '0.32'
    },
    {
      title: 'Woodie #5566',
      creator: 'UltraDAO_Deployer',
      image: 'https://lh3.googleusercontent.com/IWmAvBcYihQV8evjZtsU5a3Yk6MbC7wth158SLJopvZcl_ZWuBSoeHJv1xHpKPsG8b8-vkr8JIJ1Rbr54_SuxRNV5ZHwr0dErLG8gQ=w600',
      description: 'Woodies is a collection of 10,000 avatars created by UltraDAO. But this isn’t just another avatar project. Propelled by one of the largest 10k project teams and an established artist DAO, Woodies is a universe rich in storytelling and characters with big plans for future content and collector rewards. Visit WoodiesNFT.com to learn more.',
      price: '0.2'
    },
    {
      title: 'Algobots #472',
      creator: 'Stina',
      image: 'https://lh3.googleusercontent.com/RL5btxwpzHOHzFxRzorg-TM-_G1gzOqCiutGQOaconzhIx0_DWYhmjZw6TVGyN_3HGlP_u6eq65uRqUomHHoFaZVaYhVjcqLGSNeHw=w321',
      description: 'These cute companions live 100% on-chain where their bytes are cleverly stored in a scalable vector format. Built with quality components and complex algorithms, each Algobot is issued with a unique serial number and a NIFTY license which permits them to help out on any commercial projects where you might require their assistance.',
      price: '6'
    },
    {
      title: 'Surreal #1414',
      creator: 'Jay_Eff_Vee',
      image: 'https://lh3.googleusercontent.com/IKsTqhuXAOUX3NEXxmeikQJU231r5lSNj96tXucpjdspeUFZ9VS__crVrqGvtDQv4Mv8KbDh6ale94RU5PhF0_X4877BhU6H9cDS7g=w600',
      description: 'The Surreals are a collection of 10,000 hand-painted characters with a vintage naturalist aesthetic.',
      price: '0.088'
    },
    {
      title: 'Zxdiac - Taurus',
      creator: 'GxngYxng',
      image: 'https://lh3.googleusercontent.com/AAZckun_TAyNlVJK6NXzbplliV_B6Ub_nqc5Avxtav35JNwzA78-KLIt-O1SFM0nxD7nJ5vOE2p0MVuvflmeLZS-bjhp2n6Vk6fZAw=w600',
      description: "Some may view your stubbornness as a weakness, but it will keep you sure-footed on life's roller coaster journey. (As long as you are actually right.)",
      price: '4.6'
    },
    {
      title: 'Zxdiac - Aries',
      creator: 'GxngYxng',
      image: 'https://lh3.googleusercontent.com/oVfrtxBeN8j4F9zPcDRD4S1T5H4OEfe_r05EPM-7OsCdTou0WF0JSRiOWXHdwDIXV37HPSrnEFLRLHu9dziYiNXGNRCySGb88xzLuQ=w600',
      description: 'Head boldly toward your dreams, as your courage will carry you through even your most challenging moments.',
      price: '6.4'
    },
    {
      title: 'dogefather',
      creator: 'arkansauce',
      image: 'https://lh3.googleusercontent.com/WZGOh2MHcykbOlBXGbxAtnzO-ZHotpLRD84wc-2ShgXFLpZWJ8MGBvaiE4leodyUFcJKQtfczkGnJvlnQDrpkpZXQE_qU-N5-9204w=w600',
      description: 'Tectonix was created to null the law of time and energy. While order tends to go in the direction of disorder or chaos, Tectonix aims to create from disorder to order, disrupting laws of energy and masterfully planting an image of formation.',
      price: '5,000'
    },
    {
      title: 'Alixn 16',
      creator: 'GxngYxng',
      image: 'https://lh3.googleusercontent.com/fkAoyGOhoEbFoO4vXRb3o8dIL6BGyZ-vsAeLmLDretbxy1_HOVbUyR_8Oy5Tm9GWP2pJT6tFMyzkVNY39eeOPavJiqn8BMb9yeRkAS0=w600',
      description: '16/25',
      price: '80'
    },
    {
      title: '#2860',
      creator: 'DivineAnarchyS1',
      image: 'https://lh3.googleusercontent.com/eTnOOvzucyu-adR_lxHl1Ss82s2rS6TFnbCkVsTzcqym33gOQ1u0aoXFFa4taSxnE8vqSrysY5jn492TukfRYFu7SNfWPeaQ2Tjjmw=w600',
      description: 'Divine Anarchy ',
      price: '0.243'
    }
  ]

  // insert products into database
  await Product.insertMany(products)
  console.log('Created users & products!')

  // close database connection. done.
  db.close()

}

insertData()