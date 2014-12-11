var bio = {
  "name": "Robert A. Stevens",
  "role": "Web Developer",
  "contacts": {
    "mobile": "423-488-3257",
    "email": "RobertAStevens@teleworm.us",
    "github": "myfakegithub",
    "twitter": "@ewwtwitter",
    "location": "San Andreas"
  },
  "welcomeMessage": "01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100",
  "skills": [
    "spielen", "schielen", "rennen", "pennen"
  ],
  "bioPic": "images/fry.jpg"
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

var projects = {
  "projects": [
    {
     "title": "Fake Project 1",
     "dates": 2014,
     "description": "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.",
     "images": ["http://upload.wikimedia.org/wikipedia/en/5/54/Ghazir_Rug.jpg"]
    }
  ]
}

if (bio.skills.length > 0 ) {
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
  $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic))
  $("#header").append(HTMLskillsStart);
  $("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
  $("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
  $("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
}

function displayWork() {
  $("#workExperience").append(HTMLworkStart);
  for(var job in work.jobs) {
    $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title));
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
  }
}

displayWork();

projects.display = function() {
  $("#projects").append(HTMLprojectStart);
  for (var project in this.projects) {
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", this.projects[project].title))
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", this.projects[project].dates))
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", this.projects[project].description))
    if (this.projects[project].images > 0) {
      for (var img in this.projects[project].images) {
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", this.projects[project].images[img]))
      }
    }
  }
};

projects.display();

$("#mapDiv").append(googleMap);
