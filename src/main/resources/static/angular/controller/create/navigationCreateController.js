/**
 * navigationCreateController
 */

cmndProjectApps.controller('navigationCreateController', ['$scope', '$rootScope', '$http', '$location', 
'locals', '$state', '$stateParams', 'navigationService','tabsCreate1Service', 'toaster', '$timeout',
    function($scope, $rootScope, $http, $location, locals, $state, $stateParams, navigationService,
             tabsCreate1Service, toaster, $timeout) {
        console.log('navigationCreateController');
        
        $scope.create_main_nav_tab = "create";

        $scope.maxSize = 5;
        $scope.totalItems = 64;
        $scope.currentPage = 4;

        $scope.initSelectCreateSubTabs = function() { 
            //console.log("init=>navigationCreateController");        
            //var sub_nav_tab = $rootScope.getCurrentNavTab($scope.create_main_nav_tab);
            //$scope.selectTabsAndGoto($scope.create_main_nav_tab, sub_nav_tab);
        };

        /*
        * type=> error/info/wait/success/warning
        * */
        $scope.popupTip = function(type, tipText) {
            $timeout(function () {
                toaster.pop({
                    type: type,
                    //title: 'Title text',
                    //body: 'Body text',
                    body: 'bind-toaster-html',
                    bodyOutputType: 'directive',
                    directiveData: {content: tipText},
                    timeout: 3000,
                    showCloseButton: true,
                    onShowCallback: function (toast) {
                        console.log("toaster is show");
                    },
                    onHideCallback: function (toast) {
                        console.log("toaster is hide");
                    }
                });
            }, 500);
        }

        $("#create_tabs li a").each(function(index, ele){  	
        	$(this).click(function(){
                var create_sub_tab = $(this).attr("tabs-id");              
                console.log("navigationCreateController=>create_sub_tab:" + create_sub_tab);
                locals.set("create_sub_tab", create_sub_tab);
                $scope.selectTabs($scope.create_main_nav_tab, create_sub_tab);
        	});
        });
        
        $scope.submitForm = function () {
            var form = new FormData(document.getElementById("uploadFile"));
            var uploadFileName = document.getElementById("uploadFile").getElementsByClassName("file")[0].value;
            if (uploadFileName != "") {
                var req = {
                    method: 'POST',
                    url: '/file/multifileUpload',
                    transformRequest: angular.identity,
                    data: form,
                    headers: {
                        'Content-Type': undefined
                    }
                };
                navigationService.sendRequestCommand(req).then(function (data) {
                    console.log("status:" + data.status);
                    document.getElementById("uploadFile").getElementsByClassName("file")[0].value = "";
                    if (data.status == "success") {
                        $scope.popupTip("success", "upload File success!");
                    } else {
                        $scope.popupTip("error", "upload File error!");
                    }
                });
            } else {
                $scope.popupTip("warning", "please select file!");
            }
        }

        // https://blog.csdn.net/zy0421911/article/details/54613257
        $scope.gridOptions = {
            data: 'myData',
            columnDefs: [{ field: 'name',
                displayName: '名字',
                width: '10%',
                enableColumnMenu: false,// 是否显示列头部菜单按钮
                enableHiding: false,
                suppressRemoveSort: true,
                enableCellEdit: false // 是否可编辑
            },
                { field: "age"},
                { field: "birthday"},
                { field: "salary"}
            ],

            enableSorting: true, //是否排序
            useExternalSorting: false, //是否使用自定义排序规则
            enableGridMenu: true, //是否显示grid 菜单
            showGridFooter: true, //是否显示grid footer
            enableHorizontalScrollbar :  1, //grid水平滚动条是否显示, 0-不显示  1-显示
            enableVerticalScrollbar : 0, //grid垂直滚动条是否显示, 0-不显示  1-显示

            //-------- 分页属性 ----------------
            enablePagination: true, //是否分页，默认为true
            enablePaginationControls: true, //使用默认的底部分页
            paginationPageSizes: [10, 15, 20], //每页显示个数可选项
            paginationCurrentPage:1, //当前页码
            paginationPageSize: 10, //每页显示个数
            //paginationTemplate:"<div></div>", //自定义底部分页代码
            totalItems : 0, // 总数量
            useExternalPagination: true,//是否使用分页按钮


            //----------- 选中 ----------------------
            enableFooterTotalSelected: true, // 是否显示选中的总数，默认为true, 如果显示，showGridFooter 必须为true
            enableFullRowSelection : true, //是否点击行任意位置后选中,默认为false,当为true时，checkbox可以显示但是不可选中
            enableRowHeaderSelection : true, //是否显示选中checkbox框 ,默认为true
            enableRowSelection : true, // 行选择是否可用，默认为true;
            enableSelectAll : true, // 选择所有checkbox是否可用，默认为true;
            enableSelectionBatchEvent : true, //默认true
            isRowSelectable: function(row){ //GridRow
                if(row.entity.age > 45){
                    row.grid.api.selection.selectRow(row.entity); // 选中行
                }
            },
            modifierKeysToMultiSelect: false ,//默认false,为true时只能 按ctrl或shift键进行多选, multiSelect 必须为true;
            multiSelect: true ,// 是否可以选择多个,默认为true;
            noUnselect: false,//默认false,选中后是否可以取消选中
            selectionRowHeaderWidth:30 ,//默认30 ，设置选择列的宽度；

            //--------------导出----------------------------------
            exporterAllDataFn: function(){
                return getPage(1,$scope.gridOptions.totalItems);
            },
            exporterCsvColumnSeparator: ',',
            exporterCsvFilename:'download.csv',
            exporterFieldCallback : function ( grid, row, col, value ){
                if ( value == 50 ){
                    value = "可以退休";
                }
                return value;
            },
            exporterHeaderFilter :function( displayName ){
                return 'col: ' + name;
            },
            exporterHeaderFilterUseName : true,
            exporterMenuCsv : true,
            exporterMenuLabel : "Export",
            exporterMenuPdf : true,
            exporterOlderExcelCompatibility : false,
            exporterPdfCustomFormatter : function ( docDefinition ) {
                docDefinition.styles.footerStyle = { bold: true, fontSize: 10 };
                return docDefinition;
            },
            exporterPdfFooter :{
                text: 'My footer',
                style: 'footerStyle'
            },
            exporterPdfDefaultStyle : {
                fontSize: 11,font:'simblack' //font 设置自定义字体
            },
            exporterPdfFilename:'download.pdf',
            /* exporterPdfFooter : {
             columns: [
               'Left part',
               { text: 'Right part', alignment: 'right' }
             ]
            },
            或 */
            exporterPdfFooter: function(currentPage, pageCount) {
                return currentPage.toString() + ' of ' + pageCount;
            },
            exporterPdfHeader : function(currentPage, pageCount) {
                return currentPage.toString() + ' of ' + pageCount;
            },
            exporterPdfMaxGridWidth : 720,
            exporterPdfOrientation : 'landscape',//  'landscape' 或 'portrait' pdf横向或纵向
            exporterPdfPageSize : 'A4',// 'A4' or 'LETTER'
            exporterPdfTableHeaderStyle : {
                bold: true,
                fontSize: 12,
                color: 'black'
            },
            exporterPdfTableLayout : null,
            exporterPdfTableStyle: {
                margin: [0, 5, 0, 15]
            },
            exporterSuppressColumns : ['buttons'],
            exporterSuppressMenu: false,

            //---------------api---------------------
            onRegisterApi: function(gridApi) {
                $scope.gridApi = gridApi;
                //分页按钮事件
                gridApi.pagination.on.paginationChanged($scope,function(newPage, pageSize) {
                    if(getPage) {
                        getPage(newPage, pageSize);
                    }
                });
                //行选中事件
                $scope.gridApi.selection.on.rowSelectionChanged($scope,function(row,event){
                    if(row){
                        $scope.testRow = row.entity;
                    }
                });
            }
        };

        var getPage = function(curPage, pageSize) {
            var firstRow = (curPage - 1) * pageSize;
            $scope.gridOptions.totalItems = mydefalutData.length;
            $scope.gridOptions.data = mydefalutData.slice(firstRow, firstRow + pageSize);
            //或者像下面这种写法
            //$scope.myData = mydefalutData.slice(firstRow, firstRow + pageSize);
        };

        var mydefalutData = [{ name: "Moroni", age: 50, birthday: "Oct 28, 1970", salary: "60,000" },
            { name: "Tiancum", age: 43, birthday: "Feb 12, 1985", salary: "70,000" },
            { name: "Jacob", age: 27, birthday: "Aug 23, 1983", salary: "50,000" },
            { name: "Nephi", age: 29, birthday: "May 31, 2010", salary: "40,000" },
            { name: "Enos", age: 34, birthday: "Aug 3, 2008", salary: "30,000" },
            { name: "Moroni", age: 50, birthday: "Oct 28, 1970", salary: "60,000" },
            { name: "Tiancum", age: 43, birthday: "Feb 12, 1985", salary: "70,000" },
            { name: "Jacob", age: 27, birthday: "Aug 23, 1983", salary: "40,000" },
            { name: "Nephi", age: 29, birthday: "May 31, 2010", salary: "50,000" },
            { name: "Enos", age: 34, birthday: "Aug 3, 2008", salary: "30,000" },
            { name: "Moroni", age: 50, birthday: "Oct 28, 1970", salary: "60,000" },
            { name: "Tiancum", age: 43, birthday: "Feb 12, 1985", salary: "70,000" },
            { name: "Jacob", age: 27, birthday: "Aug 23, 1983", salary: "40,000" },
            { name: "Nephi", age: 29, birthday: "May 31, 2010", salary: "50,000" },
            { name: "Enos", age: 34, birthday: "Aug 3, 2008", salary: "30,000" }];

        getPage(1, $scope.gridOptions.paginationPageSize);
    }]);