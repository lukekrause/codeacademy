const menu = {
    _courses: {
        appetizers: [],
        mains:[],
        desserts: [],
    },
    get appetizers() {
      return this._courses.appetizers
    },
    get mains() {
      return this._courses.mains
    },
    get desserts() {
      return this._courses.desserts
    },
    set appetizers(appetizersIn) {
        this._courses.appetizers = appetizers
    },
    set mains(mainsIn) {
        this._courses.mains = mains
    },
    set desserts(dessertsIn) {
        this._course.desserts = desserts
    },
    get _courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        dish: dishName,
        price: dishPrice
      };
    } 
  }
  
  
  
  
  
  
  //     return this._courses[courseName].push(dish); 
  //   },
  //   getRandomDishFromCourse(courseName) {
  //     const dishes = this._courses[courseName]
  //     const randomIndex = Math.floor(Math.random() * dish.length)
  //     return dishes[randomIndex]
  //     }
  // }
  
  // function generateRandomMeal() {
  //   const appetizer = this.getRandomDishFromCourse('appetizers')
  //   const main = this.getRandomDishFromCourse('mains')
  //   const desserts = this.getRandomDishFromCourse('desserts')
  //   const totalPrice = appetizer.price + appetizer.name
  //   return `Your meal is ${appetizer.name}, ${main.name}, ... The price is $${totalPrice}.`;
  // }
  
  // menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.50)
  
  
  
  
  
  
  //     get _courses(){
  //       return {
  //         appetizers: this.appetizers,
  //         mains: this.mains,
  //         desserts: this.desserts
  //       }
  //     }
  //   }
  // }
  
  // get appetizers() {
  
  // },
  // set appetizers(appetizersIn) {
  
  // },
  // get mains() {
  
  // },
  // set mains(mainsIn) {
  
  // },
  // get desserts() {
  
  // },
  // set desserts(dessertsIn) {
  
  // },
  
  
  // }