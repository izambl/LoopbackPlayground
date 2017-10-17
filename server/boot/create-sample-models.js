module.exports = function (app) {
    app.dataSources.tiempoGoals.automigrate('Priority', function(err) {
        if (err) throw err;

        app.models.Priority.create([
            {
                name: 'Bel Cafe',
                category: 'Vancouver'
            },
            {
                name: 'Three Bees Coffee House',
                category: 'San Mateo'
            },
            {
                name: 'Caffe Artigiano',
                category: 'Vancouver'
            }
        ],
        function (err, Priority) {
            if (err) throw err;

            console.log('Models created: \n', Priority);
        });
    });
};
