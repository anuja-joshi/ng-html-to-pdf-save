
angular.module('htmlToPdfSave')
.directive('pdfSaveButton' , ['$rootScope' , '$pdfStorage' , function($rootScope , $pdfStorage) {

	return {
		restrict: 'A',
		scope: {
      beforeCallback:'&beforeCallback',
      afterCallback: '&afterCallback',
    },
		link : function(scope , element , attrs ) {
			$pdfStorage.pdfSaveButtons.push(element) ;

			scope.buttonText = "Button";
			element.on('click' , function() {
				var activePdfSaveId = attrs.pdfSaveButton ;
				var activePdfSaveName = attrs.pdfName;
				var beforeCallback = scope.beforeCallback;
        var afterCallback = scope.afterCallback;
				$rootScope.$broadcast('savePdfEvent' , {
					activePdfSaveId : activePdfSaveId,
					activePdfSaveName: activePdfSaveName,
					beforeCallback: beforeCallback,
          afterCallback: afterCallback
        }) ;


			})
		}


	}

}]) ;
