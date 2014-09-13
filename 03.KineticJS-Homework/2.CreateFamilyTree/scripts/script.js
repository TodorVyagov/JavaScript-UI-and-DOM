window.onload = function () {
    var stage = new Kinetic.Stage({
        container: 'canvas-container',
        width: 1000,
        height: 700
    });
    var layer = new Kinetic.Layer();
    var rect = new Kinetic.Rect({
        stroke: 'green',
        x: 100,
        y: 100,
        width: 100,
        height: 60
    });
       
    layer.add(rect);

    stage.add(layer);

    var familyMembers = [{
        mother: 'Maria Petrova',
        father: 'Georgi Petrov',
        children: ['Teodora Petrova', 'Peter Petrov']
    }, {
        mother: 'Petra Stamatova',
        father: 'Todor Stamatov',
        children: ['Maria Petrova']
    }];



}