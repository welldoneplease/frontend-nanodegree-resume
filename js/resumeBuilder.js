// helperFunctions
function dataRpl(tpl, data) {
  var formattedTemplate = tpl.replace('%data%', data);
  return formattedTemplate;
}

var bio = {
  "name": "Robert A. Stevens",
  "role": "Web Developer",
  "contacts": {
    "mobile": "423-488-3257",
    "email": "RobertAStevens@teleworm.us",
    "github": "welldoneplease",
    "twitter": "@ewwtwitter",
    "blog": "http://www.myfakeblog.fake",
    "location": "San Andreas"
  },
  "welcomeMessage": "01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100",
  "skills": [
    "travel without moving", "mingle with gods", "collect infinity gems", "spelunking"
  ],
  "bioPic": "images/fry.jpg",
};

bio.display = function() {
  // add role and name
  $("#header").prepend(dataRpl(HTMLheaderRole, this.role))
    .prepend(dataRpl(HTMLheaderName, this.name));

  // add contact info to top and footer section
  $("#topContacts, #footerContacts").append(dataRpl(HTMLmobile, this.contacts.mobile))
    .append(dataRpl(HTMLemail, this.contacts.email))
    .append(dataRpl(HTMLtwitter, this.contacts.twitter))
    .append(dataRpl(HTMLgithub, this.contacts.github))
    .append(dataRpl(HTMLblog, this.contacts.blog))
    .append(dataRpl(HTMLlocation, this.contacts.location));

  // add bio pic and welcome message
  $("#header").append(dataRpl(HTMLbioPic, this.bioPic))
    .append(dataRpl(HTMLWelcomeMsg, this.welcomeMessage));

  // do we have skills? if so add 'skillsStarter' and loop through skills
  if(this.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var skillsElement = $("#skillsH3");
    for(var skill in this.skills) {
      skillsElement.append(dataRpl(HTMLskills, this.skills[skill]));
    }
  }
};


var education = {
  "schools": [
    {
      "name": "X-Mansion",
      "location": "Salem Center",
      "degree": "Masters",
      "majors": ["Telepathics"],
      "dates": 2011,
      "url": "http://x-men.com"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Crash Course",
      "school": "Udacity",
      "dates": 2014,
      "url": "http://www.udacity.com/course/ud804"
    }
  ]
};

education.display = function() {
  $("#education").append(HTMLschoolStart);

  for (var school in this.schools) {
    $(".education-entry:last").append(
      dataRpl(HTMLschoolName, this.schools[school].name)
      +dataRpl(HTMLschoolDegree, this.schools[school].degree)
    )
      .append(dataRpl(HTMLschoolDates, this.schools[school].dates))
      .append(dataRpl(HTMLschoolLocation, this.schools[school].location))
      .append(dataRpl(HTMLschoolMajor, this.schools[school].majors[0]));
  }

  if (this.onlineCourses.length > 0) {
    for (var course in this.onlineCourses) {
      $("#education").append(HTMLonlineClasses)
        .append(HTMLschoolStart);

      $(".education-entry:last").append(dataRpl(HTMLonlineTitle, this.onlineCourses[course].title)
        +dataRpl(HTMLonlineSchool, this.onlineCourses[course].school)
      )
        .append(dataRpl(HTMLonlineDates, this.onlineCourses[course].dates))
        .append(dataRpl(HTMLonlineURL, this.onlineCourses[course].url));
    }
  }
};


var work = {
  "jobs": [
    {
      "employer": "Magneto",
      "title": "Supervillain Henchman 7",
      "dates": "2000-2007",
      "location": "New York",
      "description": "Bishop boomerang dolores betty brant sobek mister fantastic dazzler sunspot carol danvers brother voodoo magog lilandra neramani captain planet phoebe mcallister nathaniel richards. Medusa doctor spectrum kraven the hunter, thing mr incredible, omniscient. Robbie robertson lockjaw sentry matt parkman hard-drive invisible woman monica dawson sabretooth guardian kang the conqueror toad light lass. Proteus whizzer frigga fountain captain spain corsair. Lieberman firestar saluki agent 13 lady lark hawkwoman maverick arnim zola. Nightwing amphibian vertigo elektra plastic man primal screamer, she-hulk johann krauss. Diablo boomerang wong stardust, venom franklin 'foggy' nelson fountain! Quill sobek alex woolsly polaris captain epic elastigirl toad!"
    }
  ]
};

work.display = function() {
  $("#workExperience").append(HTMLworkStart);

  for(var job in this.jobs) {
    $(".work-entry:last").append(dataRpl(HTMLworkEmployer, this.jobs[job].employer)
      + dataRpl(HTMLworkTitle, this.jobs[job].title))
      .append(dataRpl(HTMLworkDates, this.jobs[job].dates))
      .append(dataRpl(HTMLworkDescription, this.jobs[job].description));
  }
}


var projects = {
  "projects": [
    {
     "title": "Fake Project 1",
     "dates": 2014,
     "description": "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.",
     "images": ["http://placehold.it/350x250", "http://placehold.it/350x250", "http://placehold.it/350x250"]
    }
  ]
}

projects.display = function() {
  $("#projects").append(HTMLprojectStart);

  for (var project in this.projects) {
    $(".project-entry:last").append(dataRpl(HTMLprojectTitle, this.projects[project].title))
      .append(dataRpl(HTMLprojectDates, this.projects[project].dates))
      .append(dataRpl(HTMLprojectDescription, this.projects[project].description))

    if (this.projects[project].images.length > 0) {
      var lastProjectEntry = $(".project-entry:last");
      for (var img in this.projects[project].images) {
        lastProjectEntry.append(dataRpl(HTMLprojectImage, this.projects[project].images[img]));
      }
    }
  }
};


// call all display functions
bio.display();
education.display();
work.display();
projects.display();

// add map to resume
$("#mapDiv").append(googleMap);

// logClick eventHandler
$(document).on('click', function(loc) {
  logClicks(loc.pageX, loc.pageY);
})
