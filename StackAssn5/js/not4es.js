function buildAndShowHomeHTML (categories) {
  $ajaxUtils.sendGetRequest(
    homeHtmlUrl,
    function (homeHtml) {
      randCategory = chooseRandomCategory(categories);


// TODO: STEP 3: Substitute {{randomCategoryShortName}} in the home html snippet with the
// chosen category from STEP 2.
      var html = randCategory;
       var name = "" + randCategory.name;
      var short_name = randCategory.short_name;    //So far so good

      // Look through this code for an example of how to do use the insertProperty function.
      // WARNING! You are inserting something that will have to result in a valid Javascript
      // syntax because the substitution of {{randomCategoryShortName}} becomes an argument
      // being passed into the $dc.loadMenuItems function. Think about what that argument needs
      // to look like. For example, a valid call would look something like this:
      // $dc.loadMenuItems('L')
      // Hint: you need to surround the chosen category short name with something before inserting
      // it into the home html snippet.
       html = insertProperty (homeHtml, "name", name);
       html = insertProperty (homeHtml, "short_name", short_name); // From here--- I don't under sstand what to
                                                                    //do-- tho step 4 seems cleare enout-- but here

	      // $dc.loadMenuItems(short_name);
	    // insertHtml("#main-content",html);


    },
    false); // False here because we are getting just regular HTML from the server, so no need to process JSON.
}




Use existing insertProperty function for that purpose.
//
// var homeHtmlToInsertIntoMainPage = ....
