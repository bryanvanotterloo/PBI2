 function SaveGame(scope) {
    this.saveTheGame = function() {
        var toSave = {};
        toSave.progBars = scope.progBars;
        toSave.buttonCosts = scope.buttonCosts;
        toSave.autoBuyers = scope.autoBuyers;
        toSave.globalScoreMult = scope.globalScoreMult;
        toSave.globalSpeedMult = scope.globalSpeedMult;
        toSave.globalExpMult = scope.globalExpMult;
        toSave.prestigePoints = scope.prestigePoints;
        toSave.startingBars = scope.startingBars;
        toSave.prestigePointsTotal = scope.prestigePointsTotal;
        toSave.activeButton = scope.activeButton;
        window.localStorage.pbars1 = JSON.stringify(toSave);
    };
    this.loadTheGame = function() {
        // return; //hard-clear the save
        if (!window.localStorage.pbars1) {
            this.loadDefaults();
            return;
        }
        var toLoad = JSON.parse(window.localStorage.pbars1);
        console.log(toLoad);
        scope.progBars = [];
        scope.buttonCosts = toLoad.buttonCosts;
        scope.autoBuyers = toLoad.autoBuyers;
        scope.globalScoreMult = toLoad.globalScoreMult;
        scope.globalSpeedMult = toLoad.globalSpeedMult;
        scope.globalExpMult = toLoad.globalExpMult;
        scope.prestigePoints = toLoad.prestigePoints;
        scope.startingBars = toLoad.startingBars;
        scope.prestigePointsTotal = toLoad.prestigePointsTotal;
        scope.activeButton = toLoad.activeButton;
        for(var x = toLoad.progBars.length - 1; x >= 0; x--) {
            var progressBarFromSave = toLoad.progBars[x];
            var progBar = new pbar(scope);
            for (var key in progressBarFromSave) {
                if (progressBarFromSave.hasOwnProperty(key)) {
                    progBar[key] = progressBarFromSave[key];
                }
            }
            scope.progBars.unshift(progBar);
            scope.addProgressBarUI();
        }
        initialRowCount = scope.progBars.length;
    };
    this.loadDefaults = function() {
        window.localStorage.removeItem('pbars1');
        console.log("loading defaults");
        scope.progBars = [];
        var progressBarContainer = document.getElementById('progressBars');
        progressBarContainer.innerHTML = "";

        scope.globalScoreMult = 1;
        scope.globalSpeedMult = 0;
        scope.globalExpMult = 0;
        scope.prestigePoints = 0.0;
        scope.prestigePointsTotal = 0.0;
        scope.startingBars = 1;
        scope.activeButton = [false,false,false,false,false,false,false,false];
        scope.buttonCosts = [3,1000000,10000,1000,100,10,1,1];
        scope.autoBuyers = [false,false,false,false,false];
    }
}
