const Marksix = require('./index');

describe('Marksix', ()=>{
    let marksix;

    beforeEach(()=>{
        marksix = new Marksix();
    })

    it('Simple test for class', ()=>{
        expect(Marksix.test()).toEqual("Test message from Marksix class.")
    })


    describe('loop test for normalDraw()', ()=>{
        // beforeEach will generate a news set for each "it" test below
        beforeEach(()=>{
            marksix.normalDraw();
            console.log(marksix.toString())
        })
        for (var i=0; i<2; i++){
            it('Randomly select 6 numbers', ()=>{
                expect(marksix.numbers.length).toEqual(6);
            })
            it('check if exist the upper range', ()=>{
                let maxValue = Math.max(...marksix.numbers);
                expect(maxValue).not.toBeGreaterThan(marksix.totalNumber)
            })
            it('check if exist the lower range', ()=>{
                let minValue = Math.min(...marksix.numbers);
                expect(minValue).toBeGreaterThan(0)
            })
        }
    })

    describe('loop test for randomPickWithRange', ()=>{
        beforeEach(()=>{
            marksix.randomPickWithRange([3,3,3,0,0]);
            console.log(marksix.toString());
        })
        it('test', ()=>{
            expect(true).toEqual(true)
        })
        for (var i=0; i<3; i++){
            it('Randomly select 6 numbers', ()=>{
                expect(marksix.numbers.length).toEqual(6);
            })
            it('check if exist the upper range', ()=>{
                let maxValue = Math.max(...marksix.numbers);
                expect(maxValue).not.toBeGreaterThan(marksix.totalNumber)
            })
            it('check if exist the lower range', ()=>{
                let minValue = Math.min(...marksix.numbers);
                expect(minValue).toBeGreaterThan(0)
            })
        }
    })

    describe('loop test for randomPickWithRange', ()=>{
        beforeEach(()=>{
            //marksix.randomPickWithRange([1,1,1,1,1]);
            marksix.randomPickWithRange([0,0,0,0,5]);
            console.log(marksix.toString());
        })
        it('test', ()=>{
            expect(true).toEqual(true)
        })
        for (var i=0; i<2; i++){
            it('Randomly select 6 numbers', ()=>{
                expect(marksix.numbers.length).toEqual(6);
            })
            it('check if exist the upper range', ()=>{
                let maxValue = Math.max(...marksix.numbers);
                expect(maxValue).not.toBeGreaterThan(marksix.totalNumber)
            })
            it('check if exist the lower range', ()=>{
                let minValue = Math.min(...marksix.numbers);
                expect(minValue).toBeGreaterThan(0)
            })
        }
    })

    describe('Test excludeList function', ()=>{
        it('exclude lists', ()=>{
            expect(Marksix.excludeList([1,2,3,4,5],[2,3,4,6])).toEqual([1,5])
        })
    })

    describe('Test exclude the marksix number', ()=>{
        beforeEach(()=>{
            marksix.randomPickWithExclusion([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]);
            console.log(marksix.toString());
        })
        for (var i=0; i<10000; i++){
            it('marksix with exclusion list', ()=>{
                var sumList = marksix.numbers;
                const reducer = (accumulator, currentValue) => accumulator + currentValue;
                let sum = sumList.reduce(reducer)
                expect(sum%2).toEqual(0);
            })
        }
    })
})