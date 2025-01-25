function pbar(scope,row,name)
{
    this.progress = 0;
    this.resGain = .3;
    this.resGrowth = 1.1 + scope.globalSpeedMult;
    this.row = row;
    this.name = name;


    this.level = 1.0;
    this.exp = 0.0;
    this.expGain = 1.0 + scope.globalExpMult;
    this.expNeed = 1.0;
    this.expGrowth = 1.4;
    this.score = 0.0;
    this.scoreGrowth = scope.globalScoreMult;
    this.speed = 100;
    this.scoreMulti = 1;
    this.transferPower = .01;
    this.transferAmount = 0;

    
    this.upgradesCost = [5,10,100,1000]
    this.upgradeNames = ['Score Inc','Exp Inc','Speed Inc','Transfer Inc']

    this.TransAmt = function(pbarIn) {
        this.transferAmount = Math.floor(pbarIn.score * pbarIn.transferPower * (10 ** 1)) / (10 ** 1);
    }


    this.update = function(pbarIn) {
        this.progress = this.progress + this.resGain;
        this.reduceGain();
        
        if (this.progress >= 100){
            scope.updatePrestigeExpected();
            this.progress = 0;
            if (pbarIn != null) {

                pbarIn.score = pbarIn.score + Math.floor(this.score * this.transferPower * (10 ** 1)) / (10 ** 1);
                this.score = this.score - Math.floor(this.score * this.transferPower * (10 ** 1)) / (10 ** 1);
            }


            this.exp = this.exp + this.expGain;
            this.score = this.score + this.scoreGrowth;
            this.levelUpCheck();
            
        }

    }

    this.levelUpCheck = function() {
        if (this.exp >= Math.floor(this.expNeed))
            {
                while(this.exp >= Math.floor(this.expNeed))
                {
                    this.exp = this.exp - Math.floor(this.expNeed);
                    this.expNeed =  this.expNeed * this.expGrowth;
                    this.resGain = this.resGain * this.resGrowth;
                    this.level = this.level + 1;
                    //this.scoreGrowth = this.scoreGrowth + (this.scoreMulti * scope.globalScoreMult);
                    this.speed = this.speed * this.resGrowth;
                }
            }
    }


    this.reduceGain = function() {
        if (this.resGain > 20.0) {
            this.resGain = this.resGain / 100
            this.scoreGrowth = this.scoreGrowth * 100;
            this.expGain = this.expGain * 100;
            this.scoreMulti = this.scoreMulti * 100;
        }
    }

    this.buyScore = function() {

        if (this.score >= this.upgradesCost[0]){
            this.score -= this.upgradesCost[0]
            this.upgradesCost[0] = this.upgradesCost[0] * Math.pow(2,1);
            this.scoreGrowth = this.scoreGrowth + (this.scoreMulti);
        }
    }

    this.buyExp = function() {

        if (this.score >= this.upgradesCost[1]){
            this.score -= this.upgradesCost[1]
            this.upgradesCost[1] = this.upgradesCost[1] * Math.pow(2,1);
            this.expGain = this.expGain + this.scoreMulti;
        }
    }

    this.buySpeed = function() {

        if (this.score >= this.upgradesCost[2]){
            this.score -= this.upgradesCost[2]
            this.upgradesCost[2] = this.upgradesCost[2] * Math.pow(2,1);
            this.resGain = this.resGain * this.resGrowth;
            this.speed = this.speed * this.resGrowth;
        }
    }

    this.buyTransfer = function() {

        if (this.score >= this.upgradesCost[3] && this.transferPower * 1.5 < 1){
            this.score -= this.upgradesCost[3]
            this.upgradesCost[3] = this.upgradesCost[3] * Math.pow(2,4);
            this.transferPower = this.transferPower * 1.5;
        }
    }

    this.updateBuyables = function() {
        this.scoreBuyable = this.score < this.upgradesCost[0];
        this.expBuyable = this.score < this.upgradesCost[1];
        this.speedBuyable = this.score < this.upgradesCost[2];
        this.transBuyable = this.score < this.upgradesCost[3];

    }

    

    

}