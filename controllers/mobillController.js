const mobillController = {}

const { Mobil } = require('../models/Mobil')

mobillController.findAllMobil = async (req, res) => {
    try {
        console.log('Mobil')
        const data = await Mobil.findAll()

        const result = {
            status: true,
            data: data
        }
        res.json(result)
    } catch (error) {
        console.log(error, '<<<<Error findBarang Function')
    }
}
mobillController.post = async (req, res) => {
    try {
        const {
            merekMobil,
            tipeMobil,
            warna
        } = req.body
        const newMobil = await Mobil.create({
            merekMobil: merekMobil,
            tipeMobil: tipeMobil,
            warna: warna,
        })

        res.status(200).json({
            status: true,
            data: {
                id: newMobil.id,
                merekMobil: newMobil.merekMobil,
                tipeMobil: newMobil.tipeMobil,
                warna: newMobil.warna,
                createdAt: newMobil.createdAt,
                updatedAt: newMobil.updatedAt
            }
        })

    } catch (error) {
        console.log(error, '<<<<Error in Post Function>>>>')
    }
}

mobillController.getById = async (req, res) => {
    try {
        const {
            id
        } = req.params

        const data = await Mobil.findByPk(id)
        if (data === null) {
            return res.status(404).json({
                status: false,
                message: `Data Items with id ${id} is not found`
            })
        }
        res.json({
            status: true,
            data: data
        })
    } catch (error) {
        console.log(error, '<<<<Error in GetById>>>>')
    }
}

mobillController.update = async (req, res) => {
    try {
        const {
            id
        } = req.params

        const {
            merekMobil,
            tipeMobil,
            warna,
        } = req.body

        const mobil = await Mobil.findByPk(id)

        if (!mobil) {
            return res.status(404).json({
                status: false,
                message: `data with id ${id} is not found`
            })
        }
        mobil.merekMobil = merekMobil
        mobil.tipeMobil = tipeMobil
        mobil.warna = warna,
        mobil.updatedAt = new Date()

        mobil.save()

        res.json({
            status: true,
            data: {
                id: mobil.id,
                merekMobil: mobil.nama_barang,
                tipeMobil: mobil.harga,
                warna: mobil.kategori,
                createdAt: mobil.createdAt,
                updatedAt: mobil.updatedAt
            }
        })

    } catch (error) {
        console.log(error, 'Error when Update Function')
    }
}

mobillController.delete = async (req, res) => {
    try {
        const {
            id
        } = req.params

        const mobil = await Mobil.findByPk(id)

        if (!mobil) {
            return res.status(404).json({
                status: false,
                message: `data with id ${id} is not found`
            })
        }

        mobil.destroy()

        res.json({
            status: true,
            message: `Success delete data with id ${id}`
        })


    } catch (error) {
        console.log(error, 'Error in Delete Function')
    }
};

module.exports = mobillController;