const {PokerHand} = require('./PokerHands');

function main(string) {


    const hand1 = new PokerHand(string[0]);
    const hand2 = new PokerHand(string[1]);

    let compareResult = hand1.compareWith(hand2);
    switch (compareResult) {
        case 1:
            compareResult = 'win';
            break;
        case 2:
            compareResult = 'loss';
            break;
        case 3:
            compareResult = 'tie';
            break;
    }
    return compareResult;
}

function example(string) {
    var Result = { "win": 1, "loss": 2, "tie": 3 }
    var OD=" 23456789TJQKA"
    function PokerHand(hand) {
        var s=hand.split` `.sort((a,b)=>"23456789TJQKA".indexOf(a[0])-"23456789TJQKA".indexOf(b[0])||"CDHS".indexOf(a[1])-"CDHS".indexOf(b[1])),
            s1=s.map(x=>x[0]).join``,s2=s.map(x=>x[1]).join``
        this.score=/(.)\1{4}/.test(s2)?  (OD.includes(s1)?25600000000*OD.indexOf(s1):3200000*OD.indexOf(s1[4])):
            OD.includes(s1)?  160000*OD.indexOf(s1):
                /(.)\1{2}(.)\2/.test(s1)||/(.)\1(.)\2{2}/.test(s1)?
                    64000000*OD.indexOf(s1.match(/(.)\1{2}/)[0][0]):
                    /(.)\1{3}/.test(s1)?  1280000000*OD.indexOf(s1.match(/(.)\1{3}/)[0][0]):
                        /(.)\1{2}/.test(s1)?  8000*OD.indexOf(s1.match(/(.)\1{2}/)[0][0]):
                            /(.)\1.?(.)\2/.test(s1)?  400*OD.indexOf(s1.match(/(.)\1/g)[1][0])+OD.indexOf(s1.match(/(.)\1/g)[0][0]):
                                /(.)\1/.test(s1)?  20*OD.indexOf(s1.match(/(.)\1/g)[0][0]):1
        this.s1=s1
    }

    PokerHand.prototype.compareWith = function(hand){
        if(this.score>hand.score) return Result.win
        if(this.score<hand.score) return Result.loss
        for(var i=4;i>=0;i--){
            if(OD.indexOf(this.s1[i])>OD.indexOf(hand.s1[i])) return Result.win
            if(OD.indexOf(this.s1[i])<OD.indexOf(hand.s1[i])) return Result.loss
        }
        return Result.tie
    }

    const hand1 = new PokerHand(string[0]);
    const hand2 = new PokerHand(string[1]);

    let compareResult = hand1.compareWith(hand2);
    return compareResult;
}

module.exports.main = main;
module.exports.example = example;
