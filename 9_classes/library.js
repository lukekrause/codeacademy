class media {
    constructor(title, isCheckedOut, ratings) {
      this._title = title
      this._isCheckedOut = false
      this._ratings = []
    }
    get title() {
      return this._title
    }
    get isCheckedOut() {
      return this._isCheckedOut
    }
    get rating() {
      return this._rating
    }
    addRating(ratingInput) {
      return this._ratings.push(ratingInput)
    }
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut
    }
    getAverageRating() {
      let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      const lengthOfArray = this._ratings.length
      const averageRating = (ratingsSum /= lengthOfArray)
      return averageRating.toFixed(1)
    }
    set isCheckedOut(x) {
      this._isCheckedOut = x
    }
  }
  
  class book extends media {
    constructor(author, title, pages) {
      super(title)
      this._author = author
      this._pages = pages
    }
    get author() {
      return this._author
    }
    get pages() {
      return this._pages
    }
  }
  
  class movie extends media {
    constructor(director, title, runTime) {
      super(title)
      this._director = director
      this._runTime = 0
    }
    get director() {
      return this._director
    }
    get runTime() {
      return this._runTime
    }
  }
  
  const historyOfEverything = new book('Bill Bryson', 'A Short History of Nearly Everything', 544)
  
  
  historyOfEverything.toggleCheckOutStatus()
  
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  
  console.log(historyOfEverything.getAverageRating())
  
  const speed = new movie('Jan de Bont', 'Speed', 116)
  
  speed.toggleCheckOutStatus()
  
  console.log(speed._isCheckedOut)
  
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  
  console.log(speed.getAverageRating())
  
  
  
  
  
  
  
  