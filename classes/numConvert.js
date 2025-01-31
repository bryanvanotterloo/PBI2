

function converter(num) {
    if (num >= 1000)
    {
        return addSuffix(num);
    }
    else if (!num)
    {
        return 0;
    }
    else {
        return Math.floor((num) * (10 ** 1)) / (10 ** 1);
    }
}

function addSuffix(num) {

    var suffixes = ['K','M','B','T','Qa','Qu','Sx','Sp','Oc','No','Dc','UDc','Ddc']
    var suffixIndex = Math.floor((Math.floor(num).toString().length-1) /3);
    var numReduced = Math.floor((num * Math.pow(10,suffixIndex * -3)) * (10 ** 1)) / (10 ** 1);
    return numReduced.toString() + suffixes[suffixIndex-1];
}


