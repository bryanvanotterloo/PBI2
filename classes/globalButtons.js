function globalButtons(scope) {

    this.buyProgbar = function() {
        if (scope.buttonCosts[0] <= scope.progBars[scope.progBars.length - 1].score)
        {
            scope.progBars[scope.progBars.length - 1].score -= scope.buttonCosts[0];
            scope.buttonCosts[0] = Math.ceil(scope.buttonCosts[0] * Math.pow(2,1));
            scope.startingBars += 2;
            
        }


    }

    this.autoBuyer1 = function() {
        if (scope.buttonCosts[2] <= scope.prestigePoints)
        {
            scope.prestigePoints -= scope.buttonCosts[2];
            scope.buttonCosts[2] = Math.ceil(scope.buttonCosts[2] * Math.pow(1.5,4));
            scope.autoBuyers[0] = true;
            scope.activeButton[2] = true;
        }
    }

    this.autoBuyer2 = function() {
        if (scope.buttonCosts[3] <= scope.prestigePoints)
        {
            scope.prestigePoints -= scope.buttonCosts[3];
            scope.buttonCosts[3] = Math.ceil(scope.buttonCosts[3] * Math.pow(1.5,4));
            scope.autoBuyers[1] = true;
            scope.activeButton[3] = true;
        }
    }

    this.autoBuyer3 = function() {
        if (scope.buttonCosts[4] <= scope.prestigePoints)
        {
            scope.prestigePoints -= scope.buttonCosts[4];
            scope.buttonCosts[4] = Math.ceil(scope.buttonCosts[4] * Math.pow(1.5,4));
            scope.autoBuyers[2] = true;
            scope.activeButton[4] = true;
        }
    }

    this.autoBuyer4 = function() {
        if (scope.buttonCosts[5] <= scope.prestigePoints)
        {
            scope.prestigePoints -= scope.buttonCosts[5];
            scope.buttonCosts[5] = Math.ceil(scope.buttonCosts[5] * Math.pow(1.5,4));
            scope.autoBuyers[3] = true;
            scope.activeButton[5] = true;
        }
    }

    this.autoBuyer5 = function() {
        if (scope.buttonCosts[1] <= scope.prestigePoints)
        {
            scope.prestigePoints -= scope.buttonCosts[1];
            scope.buttonCosts[1] = Math.ceil(scope.buttonCosts[1] * Math.pow(1.5,4));
            scope.autoBuyers[4] = true;
            scope.activeButton[1] = true;
        }
    }

    this.buyGS = function() {
        if (scope.buttonCosts[6] <= scope.prestigePoints)
        {
            
            scope.prestigePoints -= scope.buttonCosts[6];
            scope.buttonCosts[6] = scope.buttonCosts[6] +1;
            scope.globalScoreMult = scope.globalScoreMult + 1;
            for(var i = 0; i < scope.progBars.length; i++){
                scope.progBars[i].scoreGrowth = scope.progBars[i].scoreGrowth + 1 * scope.progBars[i].scoreMulti;
            }
        }
        


    }

    this.buyGSp = function() {
        if (scope.buttonCosts[6] <= scope.prestigePoints)
        {
            
            scope.prestigePoints -= scope.buttonCosts[6];
            scope.buttonCosts[6] = Math.ceil(scope.buttonCosts[6] * Math.pow(2,1));
            scope.globalSpeedMult = scope.globalSpeedMult + .01;
            for(var i = 0; i < scope.progBars.length; i++){
                scope.progBars[i].resGrowth = scope.progBars[i].resGrowth * 1.01;
            }
        }
        


    }

    this.buyGExp = function() {
        if (scope.buttonCosts[7] <= scope.prestigePoints)
        {
            
            scope.prestigePoints -= scope.buttonCosts[7];
            scope.buttonCosts[7] = Math.ceil(scope.buttonCosts[7] + 1);
            scope.globalExpMult = scope.globalExpMult + 1;
            for(var i = 0; i < scope.progBars.length; i++){
                scope.progBars[i].expGain = scope.progBars[i].expGain + 1;
            }
        }
        


    }



    this.autoBuy1 = function(barin) {
        if(scope.autoBuyers[0] == true)
        {
            barin.buyScore();
        }
    }

    this.autoBuy2 = function(barin) {
        if(scope.autoBuyers[1] == true)
        {
            barin.buyExp();
        }
    }

    this.autoBuy3 = function(barin) {
        if(scope.autoBuyers[2] == true)
        {
            barin.buySpeed();
        }
    }

    this.autoBuy4 = function(barin) {
        if(scope.autoBuyers[3] == true && barin.row != 0)
        {

            barin.buyTransfer();
        }
    }

    this.autoBuy5 = function() {
        if(scope.autoBuyers[4] == true)
        {

            this.buyProgbar();
        }
    }

    

}

