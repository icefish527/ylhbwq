function okDomMousedown(){
    var shpFile = document.getElementById('shp').files[0];
    var dbfFile = document.getElementById('dbf').files[0];
    if (shpFile) {
        var opts = { shp: shpFile };
        if (dbfFile) {
            opts['dbf'] = dbfFile;
        }
        var shapefile = new Shapefile(opts, function(data){
            if(window.sessionStorage.getItem('shp2geojson')){
                window.sessionStorage.removeItem('shp2geojson');
            }
            var item = {
                shpFileName:shpFile.name,
                geoJsonData:data.geojson
            };
            console.log(item);
            window.sessionStorage.setItem('shp2geojson',JSON.stringify(item));
        });
    }
};