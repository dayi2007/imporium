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


    
  ]

  
  // insert products into database
  await Product.insertMany(products)
  console.log('Created users & products!')

  // close database connection. done.
  db.close()

}

insertData()