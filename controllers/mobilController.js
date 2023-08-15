const mobilController = {};

var car = [{
        merek_mobil: 'Honda',
        tipe_mobil: 'Jazz',
        warna: 'Merah',
    },
    {
        merek_mobil: 'Toyota',
        tipe_mobil: 'Avanza',
        warna: 'Hitam',
    },
    {
        merek_mobil: 'Suzuki',
        tipe_mobil: 'Ertiga',
        warna: 'Putih',
    },
    {
        merek_mobil: 'Daihatsu',
        tipe_mobil: 'Xenia',
        warna: 'Silver',
    },
]

mobilController.car = (req, res, next) => {
    return res.status(200).send({
        status: true,
        data: car
    })
};

mobilController.store = (req, res, next) => {
    if (req.body.merek_mobil == null || req.body.tipe_mobil == null || req.body.warna) {
        return res.status(400).send({
            status: false,
            data: 'Data tidak lengkap'
        });
    }
    car.push(req.body)
    return res.status(200).send({
        status: true,
        data: car
    })
};

mobilController.getbyid = (req, res) => {
    try {
        if (car[req.params.id - 1] == null)
            throw new Error('Data tidak ditemukan');
        return res.status(200).send({
            status: true,
            data: car[req.params.id - 1]
        });
    } catch (error) {
        return res.status(404).send({
            status: false,
            data: error.message
        });
    }

};

mobilController.delete = (req, res) => {
    if (car[req.params.id - 1] == null) {
        return res.status(200).send({
            status: false,
            data: 'Data tidak ditemukan'
        });
    } else {
        car.splice(req.params.id - 1, 1)
        return res.status(200).send({
            status: true,
            data: car
        });
    }
};

mobilController.update = (req, res) => {
    car[req.params.id - 1] = req.body;
    return res.status(200).send({
        status: true,
        data: car[req.params.id - 1]
    })
}

module.exports = mobilController;