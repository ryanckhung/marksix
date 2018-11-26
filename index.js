class Marksix{
    constructor(){
        this.numbers = [];
        this.totalNumber = 49;
    }

    toString(){
        this.numbers.sort(function(a, b) {
            return a - b;
        });
        let numberString = "";
        for (var i=0; i<this.numbers.length; i++){
            numberString = numberString + this.numbers[i] + ", ";
        }
        return numberString.slice(0, -2);
    }

    static getRandomArbitrary(min, max) {
        return Math.ceil(Math.random() * (max - min) + min);
    }

    static test(){
        return "Test message from Marksix class."
    }

    // randomly select N unduplicated numbers from the range
    // (1, 49, 6, []) => draw 6 unduplicated number from 1~49
    // (1, 49, 3, [12, 23, 12]) => draw 3 number from 1~49 but exclude the excluded list
    // then pack the 3 number to the excluded list
    static randomPick(min, max, darwHowManyTime, excludeList){
        let counter = 0;
        while (counter < darwHowManyTime){
            let randomNumber = Marksix.getRandomArbitrary(min, max);
            let isExist = excludeList.find((item) => {return item == randomNumber})
            if (isExist == undefined){
                counter++;
                excludeList.push(randomNumber)
            }
        }
        return excludeList;
    }

    static randomPickSixElementFromAList(list){
        while(list.length>6){
            let index = Math.floor( Math.random() * list.length );
            list.splice( index, 1 );
        }
        return list
    }


    // randomly select 6 number between 1 ~ this.totalNumber
    normalDraw(){
        this.numbers = Marksix.randomPick(1, this.totalNumber, 6, []);
    }


    // input [1,2,1,4,2] means:
    // 1-10 select 1 number; 11-20 select 2 number; 21-30 select 1 number
    // 31-40 select 4 number; 41-50 select 2 number; 
    // number of sections depends on this.totalNumber
    // the final picked value will be randomly pick and compress to 6 num only
    randomPickWithRange(section){
        let numOfSection = Math.ceil(this.totalNumber/10);
        if (section.length != numOfSection){
            console.log("wrong input format");
            return null;
        }
        let pickNumber = [];
        for (var i=0; i<section.length; i++){
            let min = i * 10 + 1;
            let max = i * 10 + 10;
            if (max > this.totalNumber){
                max = this.totalNumber;
            }
            let randomNumber = Marksix.randomPick(min, max, section[i], []);
            pickNumber = [].concat(pickNumber, randomNumber)
        }

        if (pickNumber.length<6){
            var completeList = Marksix.randomPick(1, this.totalNumber, 6-pickNumber.length, pickNumber)
            this.numbers = completeList
        }
        if (pickNumber.length>6){
            var list = Marksix.randomPickSixElementFromAList(pickNumber)
            this.numbers = list;
        }

        this.numbers = pickNumber;
    }
}

module.exports = Marksix