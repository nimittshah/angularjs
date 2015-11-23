/**
 * ...
 * @author nimit shah
 */
(function(){
	var app = angular.module("employee", []);
	
	app.controller("EmployeeController", function(){
		this.employees = gems;
	});
	
	var gems = [{
		name: "Nimit Shah",
		company: "Synechron Technologies",
		inc: 9407,
	},
	{
		name: "Pradeep Rodge",
		company: "Synechron Technologies",
		inc: 9407,
	}];
})();