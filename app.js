function createCar(name,model,owner,year,phone,image) {
return {
    name,model,owner,year,phone,image}
}
const cars = [
    createCar('Ford', 'Focus', 'Max', 2016, '+7 929 123 45 67', 'image/test.jpg'),
    createCar('Reno', 'Logan', 'Eva', 2013, '+7 929 456 45 22', 'image/test.jpg'),
    createCar('Reno', 'Duster', 'John', 2017, '+7 929 475 33 89', 'image/test.jpg')
]

new Vue({
    el: '#app',
    data:{
        cars: cars,
        car: cars[0],
        selectCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar: function (index) { // Объявление и использование функции во всей красоте.
            this.car = cars[index];
            this.selectCarIndex = index;
        }
    },
    computed: {
        phoneBtnText: function () {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'; // Тернарный оператор, возвращает текст в зависимости от true/false.
        },
        filterCars(){ // Фильтр. Просто фильтр.
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1;
            })
        }
    }
})