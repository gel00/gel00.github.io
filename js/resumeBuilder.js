var bio = {
    "name": "Gabor Gellai",
    "role": "Web developer",
    "contacts": {
        "mobile": "+36 (70) 9429348",
        "email": "gellaigabor@gmail.com",
        "github": "gel00",
        "twitter": "@ssgel00",
        "location": "Szeghalom"
    },
    "welcomeMessage": "Welcome to my portfolio site!",
    "skills": ["OOP", "Functional programing", "HTML 5", "CSS 3", "Bootstrap", "Sass", "Responsive Design", "Vanilla JS", "jQuery", "AJAX", "JSON"],
    "biopic": "images/me.jpg"
};

var education = {
    "schools": [{
        "name": "Univercity of Szeged",
        "location": "Szeged",
        "degree": "BA",
        "majors": ["Media Informatics"],
        "dates": "2009-2012",
        "url": "http://www.u-szeged.hu/"
    }],
    "onlineCourses": [{
        "title": "Front End Developer",
        "school": "Udacity",
        "dates": "Aug 2016 - Dec 2016",
        "url": "https://www.udacity.com/"
    }]
};

var work = {
    "jobs": [{
        "employer": "Dravit Hungary",
        "title": "Marketing Assistant",
        "location": "Gyoma",
        "dates": "May 2007 - July 2007",
        "description": "Building basic portfolio site. Creating company logo, forms, business cards. System admininistrator tasks."
    }, {
        "employer": "Martin Kuijpers",
        "title": "Gardener",
        "location": "Elsendorp, Netherlands",
        "dates": "May 2008 - July 2008",
        "description": "mowing grass, weeding, laying paving, foliage pruning"
    }, {
        "employer": "Transaliance",
        "title": "Operator",
        "location": "Szeghalom",
        "dates": "Jan 2013 - July 2013",
        "description": "I coodinated a fleet, that contained 50 trucks. I had to calculate their routs depands on several variables, like working hours, ferry timetables or traffic jams."
    }]
};

var projects = {
    "projects": [{
        "title": "Relax Futár",
        "dates": 2015,
        "description": "I created a modern responsive single-page application portfolio site for a masseur.",
        "images": [
            "images/projects/relax/p_RF_1.jpg", "images/projects/relax/p_RF_2.jpg", "images/projects/relax/p_RF_3.jpg"
        ],
        "video": '<iframe width="853" height="480" class="youtube" src="https://www.youtube.com/embed/iQbvpkIElU8?rel=0" frameborder="0" allowfullscreen></iframe>'
    }]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name),
        formattedRole = HTMLheaderRole.replace("%data%", bio.role),
        formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic),
        formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
        formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
        formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github),
        formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
        formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location),
        formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[0].title),
        formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),
        formattedContacts =
        formattedMobile +
        formattedEmail +
        formattedGitHub +
        formattedTwitter +
        formattedLocation,
        $topContacts = $("#topContacts")
        .before(formattedName)
        .before(formattedRole)
        .append(formattedContacts);
    if (bio.skills.length) {
        $topContacts.after(HTMLskillsStart);
        var formattedSkill,
            $skills = $("#skills");
        bio.skills.forEach(function(skill) {
            formattedSkill = HTMLskills.replace("%data%", skill);
            $skills.append(formattedSkill);
        });
    }
    $topContacts
        .after(formattedBioPic)
        .after(formattedWelcomeMsg);
    $("#footerContacts").append(formattedContacts);
};

bio.display();


work.display = function() {
    var formattedEmployer,
        formattedWorkTitle,
        formattedWorkLocation,
        formattedWorkDates,
        formattedWorkDescription;
    work.jobs.forEach(
        function(job) {
            formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
            $("#workExperience")
                .append(HTMLworkStart)
                .children(".work-entry:last")
                .append(
                    formattedEmployer +
                    formattedWorkTitle +
                    formattedWorkLocation +
                    formattedWorkDates +
                    formattedWorkDescription);
        }
    );
};
work.display();

projects.display = function() {
    this.projects.forEach(
        function(project) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title),
                formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates),
                formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description),
                formattedProjectImages = "",
                formattedProjectVideo = project.video;
            project.images.forEach(function(image) {
                formattedProjectImages += HTMLprojectImage.replace("%data%", image);
            });

            $(".project-entry:last").append(
                formattedProjectTitle +
                formattedProjectDates +
                formattedProjectDescription +
                formattedProjectImages +
                formattedProjectVideo);
        }
    );
};

projects.display();

education.display = function() {
    var formattedSchoolName,
        formattedSchoolLocation,
        formattedSchoolDegree,
        formattedSchoolMajors = "",
        formattedSchoolDates,
        formattedOnlineTitle,
        formattedOnlineSchool,
        formattedOnlineDates,
        formattedOnlineURL,
        $education = $("#education");
    this.schools.forEach(function(school) {
        formattedSchoolName = HTMLschoolName
            .replace("%data%", school.name)
            .replace("#", school.url);
        formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        school.majors.forEach(function(major){
            formattedSchoolMajors += HTMLschoolMajor.replace("%data%", major);
        });
        formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $education
            .append(HTMLschoolStart)
            .children(".education-entry:last")
            .append(
                formattedSchoolName +
                formattedSchoolDegree +
                formattedSchoolDates +
                formattedSchoolMajors +
                formattedSchoolLocation
            );
    });
    if (this.onlineCourses.length) {
        $education.append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(course) {
            formattedOnlineTitle = HTMLonlineTitle
                .replace("%data%", course.title)
                .replace("#", course.url);
            formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
            formattedOnlineURL = HTMLonlineURL
                .replace("%data%", course.url)
                .replace("#", course.url);
            $education
                .append(HTMLschoolStart)
                .children(".education-entry:last")
                .append(
                    formattedOnlineTitle +
                    formattedOnlineSchool +
                    formattedOnlineDates +
                    formattedOnlineURL
                );
        });
    }
};

education.display();

$("#map-div").append(googleMap);
