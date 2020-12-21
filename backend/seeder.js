import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

// import data
import users from './data/users.js';
import seeds from './data/seeds.js';
import lendMachines from './data/lendMachines.js';
import consumer from './data/consumer.js'

// import models
import User from './models/userModel.js';
import productSeeds from './models/productSeedModel.js';
import orderSeeds from './models/orderSeedModel.js';
import productLendMachines from './models/productLendMachineModel.js';
import consumerProducts from './models/consumerProductModel.js'

// connect db
import connectDB from './config/db.js';

dotenv.config()

connectDB()

const importData = async () => {
    try {

        // delete data if already exists
        await orderSeeds.deleteMany();
        await productSeeds.deleteMany();
        await User.deleteMany();
        await productLendMachines.deleteMany();
        await consumerProducts.deleteMany();

        // add users to the database
        const createdUser = await User.insertMany(users)
        const adminUser = createdUser[0]._id

        // add seeds to the database
        const sampleSeeds = seeds.map(seed => {
            return { ...seed, user: adminUser }
        })
        await productSeeds.insertMany(sampleSeeds)

        // add lend machines to the database
        const sampleMachines = lendMachines.map(machine => {
            return { ...machine, user: adminUser }
        })
        await productLendMachines.insertMany(sampleMachines)

        const sampleConsumer = consumer.map(consumer => {
            return { ...consumer, user: adminUser }
        })
        await consumerProducts.insertMany(sampleConsumer)

        console.log('Data Imported'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1)
    }
}

const destroyData = async () => {
    try {

        // delete data if already exists
        await orderSeeds.deleteMany();
        await productSeeds.deleteMany();
        await User.deleteMany();
        await productLendMachines.deleteMany();
        await consumerProducts.deleteMany();

        console.log('Data Destroyed'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}




