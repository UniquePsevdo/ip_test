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
            {provider:'Nobis Technology Group', name: 'ExpressVPN Los Angeles San Fran', city:'San Fran'},
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
            {provider:'EDIS Gmbh', name: 'ExpressVPN Belgium_Brussels', city:'Brussels'},
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

        $scope.fr_cities_result = [
            {name: 'Brussels', result:[], currentNumber:''},
            {name: 'Antwerp', result:[], currentNumber:''},
            {name: 'Bruges', result:[], currentNumber:''},
            {name: 'Ghent', result:[], currentNumber:''},
            {name: 'North York', result:[], currentNumber:''},
            {name: 'Montreal', result:[], currentNumber:''},
            {name: 'Vancouver', result:[], currentNumber:''},
            {name: 'Ottawa', result:[], currentNumber:''},
            {name: 'Hamilton', result:[], currentNumber:''},
            {name: 'Toronto', result:[], currentNumber:''},
            {name: 'Marseille', result:[], currentNumber:''},
            {name: 'Nice', result:[], currentNumber:''},
            {name: 'Paris', result:[], currentNumber:''},
            {name: 'Bordeaux', result:[], currentNumber:''},
            {name: 'Lille', result:[], currentNumber:''},
            {name: 'Lyon', result:[], currentNumber:''},
            {name: 'Montpellier', result:[], currentNumber:''},
            {name: 'Nantes', result:[], currentNumber:''},
            {name: 'Reims', result:[], currentNumber:''},
            {name: 'Toulouse', result:[], currentNumber:''},
            {name: 'Frankfurt', result:[], currentNumber:''},
            {name: 'Dusseldorf', result:[], currentNumber:''},
            {name: 'Berlin', result:[], currentNumber:''},
            {name: 'Stuttgart', result:[], currentNumber:''},
            {name: 'Luxembourg', result:[], currentNumber:''},
            {name: 'Altlinster', result:[], currentNumber:''},
            {name: 'Barcelona', result:[], currentNumber:''},
            {name: 'Madrid', result:[], currentNumber:''},
            {name: 'Valencia', result:[], currentNumber:''},
            {name: 'Baar', result:[], currentNumber:''},
            {name: 'Zurich', result:[], currentNumber:''},
            {name: 'Bern', result:[], currentNumber:''},
            {name: 'Berkshire', result:[], currentNumber:''},
            {name: 'Brighton', result:[], currentNumber:''},
            {name: 'Kent', result:[], currentNumber:''},
            {name: 'London', result:[], currentNumber:''},
            {name: 'Sheffield', result:[], currentNumber:''}
        ];

        apiService.getUSVoted().then(function(data){
            $scope.us_voted = data;
            for(var i = 0; i < $scope.us_voted.length; i++){
                for(var j=0; j < $scope.us_providers_data.length; j++){
                    if($scope.us_voted[i].cityId.trim()===$scope.us_providers_data[j].name.trim()){
                        for(var z=0; z < $scope.us_providers_result.length; z++){
                            if($scope.us_providers_result[z].name.trim()===$scope.us_providers_data[j].provider.trim()){
                                $scope.us_providers_result[z].result.push($scope.us_voted[i].email);
                                $scope.us_providers_result[z].currentNumber = $scope.us_providers_result[z].result.length;
                                break;
                            }
                        }
                        for(var z=0; z < $scope.us_cities_result.length; z++){
                            if($scope.us_cities_result[z].name.trim()===$scope.us_providers_data[j].city.trim()){
                                $scope.us_cities_result[z].result.push($scope.us_voted[i].email);
                                $scope.us_cities_result[z].currentNumber = $scope.us_cities_result[z].result.length;
                                break;
                            }
                        }
                        break;
                    }
                }
            }
        });

        apiService.getFRVoted().then(function(data){
            $scope.fr_voted = data;
            for(var m = 0; m < $scope.fr_voted.length; m++){
                for(var o=0; o < $scope.fr_providers_data.length; o++){
                    if($scope.fr_voted[m].cityId.trim()===$scope.fr_providers_data[o].name.trim()){
                        for(var y=0; y < $scope.fr_providers_result.length; y++){
                            if($scope.fr_providers_result[y].name.trim()===$scope.fr_providers_data[o].provider.trim()){
                                $scope.fr_providers_result[y].result.push($scope.fr_voted[m].email);
                                $scope.fr_providers_result[y].currentNumber = $scope.fr_providers_result[y].result.length;
                                break;
                            }
                        }
                        for(var y=0; y < $scope.fr_cities_result.length; y++){
                            if($scope.fr_cities_result[y].name.trim()===$scope.fr_providers_data[o].city.trim()){
                                $scope.fr_cities_result[y].result.push($scope.fr_voted[m].email);
                                $scope.fr_cities_result[y].currentNumber = $scope.fr_cities_result[y].result.length;
                                break;
                            }
                        }
                        break;
                    }
                }
            }
        });

    }]);
