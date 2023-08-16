const { Mobil } = require('../models')

const findAllMobils = async (req, res) => {
    try {
        // data untuk mengakses ke database
        const data = await Mobil.findAll()


        const result = {
            status: 'oke',
            data: data
        }
        res.json(result)
    } catch (error) {
        console.log(error, "<<< find all mobil")
    }
}

// create mobil by id
const getMobilById = async (req, res) => {
    try {
        const { id } = req.params
        
        const data = await Mobil.findByPk(id)
        if (data == null) {
            return res.status(404).json({
                status: 'failed',
                message: 'data mobil with ${id} not found'
            })
        }
        res.json({
            status: 'oke',
            data: data
        })
    } catch (error) {
        console.log(error, "<<< get mobil by id")
    }
}

const createNewMobil = async (req, res) => {
    try {
        // mendapatkan request body
        const { merekMobil, tipeMobil, warna} = req.body
        
        const newBook = await Mobil.create({merekMobil: merekMobil, tipeMobil: tipeMobil, warna: warna})

        res.status(201).json({
            status: 'success',
            data: {
                merekMobil: newBook.merekMobil,
                tipeMobil: newBook.tipeMobil,
                warna: newBook.warna
            }
        })

    } catch(error) {
        console.log(error, '<<< error create new mobil')
    }
}

const updateMobil = async (req, res) => {
    try {
        // mendapatkan request param -> mendapatkan data book berdasarkan id
        const { id } = req.params
        // mendapatkan req bodynya
        const { merekMobil, tipeMobil, warna} = req.body
        const mobil = await Mobil.findByPk(id)

        if(!mobil) {
            return res.status(404).json({
                status: 'failed',
                message: 'data mobil with ${id} not found'
            })
        }

        // untuk mendapatkan updatenya
        mobil.merekMobil = merekMobil
        mobil.tipeMobil = tipeMobil
        mobil.warna = warna

        // return response
        res.json({
            status: 'success',
            data: {
                id: mobil.id,
                merekMobil: mobil.merekMobil,
                tipeMobil: mobil.tipeMobil,
                warna: mobil.warna

            }
        })

    }catch(error){
        console.log(error, '<<< error update mobil')
    }
}

module.exports = {findAllMobils, getMobilById, createNewMobil, updateMobil}