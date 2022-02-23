class Functions {

   static convert(x, config){

      let filteredString = Object
         .keys(config)
         .filter(key => x % key === 0)
         .map(key => config[key])
         .join("")

         return filteredString === "" 
            ? x.toString() 
            : filteredString
   }
   
   static getResult(min, max, config){
      if (min < 1 || max > 100){
         throw new Error('out of range')
      }
      let array = [];
      for(let i=min; i<=max; i++){
      array.push(Functions.convert(i, config))
      }
      return array
   };
}
export default Functions