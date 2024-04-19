class HashMap {
    constructor() {
        this.arraySize = 16
        this.table = new Array(this.arraySize).fill(null)
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
        }
     
        return hashCode;
      }

      set(key, value) {
        let hashKey = this.hash(key)
        if (this.table[hashKey] === null){
            this.table[hashKey] = []
        }
        for (let pair of this.table[hashKey]){
            if (pair.key === key) {
                pair.value = value
                return
            }
        }
        this.table[hashKey].push({ key, value })
      }

      get(key) {
        let hashKey = this.hash(key);
        if (this.table[hashKey]) {
          for (let pair of this.table[hashKey]) {
            if (pair.key === key) {
              return pair.value;
            }
          }
        }
        return null; 
      }

      has(key) {
        let hashKey = this.hash(key);
        if (this.table[hashKey]){
            return true
        }
        return false
      }

      length() {
        let totalKeys = 0
        for (let i = 0; i < this.arraySize; i++) {
            if (this.table[i] !== null){
                let value = this.table[i].length
                totalKeys += value
            }    
        }
        return totalKeys
      }

      clear() {
        for (let i = 0; i < this.arraySize; i++){
            this.table[i] = null
        }
      }

      getKeys() {
        let keysArray = []
        for (let i = 0; i < this.arraySize; i++){
            if (this.table[i] !== null){
                for (let pair of this.table[i]) {
                  keysArray.push(pair.key)
                }
              }
            }
            return keysArray
        }

        getValues() {
            let valuesArray = []
            for (let i = 0; i < this.arraySize; i++){
                if (this.table[i] !== null){
                    for (let pair of this.table[i]) {
                      valuesArray.push(pair.value)
                    }
                  }
                }
                return valuesArray
            }
        
        getEntries() {
            let entriesArray = []
            for (let i = 0; i < this.arraySize; i++){
                if (this.table[i] !== null){
                    for (let pair of this.table[i]) {
                        entriesArray.push([pair.key, pair.value])
                    }
                    }
                }
                return entriesArray
            }
              
      
}

const myHashMap = new HashMap()
myHashMap.set("apple", 10)
myHashMap.set("bananas", 15)
myHashMap.set("elppa", 12)
myHashMap.set("mango", 40)
myHashMap.set("Carrot", 100)
console.log(myHashMap.table)
console.log(myHashMap.getEntries())

 
