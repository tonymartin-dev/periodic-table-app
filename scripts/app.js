(function () {
    'use strict';

    angular.module('app',[
        'ngRoute',
        'ngMaterial',
        'ngAnimate'
    ])
        .config([ '$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({redirectTo: '/'});
            $routeProvider
                .when('/', {
                        templateUrl: './scripts/table/table.html',
                        controller: 'tableCtl'
                    }
                );
            }]
        )
        .controller('tableCtl', ['$scope', function($scope){
            //Gaps styles
            $scope.styleAfter1 = {'width':'88.88%', 'border':'none'};
            $scope.styleAfter4 = {'width':'55.55%', 'border':'none'};
            $scope.styleAfter12 = $scope.styleAfter4;

            //Elements arrays
            $scope.periodicTable = [
                {'style':'','styleb':'','symbol':'H','answer':''},
                {'style':$scope.styleAfter1,'styleb': $scope.styleAfter1b,'symbol' : '','answer':''},
                {'style':'','styleb':'','symbol':'He','answer':''},
                {'style':'','styleb':'','symbol':'Li','answer':''},
                {'style':'','styleb':'','symbol':'Be','answer':''},
                {'style':$scope.styleAfter4,'styleb': $scope.styleAfter4b,'symbol' : '','answer':''},
                {'style':'','styleb':'','symbol':'B','answer':''},
                {'style':'','styleb':'','symbol':'C','answer':''},
                {'style':'','styleb':'','symbol':'N','answer':''},
                {'style':'','styleb':'','symbol':'O','answer':''},
                {'style':'','styleb':'','symbol':'F','answer':''},
                {'style':'','styleb':'','symbol':'Ne','answer':''},
                {'style':'','styleb':'','symbol':'Na','answer':''},
                {'style':'','styleb':'','symbol':'Mg','answer':''},
                {'style':$scope.styleAfter12,'styleb': $scope.styleAfter12b,'symbol' : '','answer':''},
                {'style':'','styleb':'','symbol':'Al','answer':''},
                {'style':'','styleb':'','symbol':'Si','answer':''},
                {'style':'','styleb':'','symbol':'P','answer':''},
                {'style':'','styleb':'','symbol':'S','answer':''},
                {'style':'','styleb':'','symbol':'Cl','answer':''},
                {'style':'','styleb':'','symbol':'Ar','answer':''},
                {'style':'','styleb':'','symbol':'K','answer':''},
                {'style':'','styleb':'','symbol':'Ca','answer':''},
                {'style':'','styleb':'','symbol':'Sc','answer':''},
                {'style':'','styleb':'','symbol':'Ti','answer':''},
                {'style':'','styleb':'','symbol':'V','answer':''},
                {'style':'','styleb':'','symbol':'Cr','answer':''},
                {'style':'','styleb':'','symbol':'Mn','answer':''},
                {'style':'','styleb':'','symbol':'Fe','answer':''},
                {'style':'','styleb':'','symbol':'Co','answer':''},
                {'style':'','styleb':'','symbol':'Ni','answer':''},
                {'style':'','styleb':'','symbol':'Cu','answer':''},
                {'style':'','styleb':'','symbol':'Zn','answer':''},
                {'style':'','styleb':'','symbol':'Ga','answer':''},
                {'style':'','styleb':'','symbol':'Ge','answer':''},
                {'style':'','styleb':'','symbol':'As','answer':''},
                {'style':'','styleb':'','symbol':'Se','answer':''},
                {'style':'','styleb':'','symbol':'Br','answer':''},
                {'style':'','styleb':'','symbol':'Kr','answer':''},
                {'style':'','styleb':'','symbol':'Rb','answer':''},
                {'style':'','styleb':'','symbol':'Sr','answer':''},
                {'style':'','styleb':'','symbol':'Y','answer':''},
                {'style':'','styleb':'','symbol':'Zr','answer':''},
                {'style':'','styleb':'','symbol':'Nb','answer':''},
                {'style':'','styleb':'','symbol':'Mo','answer':''},
                {'style':'','styleb':'','symbol':'Tc','answer':''},
                {'style':'','styleb':'','symbol':'Ru','answer':''},
                {'style':'','styleb':'','symbol':'Rh','answer':''},
                {'style':'','styleb':'','symbol':'Pd','answer':''},
                {'style':'','styleb':'','symbol':'Ag','answer':''},
                {'style':'','styleb':'','symbol':'Cd','answer':''},
                {'style':'','styleb':'','symbol':'In','answer':''},
                {'style':'','styleb':'','symbol':'Sn','answer':''},
                {'style':'','styleb':'','symbol':'Sb','answer':''},
                {'style':'','styleb':'','symbol':'Te','answer':''},
                {'style':'','styleb':'','symbol':'I','answer':''},
                {'style':'','styleb':'','symbol':'Xe','answer':''},
                {'style':'','styleb':'','symbol':'Cs','answer':''},
                {'style':'','styleb':'','symbol':'Ba','answer':''},
                {'style':'','styleb':'','symbol':'La','answer':''},
                {'style':'','styleb':'','symbol':'Hf','answer':''},
                {'style':'','styleb':'','symbol':'Ta','answer':''},
                {'style':'','styleb':'','symbol':'W','answer':''},
                {'style':'','styleb':'','symbol':'Re','answer':''},
                {'style':'','styleb':'','symbol':'Os','answer':''},
                {'style':'','styleb':'','symbol':'Ir','answer':''},
                {'style':'','styleb':'','symbol':'Pt','answer':''},
                {'style':'','styleb':'','symbol':'Au','answer':''},
                {'style':'','styleb':'','symbol':'Hg','answer':''},
                {'style':'','styleb':'','symbol':'Tl','answer':''},
                {'style':'','styleb':'','symbol':'Pb','answer':''},
                {'style':'','styleb':'','symbol':'Bi','answer':''},
                {'style':'','styleb':'','symbol':'Po','answer':''},
                {'style':'','styleb':'','symbol':'At','answer':''},
                {'style':'','styleb':'','symbol':'Rn','answer':''},
                {'style':'','styleb':'','symbol':'Fr','answer':''},
                {'style':'','styleb':'','symbol':'Ra','answer':''},
                {'style':'','styleb':'','symbol':'Ac','answer':''},
                {'style':'','styleb':'','symbol':'Rf','answer':''},
                {'style':'','styleb':'','symbol':'Db','answer':''},
                {'style':'','styleb':'','symbol':'Sg','answer':''},
                {'style':'','styleb':'','symbol':'Bh','answer':''},
                {'style':'','styleb':'','symbol':'Hs','answer':''},
                {'style':'','styleb':'','symbol':'Mt','answer':''},
                {'style':'','styleb':'','symbol':'Ds','answer':''},
                {'style':'','styleb':'','symbol':'Rg','answer':''},
                {'style':'','styleb':'','symbol':'Cn','answer':''},
                {'style':'','styleb':'','symbol':'Nh','answer':''},
                {'style':'','styleb':'','symbol':'Fl','answer':''},
                {'style':'','styleb':'','symbol':'Mc','answer':''},
                {'style':'','styleb':'','symbol':'Lv','answer':''},
                {'style':'','styleb':'','symbol':'Ts','answer':''},
                {'style':'','styleb':'','symbol':'Og','answer':''}
            ];
            $scope.periodicLantActin = [
                {'style':$scope.style58,'styleb':$scope.style58b,'symbol':'Ce','answer':''},
                {'style':$scope.style59,'styleb':$scope.style59b,'symbol':'Pr','answer':''},
                {'style':$scope.style60,'styleb':$scope.style60b,'symbol':'Nd','answer':''},
                {'style':$scope.style61,'styleb':$scope.style61b,'symbol':'Pm','answer':''},
                {'style':$scope.style62,'styleb':$scope.style62b,'symbol':'Sm','answer':''},
                {'style':$scope.style63,'styleb':$scope.style63b,'symbol':'Eu','answer':''},
                {'style':$scope.style64,'styleb':$scope.style64b,'symbol':'Gd','answer':''},
                {'style':$scope.style65,'styleb':$scope.style65b,'symbol':'Tb','answer':''},
                {'style':$scope.style66,'styleb':$scope.style66b,'symbol':'Dy','answer':''},
                {'style':$scope.style67,'styleb':$scope.style67b,'symbol':'Ho','answer':''},
                {'style':$scope.style68,'styleb':$scope.style68b,'symbol':'Er','answer':''},
                {'style':$scope.style69,'styleb':$scope.style69b,'symbol':'Tm','answer':''},
                {'style':$scope.style70,'styleb':$scope.style70b,'symbol':'Yb','answer':''},
                {'style':$scope.style71,'styleb':$scope.style71b,'symbol':'Lu','answer':''},
                {'style':$scope.style90,'styleb':$scope.style90b,'symbol':'Th','answer':''},
                {'style':$scope.style91,'styleb':$scope.style91b,'symbol':'Pa','answer':''},
                {'style':$scope.style92,'styleb':$scope.style92b,'symbol':'U','answer':''},
                {'style':$scope.style93,'styleb':$scope.style93b,'symbol':'Np','answer':''},
                {'style':$scope.style94,'styleb':$scope.style94b,'symbol':'Pu','answer':''},
                {'style':$scope.style95,'styleb':$scope.style95b,'symbol':'Am','answer':''},
                {'style':$scope.style96,'styleb':$scope.style96b,'symbol':'Cm','answer':''},
                {'style':$scope.style97,'styleb':$scope.style97b,'symbol':'Bk','answer':''},
                {'style':$scope.style98,'styleb':$scope.style98b,'symbol':'Cf','answer':''},
                {'style':$scope.style99,'styleb':$scope.style99b,'symbol':'Es','answer':''},
                {'style':$scope.style100,'styleb':$scope.style100b,'symbol':'Fm','answer':''},
                {'style':$scope.style101,'styleb':$scope.style101b,'symbol':'Md','answer':''},
                {'style':$scope.style102,'styleb':$scope.style102b,'symbol':'No','answer':''},
                {'style':$scope.style103,'styleb':$scope.style103b,'symbol':'Lr','answer':''},
            ];

            //Watch changes in the input and change background color

            var periodicLenght = $scope.periodicTable.length;

            $scope.$watch('periodicTable', function(newValue, oldValue){
            for (var i = 0; i < periodicLenght; i++) {
                if (i!=1 && i!=5 && i!=14) {
                if ($scope.periodicTable[i].answer === '') {
                    $scope.periodicTable[i].style ={'background-color':'white'};
                }else if ($scope.periodicTable[i].answer === $scope.periodicTable[i].symbol) {
                    $scope.periodicTable[i].style ={'background-color':'green', 'color':'white'};
                }else{
                    $scope.periodicTable[i].style ={'background-color':'red', 'color':'white'};
                }
                }
            }
            }, true);
        }]);
})();