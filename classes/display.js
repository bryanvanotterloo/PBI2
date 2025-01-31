function Display() {
    this.createProgBar = function(rowcount) {
        var progBar = "progBars[" + rowcount + "]";


        return "<div class = 'progbarout' ><div class = 'progbarSizer' ><div class = 'progbarin p{{" + progBar + ".row}}' style='width:{{" + progBar + ".progress}}%;background-color:{{" + progBar + ".colorDisplay()}}'></div>" +
        "<div class = 'exp p{{" + progBar + ".row}}'>Level {{converter(" + progBar + ".level)}}   {{converter(" + progBar + ".exp)}}/{{converter(Math.floor(" + progBar + ".expNeed))}}</div>" +
        "<div class = 'scoreTransfer p{{" + progBar + ".row}}'>(+{{converter(" + progBar + ".transferAmount)}})</div>" + 
        "<div class = 'score p{{" + progBar + ".row}}'>{{converter(" + progBar + ".score)}}</div>" + 
        "<div class = 'scoreGrowth p{{" + progBar + ".row}}'>{{converter(" + progBar + ".scoreGrowth)}}</div>" + 
        "<div class = 'speed p{{" + progBar + ".row}}'>{{converter(" + progBar + ".speed)}}%</div>" + 
        "<div class = 'buybutton buyscore p{{" + progBar + ".row}}' ng-class="+'"'+"{ 'unbuyable' : "+ progBar +".scoreBuyable"+'}"'+" ng-click='" + progBar + ".buyScore()'> {{" + progBar + ".upgradeNames[0]}} | {{converter(" + progBar + ".upgradesCost[0])}}</div>" + 
        "<div class = 'buybutton buyexp p{{" + progBar + ".row}}' ng-class="+'"'+"{ 'unbuyable' : "+ progBar +".expBuyable"+'}"'+" ng-click='" + progBar + ".buyExp()'> {{" + progBar + ".upgradeNames[1]}} | {{converter(" + progBar + ".upgradesCost[1])}}</div>" + 
        "<div class = 'buybutton buyspeed p{{" + progBar + ".row}}' ng-class="+'"'+"{ 'unbuyable' : "+ progBar +".speedBuyable"+'}"'+" ng-click='" + progBar + ".buySpeed()'> {{" + progBar + ".upgradeNames[2]}} | {{converter(" + progBar + ".upgradesCost[2])}}</div>" + 
        "<div class = 'buybutton buytransfer p{{" + progBar + ".row}}' ng-class="+'"'+"{ 'unbuyable' : "+ progBar +".transBuyable"+'}"'+" ng-click='" + progBar + ".buyTransfer()'> {{" + progBar + ".upgradeNames[3]}} | {{converter(" + progBar + ".upgradesCost[3])}}</div>" + 
        "</div></div>"

    }

    this.createButton = function(buttonText, onclick,costid,buyVar) {
        var progBar = "progBars[0]";
        return "<div class='buttonContainer' ng-if='!activeButton[" + buyVar + "]'>"+
        "<button class='buyButton ' ng-class="+'"' + "{'unbuyable' : buttonBuyable[" + buyVar + "]} " + '"' + " ng-click='"+onclick+"()' ng-mouseover='buttonMouseOver()' ng-mouseleave='buttonMouseLeave()'>"+buttonText+" <br /> {{converter(buttonCosts["+costid+"])}} </button>"+
        "</div>"+
        "</div>";
};

}
