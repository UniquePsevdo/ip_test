angular.module("testTaskApp", ["ngRoute", 'ngMaterial', 'appServices'])
    .constant("baseUrl", "http://aqueous-plains-11730.herokuapp.com/")
    /*.constant("baseUrl", "http://localhost:3000")*/
    .config(function ($locationProvider, $routeProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when("/", {
            templateUrl: "client-views/main.html"
        });

    })
    .controller("ipCtrl", ['$scope', 'apiService', function ($scope, apiService) {
        $scope.us_voted = [];
        $scope.fr_voted = [];
        $scope.us_providers = [];
        $scope.fr_providers = [];
        $scope.us_result = [];
        $scope.fr_result = [];
        $scope.us_result_prov = [];
        $scope.fr_result_prov = [];
        $scope.us_providers_data = [
            {provider:'Nobis Technology Group', name: 'ExpressVPN Los Angeles', city:'Los Angeles'},
            {provider:'Nobis Technology Group', name: 'ExpressVPN Los Angeles_San Diego', city:'San Diego'},
            {provider:'Nobis Technology Group', name: 'ExpressVPN Los Angeles_Seattle', city:'Seattle'},
            {provider:'Nobis Technology Group', name: 'ExpressVPN Los Angeles San Fran', city:'Los Angeles'},
            {provider:'SoftLayer Technologies', name: 'ExpressVPN USA Miami', city:'Miami'},
            {provider:'SoftLayer Technologies', name: 'ExpressVPN Miami', city:'Miami'},
            {provider:'SoftLayer Technologies', name: 'ExpressVPN Washington DC', city:'Washington'},
            {provider:'SoftLayer Technologies', name: 'ExpressVPN Seattle_Detroit', city:'Detroit'},
            {provider:'Univera Networks', name: 'ExpressVPN Washington DC-2_Texas Dallas', city:'Dallas'},
            {provider:'Univera Networks', name: 'ExpressVPN Hollywood_Austin', city:'Austin'},
            {provider:'Univera Networks', name: 'ExpressVPN_Hollywood_Austin', city:'Austin'},
            {provider:'GigeNET', name: 'ExpressVPN Chicago', city:'Chicago'},
            {provider:'GigeNET', name: 'ExpressVPN_Chicago', city:'Chicago'},
            {provider:'IO Capital Princess', name: 'ExpressVPN Dallas_Edison', city:'Edison'},
            {provider:'IO Capital Princess', name: 'ExpressVPN_Dallas_Edison', city:'Edison'},
            {provider:'IO Capital Princess', name: 'ExpressVPN New York', city:'New York'},
            {provider:'Take 2 Hosting', name: 'ExpressVPN San Francisco_Denver', city:'Denver'},
            {provider:'Take 2 Hosting', name: 'ExpressVPN San Francisco_Los Angeles', city:'Los Angeles'},
            {provider:'Express VPN', name: 'ExpressVPN_Las Vegas', city:'Las Vegas'},
            {provider:'Express VPN', name: 'ExpressVPN Las Vegas', city:'Las Vegas'},
            {provider:'Interserver', name: 'ExpressVPN_New_Jersey-1_Philadelphia', city:'Philadelphia'},
            {provider:'Interserver', name: 'ExpressVPN New Jersey 1', city:'New Jersey'},
            {provider:'Interserver', name: 'ExpressVPN New Jersey-1_Philadelphia', city:'Philadelphia'},
            {provider:'EGIHosting', name: 'ExpressVPN San Jose_Los Angeles', city:'Los Angeles'},
            {provider:'Highvelicity Ventures Corp', name: 'ExpressVPN Tampa-1_Lewes', city:'Lewes'},
            {provider:'WebNX', name: 'ExpressVPN Los Angeles-1_Boston', city:'Boston'},
            {provider:'Packet Host', name: 'ExpressVPN New Jersey-2_New Jersey', city:'New Jersey'},
            {provider:'Paradise Networks', name: 'VyprVPN USA New York_New York', city:'New York'},
            {provider:'Paradise Networks', name: 'VyprVPN USA Miami_Miami', city:'Miami'}
        ];

        $scope.fr_providers_data = [
            {provider:'Yesup Ecommerce Solutions', name: 'ExpressVPN Canada - Toronto_North York', city:'North York'},
            {provider:'Yesup Ecommerce Solutions', name: 'ExpressVPN Canada Montreal-2', city:'Montreal'},
            {provider:'Yesup Ecommerce Solutions', name: 'ExpressVPN Canada_Montreal-2', city:'Montreal'},
            {provider:'eSecureData', name: 'ExpressVPN Canada - Vancouver', city:'Vancouver'},
            {provider:'Iliad Enterprises Customers', name: 'ExpressVPN France Paris-2_Marseille', city:'Marseille'},
            {provider:'Iliad Enterprises Customers', name: 'ExpressVPN France Paris-2_Nice', city:'Nice'},
            {provider:'Iliad Enterprises Customers', name: 'ExpressVPN France_Paris-2', city:'Paris'},
            {provider:'Iliad Enterprises Customers', name: 'ExpressVPN France-Paris-2', city:'Paris'},
            {provider:'Iliad Enterprises Customers', name: 'ExpressVPN France-Paris-2_Bordeaux', city:'Bordeaux'},
            {provider:'Iliad Enterprises Customers', name: 'ExpressVPN France-Paris-2_Lille', city:'Lille'},
            {provider:'Iliad Enterprises Customers', name: 'ExpressVPN France-Paris-2_Lyon', city:'Lyon'},
            {provider:'Iliad Enterprises Customers', name: 'ExpressVPN France-Paris-2_Montpellier', city:'Montpellier'},
            {provider:'Leaseweb Deutschland Gmbh', name: 'ExpressVPN Frankfurt-1', city:'Frankfurt'},
            {provider:'Leaseweb Deutschland Gmbh', name: 'ExpressVPN Germany_Frankfurt-1', city:'Frankfurt'},
            {provider:'Dediserv Dedicated Servers Spolka z o.o', name: 'ExpressVPN Germany_Dusseldorf', city:'Dusseldorf'},
            {provider:'root SA', name: 'ExpressVPN Luxembourg', city:'Luxembourg'},
            {provider:'SoloGigabit S.L.', name: 'ExpressVPN Spain_Barcelona', city:'Barcelona'},
            {provider:'1.FM Gmbh', name: 'ExpressVPN Switzerland_Baar', city:'Baar'},
            {provider:'1.FM Gmbh', name: 'ExpressVPN Switzerland_Zurich', city:'Zurich'},
            {provider:'RapidSwitch Ltd', name: 'ExpressVPN United Kingdom_Berkshire', city:'Berkshire'},
            {provider:'VooServers Ltd', name: 'ExpressVPN United Kingdom_Kent', city:'Kent'},
            {provider:'UK Dedicated Servers Limited', name: 'ExpressVPN United Kingdom_London', city:'London'},
            {provider:'Powerhouse Management', name: 'VyprVPN Belgium_Antwerp', city:'Antwerp'},
            {provider:'Powerhouse Management', name: 'VyprVPN Belgium_Bruges', city:'Bruges'},
            {provider:'Powerhouse Management', name: 'VyprVPN Belgium_Brussels', city:'Brussels'},
            {provider:'Powerhouse Management', name: 'VyprVPN Belgium_Ghent', city:'Ghent'},
            {provider:'Powerhouse Management', name: 'VyprVPN Canada_Hamilton', city:'Hamilton'},
            {provider:'Powerhouse Management', name: 'VyprVPN Canada_Montreal', city:'Montreal'},
            {provider:'Powerhouse Management', name: 'VyprVPN Canada_Ottawa', city:'Ottawa'},
            {provider:'Powerhouse Management', name: 'VyprVPN Canada_Toronto', city:'Toronto'},
            {provider:'Powerhouse Management', name: 'VyprPN France_Paris', city:'Paris'},
            {provider:'Powerhouse Management', name: 'VyprVPN France_Bordeaux', city:'Bordeaux'},
            {provider:'Powerhouse Management', name: 'VyprVPN France_Lille', city:'Lille'},
            {provider:'Powerhouse Management', name: 'VyprVPN France_Lyon', city:'Lyon'},
            {provider:'Powerhouse Management', name: 'VyprVPN France_Marseille', city:'Marseille'},
            {provider:'Powerhouse Management', name: 'VyprVPN France_Montpellier', city:'Montpellier'},
            {provider:'Powerhouse Management', name: 'VyprVPN France_Nantes', city:'Nantes'},
            {provider:'Powerhouse Management', name: 'VyprVPN France_Nice', city:'Nice'},
            {provider:'Powerhouse Management', name: 'VyprVPN France_Paris', city:'Paris'},
            {provider:'Powerhouse Management', name: 'VyprVPN France_Reims', city:'Reims'},
            {provider:'Powerhouse Management', name: 'VyprVPN France_Toulouse', city:'Toulouse'},
            {provider:'Powerhouse Management', name: 'VyprVPN Germany_Berlin', city:'Berlin'},
            {provider:'Powerhouse Management', name: 'VyprVPN Germany_Frankfurt', city:'Frankfurt'},
            {provider:'Powerhouse Management', name: 'VyprVPN Germany_Stuttgart', city:'Stuttgart'},
            {provider:'Powerhouse Management', name: 'VyprPN Luxembourg_City', city:'Luxembourg'},
            {provider:'Powerhouse Management', name: 'VyprVPN Luxembourg', city:'Luxembourg'},
            {provider:'Powerhouse Management', name: 'VyprVPN Luxembourg_Altlinster', city:'Altlinster'},
            {provider:'Powerhouse Management', name: 'VyprVPN Spain_Barcelona', city:'Barcelona'},
            {provider:'Powerhouse Management', name: 'VyprVPN Spain_Madrid', city:'Madrid'},
            {provider:'Powerhouse Management', name: 'VyprVPN Spain_Valencia', city:'Valencia'},
            {provider:'Powerhouse Management', name: 'VyprPN Switzerland_Zurich', city:'Zurich'},
            {provider:'Powerhouse Management', name: 'VyprVPN Switzerland_Bern', city:'Bern'},
            {provider:'Powerhouse Management', name: 'VyprVPN Switzerland_Zurich', city:'Zurich'},
            {provider:'Powerhouse Management', name: 'VyprVPN United Kingdom_Brighton', city:'Brighton'},
            {provider:'Powerhouse Management', name: 'VyprVPN United Kingdom_London', city:'London'},
            {provider:'Powerhouse Management', name: 'VyprVPN United Kingdom_Sheffield', city:'Sheffield'}
        ];

        $scope.vpn_us_providers = ['ExpressVPN Los Angeles', 'ExpressVPN USA Miami', 'ExpressVPN Miami', 'VyprVPN USA New York','VyprVPN USA Miami', 'ExpressVPN Washington DC', 'ExpressVPN Washington DC-2', 'ExpressVPN Chicago', 'ExpressVPN Dallas', 'ExpressVPN Hollywood', 'ExpressVPN San Francisco', 'ExpressVPN New Jersey 1', 'ExpressVPN New York', 'ExpressVPN Las Vegas', 'ExpressVPN San Francisco', 'ExpressVPN San Jose', 'ExpressVPN Seattle', 'ExpressVPN Tampa-1'];
        $scope.vpn_fr_providers = ['ExpressVPN France', 'ExpressVPN Switzerland', 'ExpressVPN Frankfurt-1', 'ExpressVPN Canada Montreal-2', 'VyprVPN France', 'VyprVPN Germany', 'VyprVPN Spain', 'VyprVPN United Kingdom', 'VyprVPN Belgium', 'VyprVPN Canada', 'VyprPN Luxembourg', 'VyprVPN Switzerland', 'ExpressVPN Luxembourg', 'ExpressVPN Canada - Vancouver', 'ExpressVPN Canada - Toronto'];

        $scope.us_total = 3000;
        $scope.fr_total = 4000;

        $scope.us_providers_result = [
            {name: 'Nobis Technology Group', result:[], currentNumber:''},
            {name: 'SoftLayer Technologies', result:[], currentNumber:''},
            {name: 'Univera Networks', result:[], currentNumber:''},
            {name: 'GigeNET', result:[], currentNumber:''},
            {name: 'IO Capital Princess', result:[], currentNumber:''},
            {name: 'Take 2 Hosting', result:[], currentNumber:''},
            {name: 'Express VPN', result:[], currentNumber:''},
            {name: 'Interserver', result:[], currentNumber:''},
            {name: 'EGIHosting', result:[], currentNumber:''},
            {name: 'Highvelicity Ventures Corp', result:[], currentNumber:''},
            {name: 'WebNX', result:[], currentNumber:''},
            {name: 'Packet Host', result:[], currentNumber:''},
            {name: 'Paradise Networks', result:[], currentNumber:''}
    ];
        $scope.us_cities_result = [
            {name: 'Los Angeles', result:[], currentNumber:''},
            {name: 'Miami', result:[], currentNumber:''},
            {name: 'San Diego', result:[], currentNumber:''},
            {name: 'Seattle', result:[], currentNumber:''},
            {name: 'San Fran', result:[], currentNumber:''},
            {name: 'Washington', result:[], currentNumber:''},
            {name: 'Detroit', result:[], currentNumber:''},
            {name: 'Dallas', result:[], currentNumber:''},
            {name: 'Austin', result:[], currentNumber:''},
            {name: 'Chicago', result:[], currentNumber:''},
            {name: 'Edison', result:[], currentNumber:''},
            {name: 'New York', result:[], currentNumber:''},
            {name: 'Denver', result:[], currentNumber:''},
            {name: 'Las Vegas', result:[], currentNumber:''},
            {name: 'Philadelphia', result:[], currentNumber:''},
            {name: 'Lewes', result:[], currentNumber:''},
            {name: 'Boston', result:[], currentNumber:''},
            {name: 'New Jersey', result:[], currentNumber:''}
        ];

        $scope.fr_providers_result = [
            {name: 'EDIS Gmbh', result:[], currentNumber:''},
            {name: 'Yesup Ecommerce Solutions', result:[], currentNumber:''},
            {name: 'eSecureData', result:[], currentNumber:''},
            {name: 'Iliad Enterprises Customers', result:[], currentNumber:''},
            {name: 'Leaseweb Deutschland Gmbh', result:[], currentNumber:''},
            {name: 'Dediserv Dedicated Servers Spolka z o.o', result:[], currentNumber:''},
            {name: 'root SA', result:[], currentNumber:''},
            {name: 'SoloGigabit S.L.', result:[], currentNumber:''},
            {name: '1.FM Gmbh', result:[], currentNumber:''},
            {name: 'RapidSwitch Ltd', result:[], currentNumber:''},
            {name: 'VooServers Ltd', result:[], currentNumber:''},
            {name: 'UK Dedicated Servers Limited', result:[], currentNumber:''},
            {name: 'Powerhouse Management', result:[], currentNumber:''}
        ];

        var test = [];

        apiService.getUSVoted().then(function(data){
            $scope.us_voted = data;
            for(var i = 0; i < $scope.us_voted.length; i++){
                if(test.indexOf($scope.us_voted[i].cityId) === -1){
                    test.push($scope.us_voted[i].cityId);
                }else{
                    console.log('refuse');
                }

                for(var j=0; j < $scope.us_providers_data.length; j++){
                    if($scope.us_voted[i].cityId.trim()===$scope.us_providers_data[j].name.trim()){
                        console.log(i,'-1');
                        for(var z=0; z < $scope.us_providers_result.length; z++){
                            if($scope.us_providers_result[z].name.trim()===$scope.us_providers_data[j].provider.trim()){
                                console.log(i,'-2');
                                $scope.us_providers_result[z].result.push($scope.us_voted[i].email);
                                $scope.us_providers_result[z].currentNumber = $scope.us_providers_result[z].result.length;
                            }
                            break;
                        }
                        for(var z=0; z < $scope.us_cities_result.length; z++){
                            if($scope.us_cities_result[z].name.trim()===$scope.us_providers_data[j].city.trim()){
                                console.log(i,'-3');
                                $scope.us_cities_result[z].result.push($scope.us_voted[i].email);
                                $scope.us_cities_result[z].currentNumber = $scope.us_cities_result[z].result.length;
                            }
                            break;
                        }
                    }
                    break;
                }
            }

            console.log(test);

            /*console.log($scope.us_providers_result);
            console.log($scope.us_cities_result);*/

            /*$scope.us_provider_required = parseInt($scope.us_total/$scope.us_providers.length);
            for(var j = 0; j < $scope.us_providers.length; j++){
                $scope.us_result.push({name: $scope.us_providers[j], arr:[], sutki:"", currentNumber:""});
            }

            for(var z = 0; z < $scope.us_voted.length; z++){
                for(var s = 0; s < $scope.us_result.length; s++){
                    if($scope.us_result[s].name === $scope.us_voted[z].cityId){
                        $scope.us_result[s].arr.push($scope.us_voted[z]);
                    }
                }
            }
            for(var f =0; f < $scope.us_result.length; f++){
                var sutkiCounter = 0;
                var now = new Date();
                var beforeYesterday1  = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1, now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
                for(var l=0; l < $scope.us_result[f].arr.length; l++){
                    if(beforeYesterday1 > new Date($scope.us_result[f].arr[l].votingDate)){
                        sutkiCounter++;
                    }
                }
                $scope.us_result[f].sutki = sutkiCounter;
                $scope.us_result[f].currentNumber = $scope.us_result[f].arr.length;
            }



            $scope.us_provider_required_2 = parseInt($scope.us_total/$scope.vpn_us_providers.length);
            for(var a =0; a < $scope.vpn_us_providers.length; a++){
                $scope.us_result_prov[a] = {name: $scope.vpn_us_providers[a], arr: [], sutki:"",  currentNumber: ""};
                for(var h=0; h < $scope.us_voted.length; h++){
                    if($scope.us_voted[h].cityId.indexOf($scope.vpn_us_providers[a]) > -1){
                        $scope.us_result_prov[a].arr.push($scope.us_voted[h]);
                    }
                }

                for(var u =0; u < $scope.us_result_prov.length; u++){
                    var sutkiCounter = 0;
                    var now = new Date();
                    var beforeYesterday2  = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1, now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
                    for(var w=0; w < $scope.us_result_prov[u].arr.length; w++){
                        if(beforeYesterday2 > new Date($scope.us_result_prov[u].arr[w].votingDate)){
                            sutkiCounter++;
                        }
                    }
                    $scope.us_result_prov[u].sutki = sutkiCounter;
                    $scope.us_result_prov[a].currentNumber = $scope.us_result_prov[a].arr.length;
                }
            }
            console.log($scope.us_result_prov);*/

        });

        apiService.getFRVoted().then(function(data){
            $scope.fr_voted = data;
            for(var m = 0; m < $scope.fr_voted.length; m++){
                if(m === 0){
                    $scope.fr_providers.push($scope.fr_voted[m].cityId);
                }else{
                    if($scope.fr_providers.indexOf($scope.fr_voted[m].cityId)===-1){
                        $scope.fr_providers.push($scope.fr_voted[m].cityId);
                    }
                }
            }
            $scope.fr_provider_required = parseInt($scope.fr_total/$scope.fr_providers.length);
            for(var o = 0; o < $scope.fr_providers.length; o++){
                $scope.fr_result.push({name: $scope.fr_providers[o], arr:[], sutki:"", currentNumber:""});
            }

            for(var y = 0; y < $scope.fr_voted.length; y++){
                for(var s = 0; s < $scope.fr_result.length; s++){
                    if($scope.fr_result[s].name === $scope.fr_voted[y].cityId){
                        $scope.fr_result[s].arr.push($scope.fr_voted[y]);
                    }
                }
            }

            for(var b =0; b < $scope.fr_result.length; b++){
                var sutkiCounter = 0;
                var now = new Date();
                var beforeYesterday3  = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1, now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
                for(var q=0; q < $scope.fr_result[b].arr.length; q++){
                    if(beforeYesterday3 > new Date($scope.fr_result[b].arr[q].votingDate)){
                        sutkiCounter++;
                    }
                }
                $scope.fr_result[b].sutki = sutkiCounter;
                $scope.fr_result[b].currentNumber = $scope.fr_result[b].arr.length;
            }


            $scope.fr_provider_required_2 = parseInt($scope.fr_total/$scope.vpn_fr_providers.length);
            for(var x =0; x < $scope.vpn_fr_providers.length; x++){
                $scope.fr_result_prov[x] = {name: $scope.vpn_fr_providers[x], arr: [], sutki:"",  currentNumber: ""};
                for(var d=0; d < $scope.fr_voted.length; d++){
                    if($scope.fr_voted[d].cityId.indexOf($scope.vpn_fr_providers[x]) > -1){
                        $scope.fr_result_prov[x].arr.push($scope.fr_voted[d]);
                    }
                }

                for(var v =0; v < $scope.fr_result_prov.length; v++){
                    var sutkiCounter = 0;
                    var now = new Date();
                    var beforeYesterday4  = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1, now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
                    for(var p=0; p < $scope.fr_result_prov[v].arr.length; p++){
                        if(beforeYesterday4 > new Date($scope.fr_result_prov[v].arr[p].votingDate)){
                            sutkiCounter++;
                        }
                    }
                    $scope.fr_result_prov[v].sutki = sutkiCounter;
                    $scope.fr_result_prov[x].currentNumber = $scope.fr_result_prov[x].arr.length;
                }
            }
            console.log($scope.fr_result_prov);

        });

    }]);
