module Data exposing (Experience, experiences, me)


me =
    { name = "Filip Bontin"
    , description = "Dedicated software engineer with a passion for programming and UX-design. When I'm not in front of the computer, I hang out with friends, travel or enjoy nature. If the weather allows I'll probably try to get some longboarding in there too."
    , email = "fbontin@gmail.com"
    , github = "https://github.com/fbontin/"
    , linkedin = "https://linkedin.com/in/fbontin"
    }


type alias Experience =
    { title : String
    , text : String
    , startDate : String
    , endDate : String
    }


experiences : List Experience
experiences =
    [ { title = "Exchange Studies"
      , text = "I spent a semester at Graz University of Technology in Austria, learning and traveling."
      , startDate = "Feb 2016"
      , endDate = "Jul 2016"
      }
    , { title = "Emmaboda Festival"
      , text = "One part of a two-man team that developed the festival's first iPhone app using Swift."
      , startDate = "Nov 2016"
      , endDate = "May 2017"
      }
    , { title = "Master thesis"
      , text = "Developed a prototype for participatory urban planning using Unity and a 75\" touch screen."
      , startDate = "May 2017"
      , endDate = "Oct 2017"
      }
    , { title = "Valtech"
      , text = "Fullstack developer using React, .NET and other at Valtech's Malmö office."
      , startDate = "Feb 2017"
      , endDate = "Mar 2018"
      }
    , { title = "Jayway"
      , text = "Currently working as a full-stack developer at Jayway Malmö. Working mostly with AWS and Node but also with React."
      , startDate = "Apr 2018"
      , endDate = "Current"
      }
    ]
