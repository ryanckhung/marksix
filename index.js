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

    static test(){
        return "Test message from Marksix class."
    }

    static getRandomArbitrary(min, max) {
        return Math.ceil(Math.random() * (max - min) + min);
    }

    static excludeList(fullList, dropList){
        return fullList.filter( (item)=>{return dropList.indexOf(item) < 0;});
    }

    // Key Function
    // randomly select N unduplicated numbers from the range
    // (1, 49, 6, []) => draw 6 unduplicated number from 1~49
    // (1, 49, 3, [12, 23, 12]) => draw 3 number from 1~49 but exclude the excluded list
    // then pack the 3 number to the excluded list
    static randomPick(min, max, darwHowManyTime, excludeList){
        let counter = 0;
        let selectedList = [];
        while (counter < darwHowManyTime){
            let randomNumber = Marksix.getRandomArbitrary(min, max);
            let isExist = excludeList.find((item) => {return item == randomNumber})
            if (isExist == undefined){
                counter++;
                excludeList.push(randomNumber)
                selectedList.push(randomNumber)
            }
        }
        let selectedListPlusExcludeList = excludeList;
        return [selectedListPlusExcludeList, selectedList];
    }

    static randomPickSixElementFromAList(list){
        while(list.length>6){
            let index = Math.floor( Math.random() * list.length );
            list.splice( index, 1 );
        }
        return list
    }


    // Algorithm #1
    // randomly select 6 number between 1 ~ this.totalNumber
    normalDraw(){
        this.numbers = Marksix.randomPick(1, this.totalNumber, 6, [])[0];
    }


    // Algorithm #2
    // input [1,2,1,4,2] means:
    // 1-10 select 1 number; 11-20 select 2 number; 21-30 select 1 number
    // 31-40 select 4 number; 41-50 select 2 number; 
    // number of sections depends on this.totalNumber
    // if sum of the [1,2,1,4,2] > 6; compress to array of 6
    // if sum of the [0,0,0,1,2] < 6; will fill up to 6
    randomPickWithRange(section){
        let numOfSection = Math.ceil(this.totalNumber/10);
        if (section.length != numOfSection){
            console.log("wrong input format");
            return null;
        }

        let pickNumber = [];
        for (var i=0; i<section.length; i++){
            let min = i * 10 + 1;
            let max = (i * 10 + 10) > this.totalNumber ? this.totalNumber: (i*10+10);
            let randomNumber = Marksix.randomPick(min, max, section[i], [])[0];
            pickNumber = [].concat(pickNumber, randomNumber)
        }

        if (pickNumber.length<6){
            this.numbers = Marksix.randomPick(1, this.totalNumber, 6-pickNumber.length, pickNumber)[0]
        }else if (pickNumber.length>6){
            this.numbers = Marksix.randomPickSixElementFromAList(pickNumber);
        }

        this.numbers = pickNumber;
    }

    // Algorithm #3
    randomPickWithExclusion(excludeList){
        if (excludeList.length > this.totalNumber-6){
            console.log("the excluded list is too long");
            return null;
        }
        this.numbers = Marksix.randomPick(1, this.totalNumber, 6, excludeList)[1];
    }
}

module.exports = Marksix