'use strict'
angular.module('buyBlueApp')
    .service('blueService', function() {
        var items = [{
                category: 'Men',
                title: 'Relax Jeans Hyperflex',
                description: 'xyzqweerrrrrrrr',
                image: 'images/1.jpg',
                price: 120
            },
            {
                category: 'Men',
                title: 'Relax Jeans super',
                description: 'xyzqweerrrrrrrr',
                image: 'images/2.jpg',
                price: 120
            },
            {
                category: 'Men',
                title: 'Relax Jeans goodflex',
                description: 'xyzqweerrrrrrrr',
                image: 'images/3.jpg',
                price: 120
            },
            {
                category: 'Men',
                title: 'Relax Jeans perfectflex',
                description: 'xyzqweerrrrrrrr',
                image: 'images/4.jpg',
                price: 120
            }
        ];

        var promotions =[{name:'Shoes',
                            image:'images/1.jpg',
                            price:25},
                            {name:'Tshirt',
                            image:'images/2.jpg',
                            price:50},
                            {name:'Jeans',
                            image:'images/3.jpg',
                            price:75},
                            {name:'Kurta',
                            image:'images/4.jpg',
                            price:125}]
        this.getItems = function() {
            return items;
        }
        this.getPromotions=function(){
            return promotions;
        }

    })