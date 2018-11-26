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
        for (var i=0; i<1000; i++){
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
            marksix.randomPickWithRange([1,1,1,1,1]);
            console.log(marksix.toString());
        })
        it('test', ()=>{
            expect(true).toEqual(true)
        })
        for (var i=0; i<1000; i++){
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
})