function shipFactory(shipName,shipLength,hitsTaken=0,sunkStat =false) {
        return{
            name:shipName,
            length:shipLength,
            hits:hitsTaken,
            sunk:sunkStat,
            hit(){
                this.hits++
                return this.hits
            },
            isSunk(){
                if(this.hits >= this.length){
                    this.sunk = true;
                }
                return this.sunk
            }
        }
  }
  module.exports = shipFactory;