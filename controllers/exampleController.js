const exampleController = {};

var employee = [{
        nama: 'Reyhan',
        umur: 17
    },
    {
        nama: 'Armand',
        umur: 16
    },
    {
        nama: 'Azzam',
        umur: 17
    }
]

exampleController.employee = (req, res, next)=> {
    return res.status(200).send({
      status: true,
      data: employee
    })
  };
  
  exampleController.store = (req, res, next)=> {
    if(req.body.nama == null || req.body.umur == null) {
          return res.status(400).send({
              status: false,
              data: 'Data tidak lengkap'
          });
        }
    employee.push(req.body)
    return res.status(200).send({
      status: true,
      data: employee
    })
  };
  
  exampleController.getbyid = (req, res) => {
      try {
          if(employee[req.params.id - 1] == null)
          throw new Error('Data tidak ditemukan');
           return res.status(200).send({
              status: true,
              data: employee[req.params.id - 1]
          }); 
            } catch (error) {
              return res.status(404).send({
                status: false,
                data: error.message
          }); 
            }
         
      };
  
  exampleController.delete = (req, res) => {
      if(employee[req.params.id - 1] == null) {
         return res.status(200).send({
              status: false,
              data: 'Data tidak ditemukan'
          });
      } else {
      employee.splice(req.params.id - 1, 1)
      return res.status(200).send({
          status: true,
          data: employee
      });
      }
  };
  exampleController.update = (req, res) => {
      if(employee[req.params.id - 1] == null) {
         return res.status(200).send({
              status: false,
              data: 'Data tidak ditemukan'
          });
      } else {
        if(req.body.name == null || req.body.age == null) {
          return res.status(400).send({
              status: false,
              data: 'Data tidak lengkap'
          });
        }
      employee[req.params.id - 1] = req.body;
      return res.status(200).send({
          status: true,
          data: employee[req.params.id - 1]
      });
      }
};
module.exports = exampleController;