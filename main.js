module.exports = function(list){

    var sortedArray = [];

    list.forEach((element) => {

        if (sortedArray[element]) {

            sortedArray[element].push(element);

        } else {

            sortedArray[element] = [element];

        }

    })

    var reduction = sortedArray.filter(function (el) {
        return el != null;
    });

    reduction = JSON.parse("[" + JSON.stringify(reduction).replace(/[\[\]]/g, "") + "]");

    return reduction;

}