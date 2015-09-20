'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });

}])

.controller('View1Ctrl', function($scope, $firebaseObject) {
  $scope.articles = [
  	{
  		'id': 0,
  		'title': 'Angelina Jolie is bae because of this one reason',
  		'img': 'http://ia.media-imdb.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_UY317_CR22,0,214,317_AL_.jpg',
  		'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  	},
  	{
  		'id': 1,
  		'title': 'You wont believe what fruit angered Madonna',
  		'img': 'http://doocci.com/wp-content/uploads/2012/06/madonna_nipple_drink_194357350.jpg',
  		'content': 'Donec sed erat id nibh luctus convallis. Donec egestas neque sed quam tincidunt cursus ut ut nibh. Morbi in sapien vestibulum, aliquam ipsum at, fermentum felis. Integer ac sapien eget orci faucibus tristique. Suspendisse posuere leo id ante molestie malesuada. Vestibulum eget suscipit diam. Sed sollicitudin quis eros eget rutrum. Sed sed orci id nisi luctus lacinia nec at nunc. Praesent sit amet condimentum ligula, id feugiat nunc. Integer non faucibus nunc, sit amet vestibulum ligula. Phasellus eleifend justo non consequat commodo.'
  	},
  	{
  		'id': 2,
  		'title': 'Who Is The Main Character Of "Friends" Actually?',
  		'img': 'http://www.proprofs.com/quiz-school/upload/yuiupload/2124371385.jpg',
  		'content': 'Curabitur tortor augue, suscipit nec nunc vel, pharetra congue ligula. Sed at porttitor ex. Nulla facilisi. Nam blandit lectus sed orci egestas accumsan. Aliquam scelerisque posuere ante, eget accumsan est sagittis sit amet. In tellus nunc, vehicula a imperdiet quis, semper a justo. Cras massa justo, tincidunt et ornare sit amet, volutpat ac arcu. Vestibulum pulvinar placerat magna, eget semper lectus cursus id. Suspendisse interdum rutrum augue a vehicula. Donec pharetra a ligula quis feugiat. Vestibulum a sapien accumsan risus pharetra semper. Vestibulum tellus sem, mattis sit amet sapien sed, blandit semper justo. Maecenas neque tortor, venenatis non nibh vitae, molestie egestas augue. Donec mattis lacus sit amet massa feugiat, maximus dictum tortor fermentum. Aenean vehicula nec nisi non ullamcorper.'
  	}
  ];

  var ref = new Firebase("https://boiling-fire-8955.firebaseio.com");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");
});