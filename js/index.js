var txAPP=angular.module('txAPP',['ngAnimate','ngRoute','ngTouch']);
txAPP.factory('$data',[function () {
  return {
    news:[
      {
        name:'要闻',
        acronym:'yw',
        isCustom:true,
        type:'genduo',
        banner:{img:'news1.png',content:''},
        newslists:[
          {name:'在这些场合，习近平都提到了屈原',img:'img-new1.png', source:'新华网',comment:'180',content:''},
          {name:'邓亚萍离职《人民日报》自主创业投身中国体育产业',img:'img-new2.png', source:'人民网',comment:'180',content:''},
          {name:'在这些场合，习近平都提到了屈原',img:'img-new1.png', source:'新华网',comment:'180',content:''},
          {name:'邓亚萍离职《人民日报》自主创业投身中国体育产业',img:'img-new2.png', source:'人民网',comment:'180',content:''},
          {name:'在这些场合，习近平都提到了屈原',img:'img-new1.png', source:'新华网',comment:'180',content:''},
          {name:'邓亚萍离职《人民日报》自主创业投身中国体育产业',img:'img-new2.png', source:'人民网',comment:'180',content:''},
        ]
      },
      {
        name:'娱乐',
        acronym:'yl',
        isCustom:false,
        type:'genduo',
        banner:{img:'img-yule-banner.png',content:''},
        newslists:[
          {name:'专访《魔兽》“半兽人” 葆拉：吴彦祖我很绅士演技更出色',img:'img-news-yule1.png', source:'腾讯娱乐',comment:'204',content:''},
          {name:'魔兽昨日再收2.17亿 累计破8亿',img:'img-news-yule2.png', source:'腾讯娱乐',comment:'385',content:''}
        ]
      },
      {
        name:'NBA',
        acronym:'nba',
        isCustom:false,
        type:'genduo',
        banner:{img:'img-banner2.png',content:''},
        newslists:[
          {name:'勇士惨败仍被ESPN看好 骑士夺冠概率不足两成',img:'img-new-nba2.png', source:'ESPN',comment:'38',content:''},
          {name:'仍不服勇士!奥尼尔：我能把博古特变成澳洲大烤鸡',img:'img-new-nba1.png', source:'腾讯体育',comment:'82',content:''}
        ]
      },
      {
        name:'科技',
        acronym:'kj',
        isCustom:false,
        type:'genduo',
        banner:{img:'img-keji-banner.png',content:''},
        newslists:[
          {name:'比尔·盖茨想让世界穷人养鸡致富·投入1块钱能赚62元',img:'img-news-keji1.png', source:'腾讯科技',comment:'204',content:''},
          {name:'下一代iPhone有深蓝色，取消太空灰版，你会买吗？',img:'img-news-keji2.png', source:'腾讯科技',comment:'385',content:''}
        ]
      },
      {
        name:'国际',
        acronym:'gj',
        isCustom:false,
        type:'genduo',
        banner:{img:'img-guoji-banner.png',content:''},
        newslists:[
          {name:'外媒：中国战舰现身钓鱼岛 日方抗议中方不接受',img:'img-news-guoji1.png', source:'参考消息',comment:'204',content:''},
          {name:'中俄军舰同时驶向钓鱼岛 日本却单独向中方提出抗议',img:'img-news-guoji2.png', source:'腾讯新闻',comment:'35',content:''}
        ]
      },
      {
        name:'上海',
        acronym:'sh',
        isCustom:false,
        type:'difang',
        banner:{img:'img-shanghai-banner.png',content:''},
        newslists:[
          {name:'全国铁路迎端午返程高峰 沪6月10日发送旅客174万人次',img:'img-news-shanghai1.png', source:'新华网',comment:'204',content:''},
          {name:'9天展映近600部佳片 上海国际电影节今晚揭幕',img:'img-news-shanghai2.png', source:'新民晚报',comment:'35',content:''}
        ]
      },
      {
        name:'北京青年报',
        acronym:'bjqnb',
        isCustom:false,
        type:'baozhi',
        newslists:[
          {name:'联系发布全球首款AR手机',img:'img-news-bjqn1.png', content:''},
          {name:'无人机何时不再“无人管”',img:'img-news-bjqn2.png',content:''}
        ]
      },
    ],
  }
}])
txAPP.controller('indexCtrl',['$scope','$data',function ($scope,$data) {

  if(localStorage.showSplash){
    $scope.showSplash=false;
  }else{
    $scope.showSplash=true;
    localStorage.showSplash=angular.toJson($scope.showSplash);
  }

  $scope.savedata=function () {
    localStorage.custom=angular.toJson($scope.custom);
  }

  $scope.custom=localStorage.custom?
  angular.fromJson(localStorage.custom):$data.news;

  $scope.addCustom=function(v){
    if(v.acronym==='yw'){
      v.isCustom=v.isCustom;
    }else{
      v.isCustom=!v.isCustom;
    }
    if(!v.isCustom){
      $scope.cur=$data.news[0].acronym
    };
    $scope.savedata();
  }

  $scope.cur=localStorage.cur?angular.fromJson(localStorage.cur):location.hash.slice(12);

  $scope.saveCur=function (v) {
    $scope.cur=v.acronym;
    localStorage.cur=angular.toJson($scope.cur);
  }
}])

txAPP.directive('liSplash',[function(){
  return {
    replace:true,
    restrict:'E',
    templateUrl:'views/directive/li-splash.html',
    link:function ($scope,el) {
      var mySwiper = new Swiper('.swiper-container', {
      })
      $('.tiaoguo').on('click',function () {
        $('#splash-screen').addClass('hide').delay(500).queue(function () {
          $(this).remove().dequeue();
        })
      })
      $scope.removeSplash=function () {
        $('#splash-screen').addClass('hide').delay(500).queue(function () {
          $(this).remove().dequeue();
        })
      }
    }
  }
}])
txAPP.directive('liHeader',[function(){
  return {
    replace:true,
    restrict:'E',
    templateUrl:'views/directive/li-header.html',
    link:function ($scipe,el) {
      $('.user').on('click',function () {
         $('#wo').toggleClass('active');
      })
    }
  }
}])
txAPP.directive('liWo',[function(){
  return {
    replace:true,
    restrict:'E',
    templateUrl:'views/directive/li-wo.html',

  }
}])
txAPP.controller('importantCtrl',['$scope','$data','$routeParams',function ($scope,$data,$routeParams) {
  if($routeParams.data){
    var name=$routeParams.data;
  }else{
    var name=$data.news[0].acronym;
  }
  $scope.current=$data.news.filter(function (v,i) {
    return name===v.acronym;
  });
}])
txAPP.controller('customCtrl',['$scope','$data',function ($scope,$data) {

}])
txAPP.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    controller:'importantCtrl',
    templateUrl:'views/templates/important.html'
  }).when('/important/:data',{
    controller:'importantCtrl',
    templateUrl:'views/templates/important.html'
  }).when('/custom',{
    controller:'customCtrl',
    templateUrl:'views/templates/custom.html'
  }).otherwise({
    redirectTo:'/'
  });
}])
