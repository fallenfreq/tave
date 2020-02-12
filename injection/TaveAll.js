// JavaScript Document

// link CSS Document
$('head').append('<link rel="stylesheet" href="https://dl.dropboxusercontent.com/s/ysl0nz0lmq9535s/TaveAll.css?dl=0" type="text/css" />');

// fix call start

//Define function to use below 
function fixCall() {
	"use strict";
	//starts a timer to check if element is never supposed to be there
	setTimeout(function () {
		//If element is NOT there then run acction
		if (!$('.fc-month-view').length) {
			//stops next function from checking if element is there over again
			clearInterval(isItThere);
		}
	}, 3000);

	//checks to see if an element exsists on the page at intervals
	var isItThere = setInterval(function () {
		//checks to see if an element exsists
		if ($('.fc-title').length) {
			//adds found notice to console
			console.log('box to expand is there! page load');
			// if We are on the month view call then...
			if ($('.fc-month-view').length) {
				//Makes the a tag the same size as the td
				console.log("resize to happen");
				$(".fc-day-grid-event").each(function () {
					var attr = $(this).parent(".fc-event-container").attr("rowspan");
					//console.log(typeof attr === typeof undefined && attr === undefined);
					if (typeof attr === typeof undefined && attr === undefined) {
						$(this).css('min-height', $(this).parent().height() - 4)
					}
				});
				//If it's this month the reactivate the today btn
				if ($('.fc-today').length) {
					//$('.fc-today-button').removeAttr('disabled');
					//SCROLL TO TODAY START
					$('.fc-scroller').animate({
						scrollTop: $('.fc-today').offset().top - 100
					}, 'slow');
				}
				//stops the intervals checking
				clearInterval(isItThere);
			}
		}
	}, 10);
}

// Run function at page load
$(document).ready(function () {
	"use strict";
	setTimeout(function () {
		console.log("doc ready timer");
		fixCall();
	}, 10);
});

// When changing call on show, wait 10 then resize a tag
$('.page-aside .checkbox').click(function () {
	"use strict";
	if ($('.fc-month-view').length) {
		setTimeout(function () {
			$(".fc-day-grid-event").each(function () {
				var attr = $(this).parent(".fc-event-container").attr("rowspan");
				//console.log(typeof attr === typeof undefined && attr === undefined);
				if (typeof attr === typeof undefined && attr === undefined) {
					$(this).height($(this).parent().height() - 4);
				}
			});
		}, 10);
	}
});

//Run funtion on loading a new page of content without a page refresh
$('.fc-today-button, .fc-next-button, .fc-prev-button, .fc-month-button').click(function () {
	"use strict";
	setTimeout(function () {
		console.log("button clicked");
		fixCall();
	}, 10);
});

//Test dynamic window height
function reSize() {
	"use strict";
	setTimeout(function () {
		if ($('#Calendar').length) {
			if (!$('.fc-month-view').length) {
				var client_h = document.documentElement.clientHeight;
				var weekBarHeight = $('.fc-week').height();
				$('.fc-scroller').css('max-height', client_h - weekBarHeight - 128);
			}
		}
	}, 10);
}

function reSizeTwo() {
	"use strict";
	var weekLoad = setInterval(function () {
		if ($('#Content > .box').length) {
			if (!$('.loading').length) {
				reSize();
				clearInterval(weekLoad);
			}
		}
	}, 10);

	//starts a timer to check if element is never supposed to be there
	setTimeout(function () {
		clearInterval(weekLoad);
	}, 3000);
}

$(document).ready(function () {
	"use strict";
	reSizeTwo();
});

window.onresize = reSize;

$('.fc-button').click(function () {
	"use strict";
	reSizeTwo();
});

function hoverfix1() {
	"use strict";
	$(".fc-day-grid-event").each(function () {
		var attr = $(this).parent(".fc-event-container").attr("rowspan");
		if (typeof attr === typeof undefined && attr === undefined) {
			$(this).height($(this).children().height() + 4);
		}
	});
}

function hoverfix2() {
	"use strict";
	$(".fc-day-grid-event").each(function () {
		var attr = $(this).parent(".fc-event-container").attr("rowspan");
		if (typeof attr === typeof undefined && attr === undefined && $(this).hasClass("tentative") !== true) {
			$(this).height($(this).parent().height() - 4); //need this to run after each
		}
	});
}

$(window).resize(function () {
	"use strict";
	hoverfix1();
	hoverfix2();
});


$(".page-aside").mouseenter(function () {
	"use strict";
	if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
		// Do Firefox-related activities
		console.log("enter");
		hoverfix1();
		hoverfix2();
	}
});

$(".page-aside").mouseleave(function () {
	"use strict";
	if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
		console.log("exit");
		hoverfix1();
		hoverfix2();
	}
});

// fix call end


// Task Filter Start

if (/task/.test(window.location.href)) {
	var taskBar = '<div id="btnWrap"><div class="buttonOn Cat">Cats</div><div class="buttonOn Michael">Michaels</div><div class="buttonOn Tania">Tanias</div><div class="buttonOn Terri">Terris</div></div>';
	$('#Content .box > h2').after(taskBar);
}

if (/task/.test(window.location.href)) {
	var taskBar = '<input type="text" id="filter" placeholder="Filter..."><div class="buttonOff filterBTN">Filter</div>';
	$('#Content .box > h2').after(taskBar);
}

$(".task-list .task[data-employee").addClass('showList');

function hideEmptyUL() {
	"use strict";
	$(".task-list").addClass('hideList').removeClass('showList');
	$(".task-list").filter(function () {
		return $('.showList:not(.filterOnly)', this).hasClass('showList');
	}).addClass('showList').removeClass('hideList');
}

//Terri
function hideTerrisUL() {
	"use strict";
	$("[data-employee=95153]").closest('.task-list').addClass('hideList').removeClass('showList');
}

//Cat
function hideCatsUL() {
	"use strict";
	$("[data-employee=94040]").closest('.task-list').addClass('hideList').removeClass('showList');
}

//Michael
function hideMichaelsUL() {
	"use strict";
	$("[data-employee=91574]").closest('.task-list').addClass('hideList').removeClass('showList');
}

//Tania
function hideTaniasUL() {
	"use strict";
	$("[data-employee=95150]").closest('.task-list').addClass('hideList').removeClass('showList');
}

//Terri
function showTerrisUL() {
	"use strict";
	$("[data-employee=95153]").closest('.task-list').addClass('showList').removeClass('hideList');
}

//Cat
function showCatsUL() {
	"use strict";
	$("[data-employee=94040]").closest('.task-list').addClass('showList').removeClass('hideList');
}

//Michael
function showMichaelsUL() {
	"use strict";
	$("[data-employee=91574]").closest('.task-list').addClass('showList').removeClass('hideList');
}

//Tania
function showTaniasUL() {
	"use strict";
	$("[data-employee=95150]").closest('.task-list').addClass('showList').removeClass('hideList');
}

//Hide all task lists
function hideAllTasksUL() {
	"use strict";
	hideCatsUL();
	hideMichaelsUL();
	hideTaniasUL();
	hideTerrisUL();
}

function showTerrisTasksLI() {
	"use strict";
	$("[data-employee=95153]").addClass('showList').removeClass('hideList');
}

function showCatsTasksLI() {
	"use strict";
	$("[data-employee=94040]").addClass('showList').removeClass('hideList');
}

function showTaniasTasksLI() {
	"use strict";
	$("[data-employee=95150]").addClass('showList').removeClass('hideList');
}

function showMichaelsTasksLI() {
	"use strict";
	$("[data-employee=91574]").addClass('showList').removeClass('hideList');
}

function showAllTasksLI() {
	"use strict";
	showMichaelsTasksLI();
	showCatsTasksLI();
	showTaniasTasksLI();
	showTerrisTasksLI();
}

function hideTerrisTasksLI() {
	"use strict";
	$("[data-employee=95153]").addClass('hideList').removeClass('showList');
}

function hideCatsTasksLI() {
	"use strict";
	$("[data-employee=94040]").addClass('hideList').removeClass('showList');
}

function hideTaniasTasksLI() {
	"use strict";
	$("[data-employee=95150]").addClass('hideList').removeClass('showList');
}

function hideMichaelsTasksLI() {
	"use strict";
	$("[data-employee=91574]").addClass('hideList').removeClass('showList');
}

function hideButTerrisLI() {
	"use strict";
	hideTaniasTasksLI();
	hideMichaelsTasksLI();
	hideCatsTasksLI();
}

function hideButCatsLI() {
	"use strict";
	hideTaniasTasksLI();
	hideMichaelsTasksLI();
	hideTerrisTasksLI();
}

function hideButTaniasLI() {
	"use strict";
	hideCatsTasksLI();
	hideMichaelsTasksLI();
	hideTerrisTasksLI();
}

function hideButMichaelsLI() {
	"use strict";
	hideTaniasTasksLI();
	hideCatsTasksLI();
	hideTerrisTasksLI();
}

function TerrisTasksOnly() {
	"use strict";
	hideButTerrisLI();
	showTerrisUL();
}

function CatsTasksOnly() {
	"use strict";
	hideButCatsLI();
	showCatsUL();
}

function TaniasTasksOnly() {
	"use strict";
	hideButTaniasLI();
	showTaniasUL();
}

function MichaelsTasksOnly() {
	"use strict";
	hideButMichaelsLI();
	showMichaelsUL();
}

$('.Cat').click(function (e) {
	"use strict";
	if (e.shiftKey) {
		if ($(".Cat").hasClass("buttonOff")) {
			showCatsUL();
			showCatsTasksLI();
			hideEmptyUL();
			$('.Cat').toggleClass('buttonOn buttonOff');
		} else {
			hideCatsTasksLI();
			hideEmptyUL();
			$('.Cat').toggleClass('buttonOn buttonOff');
		}
	} else {
		hideAllTasksUL();
		showAllTasksLI();
		CatsTasksOnly();
		hideEmptyUL();
		$('#btnWrap div:not(.filterBTN)').removeClass('buttonOn');
		$('#btnWrap div:not(.filterBTN)').addClass('buttonOff');
		$('.Cat').toggleClass('buttonOn buttonOff');
	}
});

$('.Michael').click(function (e) {
	"use strict";
	if (e.shiftKey) {
		if ($(".Michael").hasClass("buttonOff")) {
			showMichaelsUL();
			showMichaelsTasksLI();
			hideEmptyUL();
			$('.Michael').toggleClass('buttonOn buttonOff');
		} else {
			hideMichaelsTasksLI();
			hideEmptyUL();
			$('.Michael').toggleClass('buttonOn buttonOff');
		}
	} else {
		hideAllTasksUL();
		showAllTasksLI();
		MichaelsTasksOnly();
		hideEmptyUL();
		$('#btnWrap div:not(.filterBTN)').removeClass('buttonOn');
		$('#btnWrap div:not(.filterBTN)').addClass('buttonOff');
		$('.Michael').toggleClass('buttonOn buttonOff');
	}
});

$('.Tania').click(function (e) {
	"use strict";
	if (e.shiftKey) {
		if ($(".Tania").hasClass("buttonOff")) {
			showTaniasUL();
			showTaniasTasksLI();
			hideEmptyUL();
			$('.Tania').toggleClass('buttonOn buttonOff');
		} else {
			hideTaniasTasksLI();
			hideEmptyUL();
			$('.Tania').toggleClass('buttonOn buttonOff');
		}
	} else {
		hideAllTasksUL();
		showAllTasksLI();
		TaniasTasksOnly();
		hideEmptyUL();
		$('#btnWrap div:not(.filterBTN)').removeClass('buttonOn');
		$('#btnWrap div:not(.filterBTN)').addClass('buttonOff');
		$('.Tania').toggleClass('buttonOn buttonOff');
	}
});

$('.Terri').click(function (e) {
	"use strict";
	if (e.shiftKey) {
		if ($(".Terri").hasClass("buttonOff")) {
			showTerrisUL();
			showTerrisTasksLI();
			hideEmptyUL();
			$('.Terri').toggleClass('buttonOn buttonOff');
		} else {
			hideTerrisTasksLI();
			hideEmptyUL();
			$('.Terri').toggleClass('buttonOn buttonOff');
		}
	} else {
		hideAllTasksUL();
		showAllTasksLI();
		TerrisTasksOnly();
		hideEmptyUL();
		$('#btnWrap div:not(.filterBTN)').removeClass('buttonOn');
		$('#btnWrap div:not(.filterBTN)').addClass('buttonOff');
		$('.Terri').toggleClass('buttonOn buttonOff');
	}
});

// Search Start

$('.filterBTN').click(function () {
	"use strict";
	var text = $('#filter').val();
	if ($(".filterBTN").hasClass("buttonOff")) {
		$('.task-list .task').addClass("filterOnly");
		$('.task-list .task :not(.btn-container, span):contains("' + text + '")').closest(".task").removeClass("filterOnly");
		$('.filterBTN').toggleClass('buttonOn buttonOff');
		hideEmptyUL();
	} else {
		$('.task-list .task').removeClass("filterOnly");
		$('.filterBTN').toggleClass('buttonOn buttonOff');
		hideEmptyUL();
	}
});

$('#filter').keyup(function () {
	"use strict";
	if ($(".filterBTN").hasClass("buttonOn")) {
		var text = $(this).val();
		$('.task-list .task').addClass("filterOnly");
		$('.task-list .task :not(.btn-container, span):contains("' + text + '")').closest(".task").removeClass("filterOnly");
		hideEmptyUL();
	}
});

// Makes Case-insensitive
$.expr[":"].contains = $.expr.createPseudo(function (arg) {
	"use strict";
	return function (elem) {
		return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
	};
});

// f key presses filter button
$('html').keydown(function (e) {
	"use strict";
	if (!$("*").is(':focus')) {
		if (e.keyCode === 70) {
			$('.filterBTN').click();
		}
	}
});

// Enter presses filter button when search box in focus
$('#filter').keydown(function (e) {
	"use strict";
	if ($("#filter").is(':focus')) {
		if (e.keyCode === 13) {
			$('.filterBTN').click();
		}
	}
});

// Search End
// Task Filter End



/*
// House number missing popup start


// URL is not quotes look ahead then is 1stWord and 2ndWord in that order
// if (/^(?!.*quotes).*code.*pen/.test(window.location.href)) {
if (/jobs\/edit/i.test(window.location.href) || /forms\/response\/edit/i.test(window.location.href)) {
	//if (/codepen/i.test(window.location.href)) {
	var popUpWarning = '<div class="missingPop hidePop"><a class="closeX" rel="nofollow">X</a><div><strong>Possible house number missing from an address!</strong></div><a class="buttonOK" rel="nofollow">OK</a></div>';
	$('#Content').after(popUpWarning);
}

function numberWarning() {
	"use strict";
	$("textarea.address-street:not([id*='Location'])").each(function () {
		//repeat code. Can i make it a function with this? 
		var str = $(this).val();
		if (str.match(/^([^0-9]*)$/)) {
			if ($(this).val() !== '') {
				$(this).addClass("missingNO");
				$(".missingPop").removeClass('hidePop');
				$('html, body').animate({
					scrollTop: $(".missingNO").offset().top - 200
				}, 1000);
			}
		}
		//repeat code. Can i make it a function with this?
	});
}

$("textarea.address-street:not([id*='Location'])").focusout(function () {
	"use strict";
	$(".missingPop").addClass('hidePop');
	$("textarea.address-street").removeClass("missingNO");
	//repeat code. Can i make it a function with this?
	var str = $(this).val();
	if (str.match(/^([^0-9]*)$/)) {
		if ($(this).val() !== '') {
			$(this).addClass("missingNO");
			$(".missingPop").removeClass('hidePop');
		}
	}
	//repeat code. Can i make it a function with this?
});

// turned off on request
//setTimeout(function () {
numberWarning();
//}, 3000);

$('.buttonOK').click(function () {
	"use strict";
	$(".missingPop").addClass("hidePop");
});

$('.closeX').click(function () {
	"use strict";
	$(".missingPop").addClass("hidePop");
});

// House number missing popup end

*/

// Do you want delivery... BAD LAZY CODE!

if (/app\/jobs\/orders\/new/i.test(window.location.href)) {
	var popUpWarning = '<div class="missingPop hidePop"><a class="closeX" rel="nofollow">X</a><div><strong>Ask if You Need To Add Delivery?</strong></div><a class="buttonOK" rel="nofollow">Ok</a></div>';
	var fakeSaveBtn = '<div id="fakeSave" class="field btn save dontDisable btn-primary btn-block">Save &amp; Book</div>'
	$('#Content').after(popUpWarning);
	$('#Save').before(fakeSaveBtn);
	$('#Save').addClass("hidePop");
}

function postageWarning() {
	"use strict";
	if (!$('#QuoteEditor .itemName span:contains("Home Delivery")').length) {
		$(this).addClass("missingNO");
		$(".missingPop").removeClass('hidePop');
	} else {
		$('#Save').click();
	}
}

$('#fakeSave').click(function () {
	"use strict";
	postageWarning();
	$('#Save').removeClass("hidePop");
	$('#Save').css({
		"margin-top": "0px"
	})
	$('#fakeSave').addClass("hidePop");
});


$('.buttonOK').click(function () {
	"use strict";
	$(".missingPop").addClass("hidePop");
	$('select[bind="products"]').focus(); //cant make it open once selected :/
});

$('.closeX').click(function () {
	"use strict";
	$(".missingPop").addClass("hidePop");
});

// Do you want delivery... BAD LAZY CODE! end

// questionnaire start

if (/jobs\/forms\/response\/edit/i.test(window.location.href)) {
	//if (/codepen/i.test(window.location.href)) {

	var hideClass = "hide";
	var showClass = "show";

	// Start of add/remove partner section
	// find the index of the end of the partner section and how many fields there are
	var ptnerFields = 3;
	var ptnerStart = $('.control-label:contains("Partner\'s Email")').closest('.formField').index('.formField');

	// Adds the add/remove btn
	var addPartner = '<div class="greenBtn" id="addPartner">+ Partner</div>';
	$(".formField").eq(ptnerStart).append(addPartner);

	// Hides the partner section to start with
	$("#addPartner").siblings().addClass(hideClass);
	$(".formField").slice(ptnerStart - ptnerFields, ptnerStart).addClass(hideClass);

	// Show and hides the Partner section as needed
	// changes the test to + or -
	$('#addPartner').on('click', function () {
		$(this).toggleClass("redBtn").toggleClass("greenBtn")
		$(this).text($(this).text() == '+ Partner' ? '- Partner' : '+ Partner');
		$(this).siblings().toggleClass(hideClass);
		$(".formField").slice(ptnerStart - ptnerFields, ptnerStart).toggleClass(hideClass);
	});

	// auto pet database

	// Dog info selectors
	var dogNameSelect = $('.drawAbove:contains("Dog\'s Name") + div > div > div:nth-child(1) input');
	var dogBreedSelect = $('.drawAbove:contains("Dog\'s Name") + div > div > div:nth-child(2) input');
	var dogAgeSelect = $('.control-label:contains("Dog\'s Birthday") + input');

	// Cat info selectors
	var catNameSelect = $('.drawAbove:contains("Cat\'s Name") + div > div > div:nth-child(1) input');
	var catBreedSelect = $('.drawAbove:contains("Cat\'s Name") + div > div > div:nth-child(2) input');
	var catAgeSelect = $('.control-label:contains("Cat\'s Birthday") + input');

	// Horse info selectors
	var horseNameSelect = $('.drawAbove:contains("Horse\'s Name") + div > div > div:nth-child(1) input');
	var horseBreedSelect = $('.drawAbove:contains("Horse\'s Name") + div > div > div:nth-child(2) input');
	var horseAgeSelect = $('.control-label:contains("Horse\'s Birthday") + input');

	// All info selectors
	var petNameSelect = $(dogNameSelect).add(catNameSelect).add(horseNameSelect);
	var petBreedSelect = $(dogBreedSelect).add(catBreedSelect).add(horseBreedSelect);
	var petAgeSelect = $(dogAgeSelect).add(catAgeSelect).add(horseAgeSelect);

	// Database selectors
	var petAgeDBInfo = $('.control-label:contains("Pet Ages") + input');
	var petNameDBInfo = $('.control-label:contains("Pet Names") + input');
	var petBreedDBInfo = $('.control-label:contains("Pet Breeds") + input');

	var subString = 2;
	var i;

	var petInfoSelect = [petNameSelect, petBreedSelect, petAgeSelect];
	var petDBinfo = [petNameDBInfo, petBreedDBInfo, petAgeDBInfo];
	var infoCheckDB = ["Name", "Breed", "00/00/00"];

	for (i = 0; i < petInfoSelect.length; i++) {
		$(petInfoSelect[i]).attr("placeholder", infoCheckDB[i]);
		//console.log($(petInfoSelect[i]).attr("placeholder"));
	}

	var emptyDB = 0;
	if ($(petNameDBInfo).val() == 0) {
		emptyDB = 1;
	}

	var str = "";

	function addToDB() {
		$(petDBinfo[i]).val(str.substring(subString));
	}

	function autoDB() {
		str = "";
		$(petInfoSelect[i]).each(function () {
			if (!$(this).val() == 0 && emptyDB == 1) {
				str = str + ", " + $(this).val();
				addToDB();
			} else if (!$(this).closest('.formField').prev().find(petNameSelect).first().val() == 0 && i === 2 && emptyDB == 1) {
				str = str + ", 00/00/00";
				addToDB();
			} else if (emptyDB == 1) {
				addToDB();
			}
		});
	}

	$(petInfoSelect[0]).add(petInfoSelect[1]).add(petInfoSelect[2]).change(function () { // add when new pet added
		for (var ix = 0; $(this).attr("placeholder") !== infoCheckDB[ix]; ix++) {}
		i = ix;
		for (var x = 0; i <= 2 || x < 1; i += 2, x++) {
			autoDB();
		}

	});

	for (i = 0; i < petInfoSelect.length; i++) {
		autoDB();
	}

	// auto count dogs for database

	function countDogs() {
		var count = 0;
		$(dogNameSelect).each(function () {
			if ($(this).val().length > 0) {
				count++;
			}
		});
		return count;
	}

	function addDogCount() {
		$('.control-label:contains("How Many Dogs") + input').val(countDogs());
	}

	addDogCount();

	$(dogNameSelect).change(function () {
		addDogCount();
	});

	//Start Add/remove pets and humans selects the last of the last entity field 
	var lastDog = $('.control-label:contains("Dog\'s Birthday")').last().closest('.formField');
	var lastCat = $('.control-label:contains("Cat\'s Birthday")').last().closest('.formField');
	var lastHorse = $('.control-label:contains("Horse\'s Birthday")').last().closest('.formField');
	var lastChild = $('.control-label:contains("Child\'s Birthday")').last().closest('.formField');
	var lastEntity = [lastDog, lastCat, lastHorse, lastChild];

	//Adds the add/remove btns
	var addDogBtns = '<div id="dogBtns"><div class="plusBtns" id="addDog">+ Dog</div><div class="minusBtns" id="minusDog">- Dog</div></div>';
	var addCatBtns = '<div id="catBtns"><div class="plusBtns" id="addCat">+ Cat</div><div class="minusBtns" id="minusCat">- Cat</div></div>';
	var addHorseBtns = '<div id="horseBtns"><div class="plusBtns" id="addHorse">+ Horse</div><div class="minusBtns" id="minusHorse">- Horse</div></div>';
	var addChildBtns = '<div id="childBtns"><div class="plusBtns" id="addChild">+ Child</div><div class="minusBtns" id="minusChild">- Child</div></div>';
	var addEntityBtns = [addDogBtns, addCatBtns, addHorseBtns, addChildBtns];

	for (i = 0; i < lastEntity.length; i++) {
		$(lastEntity[i]).append(addEntityBtns[i]);
	}

	// the index of the last field of the first entity
	var dogEndOfFirst = $('.control-label:contains("First Dog\'s Birthday")').closest('.formField').index('.formField') + 1;
	var catEndOfFirst = $('.control-label:contains("First Cat\'s Birthday")').closest('.formField').index('.formField') + 1;
	var horseEndOfFirst = $('.control-label:contains("First Horse\'s Birthday")').closest('.formField').index('.formField') + 1;
	var childEndOfFirst = $('.control-label:contains("First Child\'s Birthday")').closest('.formField').index('.formField') + 1;
	var entityEndOfFirst = [dogEndOfFirst, catEndOfFirst, horseEndOfFirst, childEndOfFirst];

	// the index of the + - buttons, the the end of the entity
	var dogEndOfLast = $('#dogBtns').closest('.formField').index('.formField');
	var catEndOfLast = $('#catBtns').closest('.formField').index('.formField');
	var horseEndOfLast = $('#horseBtns').closest('.formField').index('.formField');
	var childEndOfLast = $('#childBtns').closest('.formField').index('.formField');
	var entityEndOfLast = [dogEndOfLast, catEndOfLast, horseEndOfLast, childEndOfLast];

	var dogNoOfFields = 3; // the number of li's for each entity's info
	var catNoOfFields = 3;
	var horseNoOfFields = 3;
	var childNoOfFields = 3;
	var entityNoOfFields = [dogNoOfFields, catNoOfFields, horseNoOfFields, childNoOfFields];

	var dogTopTracker = dogEndOfFirst; // index of the last field of the first entity, changes to keep track
	var catTopTracker = catEndOfFirst;
	var horseTopTracker = horseEndOfFirst;
	var childTopTracker = childEndOfFirst;
	var entityTopTracker = [dogTopTracker, catTopTracker, horseTopTracker, childTopTracker];

	// the number of first dogs birthday plus the number of li's for each entity 
	var dogBottomTracker = dogTopTracker + dogNoOfFields;
	var catBottomTracker = catTopTracker + catNoOfFields;
	var horseBottomTracker = horseTopTracker + horseNoOfFields;
	var childBottomTracker = childTopTracker + childNoOfFields;
	var entityBottomTracker = [dogBottomTracker, catBottomTracker, horseBottomTracker, childBottomTracker];

	// adds onto the index of the last field of the first entity
	var nextDog = (function () {
		entityTopTracker[0] += entityNoOfFields[0]; // increase number if you add anouther pet
		entityBottomTracker[0] += entityNoOfFields[0];
	});
	var nextCat = (function () {
		entityTopTracker[1] += entityNoOfFields[1];
		entityBottomTracker[1] += entityNoOfFields[1];
	});
	var nextHorse = (function () {
		entityTopTracker[2] += entityNoOfFields[2];
		entityBottomTracker[2] += entityNoOfFields[2];
	});
	var nextChild = (function () {
		entityTopTracker[3] += entityNoOfFields[3];
		entityBottomTracker[3] += entityNoOfFields[3];
	});
	var nextEntity = [nextDog, nextCat, nextHorse, nextChild];

	var removeDog = (function () {
		entityTopTracker[0] -= entityNoOfFields[0];
		entityBottomTracker[0] -= entityNoOfFields[0];
	});
	var removeCat = (function () {
		entityTopTracker[1] -= entityNoOfFields[1];
		entityBottomTracker[1] -= entityNoOfFields[1];
	});
	var removeHorse = (function () {
		entityTopTracker[2] -= entityNoOfFields[2];
		entityBottomTracker[2] -= entityNoOfFields[2];
	});
	var removeChild = (function () {
		entityTopTracker[3] -= entityNoOfFields[3];
		entityBottomTracker[3] -= entityNoOfFields[3];
	});
	var removeEntity = [removeDog, removeCat, removeHorse, removeChild];

	var btns = ["#dogBtns", "#catBtns", "#horseBtns", "#childBtns"];

	//nest array to mix plus minus btn function

	var revealBtns = ['.plusBtns', ".minusBtns"];
	var entityTrackerBT = [entityBottomTracker, entityTopTracker]; //the number of first dogs birthday then changes to keep track of what is on show
	var entityTrackerTB = [entityTopTracker, entityBottomTracker];
	var endOfLastToFirst = [entityEndOfLast, entityEndOfFirst]; // the index of the + buttons
	var showHideClass = [showClass, hideClass];
	var hideShowClass = [hideClass, showClass];
	var changeEntity = [nextEntity, removeEntity];

	function showhide() {
		$('.formField').slice(entityTopTracker[i], entityBottomTracker[i]).addClass(showHideClass[ii]).removeClass(hideShowClass[ii]);
	}

	function showhideSibs() {
		$(btns[i]).siblings().addClass(showHideClass[ii]).removeClass(hideShowClass[ii]);
	}

	var operators = {
		0: function (a, b) {
			return a <= b
		},
		1: function (a, b) {
			return a > b
		},
	};

	var op;
	var ii;
	var fix; // poss the number being two

	//Hides extras to start with.
	// hide the siblings of the last entitys birthday to just show buttons

	for (i = 0; i < entityTopTracker.length; i++) {
		$('.formField').slice(entityEndOfFirst[i], entityEndOfLast[i]).addClass(hideClass);
		$(btns[i]).siblings().addClass(hideClass);
	}

	$(revealBtns[0]).add(revealBtns[1]).on('click', function () {
		for (i = 0; $(this).parent().attr('id') !== btns[i].substring(1); i++) {};
		for (fix = 1, op = 0, ii = 0; $(this).attr('class') !== revealBtns[ii].substring(1); op++, ii++, fix--) {}

		if (operators[op](entityTrackerBT[ii][i], endOfLastToFirst[ii][i] + fix)) {
			if (entityBottomTracker[i] == entityEndOfLast[i]) {
				entityBottomTracker[i] += 1; // replaces the number taken off that stops btns from being hidden
			}
			if (ii === 0) {
				showhide();
			}
			changeEntity[ii][i]();
			if (entityTrackerTB[ii][i] > entityEndOfLast[i]) {
				if (ii === 0) {
					showhideSibs();
				}
				if (ii === 1) {
					entityBottomTracker[i] -= 1;
				} // stops btns from being hidden
			}
			if (ii === 1) {
				showhide();
				showhideSibs();
			}
		}
	});

	// open close nav 

	$('.formField h1:contains(More)').css({
		"background-color": "#e6e6e6",
		"color": "#999999",
		"padding": "10px 30px 10px 30px",
		"display": 'inline-block'
	});

	function openNav() {
		$(".addAnother").eq(i).css("height", "100%");
	}

	function closeNav() {
		$(".addAnother").css("height", "0%");
	}

	var addOtherPets = [".addCats", ".addHorses"];
	var addOtherHumans = [".addChild"];
	var addOtherEntities = [addOtherHumans, addOtherPets];
	var Checker = ["More Pets", "More Humans"];

	// Add extra pets
	// hide other pets to start
	function otherEntities() {
		$('.formField').slice(entityEndOfFirst[i] - entityNoOfFields[i], entityEndOfFirst[i]).add(lastEntity[i]).addClass(hideClass);
	}

	for (i = 1; i < entityEndOfFirst.length; i++) {
		otherEntities();
	}

	$('.formField h1:contains(More)').on('click', function () {
		for (i = 0; $(this).text() !== Checker[i]; i++); {}
		openNav();
	});

	$('.closebtn').on('click', function () {
		closeNav();
	});

	$(addOtherPets[0]).add(addOtherPets[1]).on('click', function () {
		for (i = 1; $(this).attr('class') !== addOtherPets[i - 1].substring(1); i++); {}
		if (entityBottomTracker[i] == entityEndOfLast[i]) {
			entityBottomTracker[i] += 1; // replaces the number taken off that stops btns from being hidden
		}
		$('.formField').slice(entityEndOfFirst[i] - entityNoOfFields[i], entityBottomTracker[i] - entityNoOfFields[i]).add(lastEntity[i]).toggleClass(hideClass).removeClass(showClass);
		closeNav();
		setTimeout(() => {
			$(this).children("span").text($(this).children("span").text() == 'Add' ? 'Hide' : 'Add');
		}, 500);
	});

	$(addOtherHumans[0]).on('click', function () {
		for (i = 3; $(this).attr('class') !== addOtherHumans[i - 3].substring(1); i++); {}
		console.log(i);
		if (entityBottomTracker[i] == entityEndOfLast[i]) {
			entityBottomTracker[i] += 1; // replaces the number taken off that stops btns from being hidden
		}
		$('.formField').slice(entityEndOfFirst[i] - entityNoOfFields[i], entityBottomTracker[i] - entityNoOfFields[i]).add(lastEntity[i]).toggleClass(hideClass).removeClass(showClass);
		closeNav();
		setTimeout(() => {
			$(this).children("span").text($(this).children("span").text() == 'Add' ? 'Hide' : 'Add');
		}, 500);
	});

	// text area counter

	var remainSpan = "<span id='remainText'></span>";
	var OverviewLable = $('.control-label:contains(Notes Overview)');
	var NotesOverview = $(OverviewLable).next().find("textarea");

	$(OverviewLable).append(remainSpan);

	$(OverviewLable).next().keyup(function (e) {
		console.log("is this working");
		var tval = $(NotesOverview).val(),
			tlength = tval.length,
			set = 2000,
			remain = parseInt(set - tlength);
		$('#remainText').text(remain);
		if (remain <= 0 && e.which !== 0) {
			$('#remainText').addClass("redBtn").removeClass("greenBtn")
				// console.log(tlength - (tlength - set));
				// console.log($(OverviewLable).next().find("p").text().substring(0, tlength - (tlength - set)));
				// var cutShort = ($(OverviewLable).next().find("p").text().substring(0, tlength - (tlength - set)));
				// $(OverviewLable).next().find("p").text(cutShort);
		} else {
			$('#remainText').addClass("greenBtn").removeClass("redBtn")
		}
	})

}
// questionnaire end

// Time of day Contact Box Start

if (/app\/jobs\/edit/i.test(window.location.href) || /app\/jobs\/view/i.test(window.location.href) || /app\/leads/i.test(window.location.href)) {

	var timeBox = $('#redactor-uuid-1') // removing next
	var timeBoxHidden = $(timeBox).next()
	var counter = [0, 0, 0, 0]
	var priority = [1, 1, 1, 1]
	var timeOfDay = ["Morning", "Afternoon", "Evening", "Saturday"]
	var timeLetter = timeOfDay.map(function (letter) {
		return letter[0]
	});
	var duplicatesRemoved = []
	var dots = ""
	var calledTimes = "" //taken from counter array
	var timesCalled = "" //read from priority code
	var priorityCodes = $('.cf-name:contains("Attempted call")').next()
	var priorityCode = $(priorityCodes).find("p")

	// make a new array removing duplicates
	function removeDuplicates() {
		duplicatesRemoved = counter.reduce(function (a, b) {
			if (a.indexOf(b) < 0) a.push(b);
			return a;
		}, []);
	}

	// makes an even newer array by removing numbers that are larger than the counter number and then counting them to work out the priority 
	function calcPriority() {
		for (i = 0; i < priority.length; i++) {
			var eachPriority = duplicatesRemoved.filter(function (x) {
				return x < counter[i]
			})
			priority[i] = eachPriority.length + 1
		}
	}

	function numberOfDots() {
		for (i = 0; i < (priority.length - priority[x] + 1); i++) {
			dots = dots + "."
		}
	}

	function numberOfCalls() {
		if (counter[x] == 0) {
			calledTimes = timeLetter[x]
		}
		for (i = 0; i < counter[x]; i++) {
			calledTimes = calledTimes + timeLetter[x] + (i + 1)
		}
	}

	function updatePriorityText() {
		for (x = 0; x < priority.length; x++) {
			numberOfDots()
			numberOfCalls()
			$(timeBox).append("<p>" + priority[x] + " " + calledTimes + dots + timeLetter[x] + "</p>")
			dots = ""
			calledTimes = ""
		}
	}

	function updateHiddenBox() {
		$(timeBoxHidden).val(timeBox.html())
	}

	function readTimesCalled(readFrom, placeHere) {
		for (i = 0; i < priority.length; i++) {
			timesCalled = readFrom.eq(i).text().split(/\.(.+)/)[0].slice(-1)
			if (isNaN(timesCalled) == false && timesCalled !== "") {
				showTimesCalled(placeHere)
			}
		}
	}

	function showTimesCalled(placeHere) {
		timesCalled = parseInt(timesCalled)
		counter[i] = timesCalled
		placeHere.eq(i).find("span").text(timesCalled)
	}

	function allSameArray(ary, sameAs, func) {
		var x = 0
		for (i = 0; i < ary.length; i++) {
			if (ary[i] == sameAs) {
				x++
			}
			if (x == 4) {
				func()
			}
		}
	}

	function clearCode() {
		$(timeBox).text("")
	} // clears code

	$(".redactor-toolbar-box").on('click', '#redactor-toolbar-1 li', function (e) {
		ii = $(this).index()
		if (e.shiftKey) {
			counter[ii]--
		} else {
			counter[ii]++
		}
		removeDuplicates()
		calcPriority()
		clearCode()
		updatePriorityText()
		allSameArray(counter, 0, clearCode) //need to tidy this up
		updateHiddenBox()
		$(this).find("span").text(counter[ii])
	});

	$('#redactor-toolbar-1 li').slice(-13).css({
		"display": "none"
	})

	$('#redactor-toolbar-1').first().after().load('https://dl.dropboxusercontent.com/s/wbmj6g5hw4ib9d8/TaveAll.html?dl=0 #contactTimeBtn li', function () {
		readTimesCalled($('#redactor-uuid-1 p'), $('.timeStampBtn'))
	});

	$("#redactor-uuid-1").attr('contenteditable', 'false');
	$("#redactor-uuid-1").hide()

	// Time of day Contact Box End
	// Time of day Overview Page start

	$(priorityCodes).after().load('https://dl.dropboxusercontent.com/s/wbmj6g5hw4ib9d8/TaveAll.html?dl=0 #contactTimeView div', function () {
		readTimesCalled($(priorityCode), $('.timeStampBtn'))
	});

	// Time of day Overview page end
	// Time of day search page start

	function wrapEveryNth(wrapIn, wrapWhat, nth) {
		for (var i = 0; i < wrapWhat.length; i += nth) {
			wrapWhat.slice(i, i + nth).wrapAll(wrapIn)
		}
	}

	function changeMinMax($e, min, max) {
		$e.attr({
			"min": min,
			"max": max
		});
	}

	function detectFilterType() {
		$("#filterType").change(function () {
			console.log("change noticed")
			var val = $(this).find("option:selected").val()

			switch (val) {
				case "notCalled":
					$('#number').css('visibility', 'hidden')
					break
				case "priority":
				case "priorityFrom":
					changeMinMax($('#number'), 1, 4)
					$('#number').css('visibility', 'visible')
					break
				default:
					changeMinMax($('#number'), 0, "")
					$('#number').css('visibility', 'visible')
			}
		})

	}

	var contactLabel = $('th.column-label span:contains("Attempted call")').parent()
	var contactTable = contactLabel.closest("thead").next().find("tr td")
	var cellLength = contactLabel.closest("thead").next().find("tr:first-child").find("td").length

	var shallowSelectCodes = $(contactTable).filter(function (index) {
		return (index - contactLabel.index()) % cellLength == 0
	})

	var selectCodes = shallowSelectCodes.clone() // deep copy

	var k = 0
	var kk = 0

	$(shallowSelectCodes).load('https://dl.dropboxusercontent.com/s/wbmj6g5hw4ib9d8/TaveAll.html?dl=0 #contactTimeView div', function () {
		var selectCode = $(selectCodes[k]).find("p")
		var placeTimesCalled = $('.timeStampBtn').slice(kk)
		readTimesCalled($(selectCode), $(placeTimesCalled))
		wrapEveryNth(("<div class='stopWrap'></div>"), placeTimesCalled, 2)
		k++
		kk += counter.length
	});

	$(document).on('mouseup dragend', '.has-selected', function () {
		setTimeout(() => {
			window.location.reload()
		}, 500);
	});

	$(document).keyup(function (e) {
		if ((e.key === "Escape" || e.which == 13) && $(".pending").length) { // escape key maps to keycode `27`
			window.location.reload()
		}
	})

	$("#ListControl").click(function (e) {
		if ($(e.target).is('span:contains("Search")')) {
			setTimeout(() => {
				window.location.reload()
			}, 500);
		}
		$('label:contains("Attempted call")').next().find("option:not(:contains('contains'), :contains('not contain'))").remove() // filter out the one i want to keep
	})

	$("#ListControl").on('click', 'input', function (e) {
		var target = $(e.target);
		if (target.is($('label:contains("Attempted call")').next().find("div:last-child input"))) {
			$("#fadeOut").show()
		}
	})

	// Search function
	// Make dropdown

	var timeOfDayOption = '';
	for (var i = 0; i < timeOfDay.length; i++) {
		timeOfDayOption += '<option value="' + timeOfDay[i] + '">' + timeOfDay[i] + '</option>';
	}

	$('#PageContainer').append('<div id="fadeOut">')
	$("#fadeOut").load('https://dl.dropboxusercontent.com/s/wbmj6g5hw4ib9d8/TaveAll.html?dl=0 #SearchMenu', function () {
		$(timeOfDayOption).appendTo('select[name=todFilter]')
		detectFilterType()
	})

	function copyToClipboard(text) {
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val(text).select();
		document.execCommand("copy");
		$temp.remove();
	}

	$(document).on("click", "#priorityCodeBtn", function () {

		var fromDots = priority.map(function (event) {
			return "."
		})

		var searchBox = $('label:contains("Attempted call")').next().find("div:last-child input")
		var selectedLetterIndex = $("#todFilter option:selected").index()
		var selectedLetter = timeLetter[selectedLetterIndex]
		var selectedNumber = $('#number').val()
		var selectedFilter = String($("#filterType option:selected").val())
			// needs to be string to call a function with braket notation

		var searchAction = {
			priority: function () {
				return selectedNumber + " " + selectedLetter
			},
			notCalled: function () {
				return selectedLetter + "."
			},
			priorityFrom: function () {
				return fromDots.join("").substr(selectedNumber - 1) + selectedLetter
			},
			leastXTimes: function () {
				return selectedLetter + selectedNumber
			},
			xTimes: function () {
				return selectedLetter + selectedNumber + "."
			}
		};

		copyToClipboard(searchAction[selectedFilter]())
		$("#fadeOut").hide()
		searchBox.val('').focus()
		searchBox.attr("placeholder", "Press Ctrl V to paste the code");
	})
}

// Time of day search page end

// make backup of session notes start

if (/forms\/response\/edit\/2464526/i.test(window.location.href)) {
	let sessionNotesBackup = () => {
		let $sessionNotes = $('label:contains("Session Notes")').next()
		let $sessionNotesText = $sessionNotes.find('[id*="redactor-uuid"]')
		let $backupLabel = $('label:contains("Backup")')
		let $backup = $backupLabel.next()
		let $backupText = $backup.find('[id*="redactor-uuid"]')
		let con1 = Array.isArray($sessionNotesText.text().match(/\w/g)) ? $sessionNotesText.text().match(/\w/g).join('') : $sessionNotesText.text().match(/\w/g)
		let con2 = Array.isArray($backupText.text().match(/\w/g)) ? $backupText.text().match(/\w/g).join('') : $backupText.text().match(/\w/g)

		if (con1 != con2) {
			alert('WARNING! NOTES DO NOT MATCH BACKUP NOTES')
		}

		if (!/\w/g.test($sessionNotesText.text())) {
			$sessionNotes.keyup(function (e) {
				$backup.find('textarea').val($sessionNotesText.html())
			})
		}
		$backup.hide()
		$backupLabel.text('Show Backup')

		$backupLabel.click(function () {
			$backup.toggle()
			$(this).text(function (i, text) {
				return text === "Show Backup" ? "Hide Backup" : "Show Backup";
			})
		})
	}
	sessionNotesBackup()
}
// make backup of session notes end
