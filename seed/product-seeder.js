var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'http://www.oshkosh.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw496132c3/productimages/23184211.jpg?sw=244',
        title: 'Winter wear for baby',
        description: 'warm deress for your baby!!',
        price: 20
    }),

    new Product({
        imagePath: 'https://i.pinimg.com/originals/d8/55/78/d85578e754f55b52724647ee4720da69.jpg',
        title: 'sisndri Dress',
        description: 'your baby Sisindri!',
        price: 15
    }),
    new Product({
        imagePath: 'https://i.pinimg.com/736x/16/7f/07/167f074fdeb51c7452140ba2762771e2--oh-yeah-baby-stylish-kids.jpg',
        title: 'Gentel baby dress',
        description: 'future gentelmen!!!',
        price: 25
    }),
    new Product({
        imagePath: 'https://img1.etsystatic.com/052/1/6902065/il_570xN.737472431_qwl4.jpg',
        title: 'cool looking short',
        description: 'cool baby with shorts!!!',
        price: 30
    })
];
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done == products.length) {
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}



