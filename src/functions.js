class Functions {
   static convert(x){
      let string = ""
      if (x % 3 === 0){
         string += "Fizz"
      }
      if (x % 5 === 0){
         string += "Buzz"
      }
      if (x % 3 != 0 && x % 5 != 0) {
      string += x
      }
      return string
   }
   
   static getResult(min, max){
      if (min < 1 || max > 100){
         throw new Error('out of range')
      }
      let array = [];
      for(let i=min; i<=max; i++){
      array.push(Functions.convert(i))
      }
      return array
   };
}
export default Functions