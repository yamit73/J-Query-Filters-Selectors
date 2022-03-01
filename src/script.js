var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];

$(document).ready(function(){
    function display(){
        var productTable='<table id="prTable">\
                        <tr>\
                            <th>ID</th>\
                            <th>Name</th>\
                            <th>Brand</th>\
                            <th>Os</th>\
                        </tr>';
        var tableRows="";
        for(var i=0;i<products.length;i++){
            tableRows +='<tr>\
                            <td>'+products[i].id+'</td>\
                            <td>'+products[i].name+'</td>\
                            <td>'+products[i].brand+'</td>\
                            <td>'+products[i].os+'</td>\
                        </tr>';
        }
        tableRows += '</table>';
        productTable += tableRows;
        $("#wrapper").html(productTable);
    }
    display();
    $("#searchText").keyup(function(){
        var searchTex=$("#searchText").val();
        var productTable='<table id="prTable">\
                        <tr>\
                            <th>ID</th>\
                            <th>Name</th>\
                            <th>Brand</th>\
                            <th>Os</th>\
                        </tr>';
        var tableRows="";
        for(var i=0;i<products.length;i++){
            if(products[i].id == searchTex || products[i].name == searchTex){
                tableRows +='<tr>\
                            <td>'+products[i].id+'</td>\
                            <td>'+products[i].name+'</td>\
                            <td>'+products[i].brand+'</td>\
                            <td>'+products[i].os+'</td>\
                        </tr>';
            }
            
        }
        tableRows += '</table>';
        productTable += tableRows;
        $("#wrapper").html(productTable);
    });
    $("#filterSection").html('\
            <lable>Filter\
                <select id="filterByBrand" name="filterByBrand">\
                    <option value=""></option>\
                    <option value="Apple">Apple</option>\
                    <option value="Motorola">Motorola</option>\
                    <option value="Samsung">Samsung</option>\
                    <option value="ASUS">ASUS</option>\
                    <option value="Microsoft">Microsoft</option>\
                </select>\
                <select id="filterByOs" name="filterByOs">\
                    <option value=""></option>\
                    <option value="Android">Android</option>\
                    <option value="iOS">iOS</option>\
                    <option value="Windows">Windows</option>\
                </select>\
         </lable>\
    ');
    var filterByBrand='';
    var filterByOs='';
    $("#filterByBrand").change(function(){
        filterByBrand=$("#filterByBrand").val();
        //console.log(filterByBrand,filterByOs);
        if(filterByBrand!="" && filterByOs!=""){
            filterBoth(filterByBrand,filterByOs);
        }else{
            filter(filterByBrand);
        }
    });
    $("#filterByOs").change(function(){
        filterByOs=$("#filterByOs").val();
        //console.log(filterByBrand,filterByOs);
        if(filterByBrand!="" && filterByOs!=""){
            filterBoth(filterByBrand,filterByOs);
        }else{
            filter(filterByOs);
        }
    });
   
    function filterBoth(filterByBrand,filterByOs){
        var productTable='<table id="prTable">\
                        <tr>\
                            <th>ID</th>\
                            <th>Name</th>\
                            <th>Brand</th>\
                            <th>Os</th>\
                        </tr>';
        var tableRows="";
        for(var i=0;i<products.length;i++){
            if(products[i].brand == filterByBrand && products[i].os == filterByOs){
                tableRows +='<tr>\
                            <td>'+products[i].id+'</td>\
                            <td>'+products[i].name+'</td>\
                            <td>'+products[i].brand+'</td>\
                            <td>'+products[i].os+'</td>\
                        </tr>';
            }
            
        }
        tableRows += '</table>';
        productTable += tableRows;
        $("#wrapper").html(productTable);
    }
    function filter(filterVar){
        var productTable='<table id="prTable">\
                        <tr>\
                            <th>ID</th>\
                            <th>Name</th>\
                            <th>Brand</th>\
                            <th>Os</th>\
                        </tr>';
        var tableRows="";
        for(var i=0;i<products.length;i++){
            if(products[i].brand == filterVar || products[i].os == filterVar){
                tableRows +='<tr>\
                            <td>'+products[i].id+'</td>\
                            <td>'+products[i].name+'</td>\
                            <td>'+products[i].brand+'</td>\
                            <td>'+products[i].os+'</td>\
                        </tr>';
            }
            
        }
        tableRows += '</table>';
        productTable += tableRows;
        $("#wrapper").html(productTable);
    }

});