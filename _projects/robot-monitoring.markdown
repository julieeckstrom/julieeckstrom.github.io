---
layout: project
title: Empowering engineers to efficiently monitor their robot fleet
description: A fleet management system that focuses engineers' attention on the robots that need it, while being flexible enough to diagnose robot-specific bugs and discover fleet-wide trends.
organization: Bossa Nova Robotics
year: 2016
order: 1
featured: yes
role: lead designer
images: 
 - url: /assets/img/remote-monitoring/hero.png
   title: Mockups of the remote monitoring interface.
   alt: A process image of the Sketch file for remote monitoring.
 - url: /assets/img/remote-monitoring/hero-blur.png
---

## Challenge

Bossa Nova's retail robots currently operate with someone physically nearby. To scale to many stores at once, Bossa Nova's robots need to be monitored and operated remotely.

## Process

When I started working at Bossa Nova, information about our robots was recorded on 5 different spreadsheets. Scheduling missions was done by phone call. Information about needed repairs was communicated on sticky notes attached to the robots. And the Robot Software team had a project in mind called Remote Monitoring, so they could see what was happening on a robot's mission without being physically present. 

As the project kicked-off, I began research with the Robot Software team. I sat next to them as they took calls from the field, listening to what questions they were asking and watching what was on their screens. I followed Robot Operators around stores, asking them what they were looking for and what questions they had about the mission at different times. I scoured artifacts the Robot Software team created for themselves: spreadsheets that tracked software versions, spreadsheets that recorded maintenance issues, spreadsheets of mission logs, and so on. Plus, there were tons of anecdotes about the troubles with operations, like the couple times the robots got lost in shipping.

I took all of this research and created a list of needs that the Robot Software team has, and it extended far beyond what the team had originally considered. New to the list was an alert system that would direct the team's attention to where it was needed, a robot scheduling system, and a place to track maintenance performed. The team also needed a way to see each robot's historical hardware issues for context. They needed a way to use mission information to analyze how well robots were performing. They also needed a way to compare each robot's statistics against the entire fleet and filter that data for useful insights. Most important, the team needed all this information in one location, where engineers could see the past, present, and future information relevant for solving problems. Satisfying this long list of needs would become increasingly imperative as the robot fleet grew in size.

<figure><img class="image six columns" src="/assets/img/remote-monitoring/image-1.JPG"><figcaption class="image six columns">Working through the information structure of the system.</figcaption></figure>

<figure><img class="image ten columns" src="/assets/img/remote-monitoring/image-2.JPG"><img class="image ten columns" src="/assets/img/remote-monitoring/image-3.JPG"><figcaption>Working through different designs for how this system could work together.</figcaption></figure>

It was immediately apparent that this is a huge system. Not only are there thousands of pieces of data to organize and visualize, but that data all exists through time. And that time may need to be viewed in a snapshot or as a continuum that may or may not be user specified. 

I worked with the business team to communicate these needs, and we scheduled the work according to what was required for support at different business milestones. "Monitoring," or visualizing data from a robot while it is on a mission, was the first big chunk of this system to bite off.

To design the interactions and visualizations for monitoring, I needed to figure out what information the Robot Software team wanted to see in a web app. I was also communicating with the Data Engineering team about bandwidth limitations because robots are not connected to Wi-Fi when in stores. This meant our backend systems would only be able to support about 20 pieces of textual data from each robot. The Robot Software team is used to having access to all of their data, so it was difficult for them to identify what information they would need to know immediately when watching a mission. To help, I went into the team's code repos and put each piece of data they currently record on a different card and then did a card sorting activity with them individually. I found that they all have differing ideas on the priority of information. So I put the engineers in a room together to do a group sorting activity, which resulted in an agreed upon list of data points they would want to see first in the system. I gave this information to the Data Engineering team so it could start building the plumbing while I figured out what it would look like on the front end. 

<figure><img src="/assets/img/remote-monitoring/image-4.png"><figcaption>My card sorting session with the robot software team, encouraging them to collaborate to come up with the information they want in the first version.</figcaption></figure>

Through this process I realized that the Robot Software team needed help organizing their own code. They had legacy names for subsystems dating back to rapidly prototyped proof-of-concept robots. I helped them identify new names for subsystems and even added a few of my own requirements because of <a href="../projects/hri-communication.html"> my work in HRI</a>. The Robot Software team has dubbed me the "Chief Naming Officer" because of my help in identifying and defining these pieces of data. I was doing this not just to be helpful, but also because I had to thoroughly understand the concepts. It would be too costly if engineers were the only ones able to use the system. I translated the Robot Software team's concepts into layman's terms to lower the learning curve and the expense of monitoring robots in the future.

I took the pieces of data the Robot Software team identified as wanting for the first round, and started categorizing them in different ways: discrete vs. continuous, more useful over a time continuum vs. only needed as a snapshot. I analyzed how this data changed based on the lens through which someone is viewing it.

<figure><img class="image four columns" src="/assets/img/remote-monitoring/image-5.JPG"><div class="one column"></div><img class="image four columns" src="/assets/img/remote-monitoring/image-6.JPG"><div class="one column"></div><img class="image four columns" src="/assets/img/remote-monitoring/image-7.JPG"><figcaption>Working through types of data.</figcaption></figure>

Because of the multitude of attributes of this data, it became increasingly time consuming to continue digital wireframing. I began to physically wireframe an individual robot screen so that I could easily move pieces around until the grouping of data made sense. I user tested with operators and engineers and did many design team reviews to ensure the system would make sense moving forward. 

<figure><img src="/assets/img/remote-monitoring/image-8.png"><figcaption>A physical wireframe, enabling quick sensemaking and iteration.</figcaption></figure>

I then returned to the digital space and created mid-fi interfaces. I user tested these interfaces and, in doing so, discovered that the engineers really wanted a map. I had been so focused on designing what the data looked like that I had put that all up front, shoving the map to the side. There's always unknown variables when viewing data from a robot, and that has to do with the robot's environment. The more the engineers could understand the context the robot was in, like where it was and what it was trying to do, the more meaning they found in the data coming from the robot's subsystems. In the next round of mid-fi's, I brought contextual data to the forefront.

I then moved into hi-fi mockups, where I did a lot of team reviews. We would ponder over questions like where does time exist on the interface, and how all of the elements are aligned vertically and horizontally to all reflect the same time. I explained how the pieces of data would work together so that when a user interacted with a piece of information in one area of the screen, other data with the same timestamp would be highlighted on the screen. 

<figure><img class="image nine columns" src="/assets/img/remote-monitoring/image-9.JPG"><figcaption class="image nine columns">The team working through problems over ice cream.</figcaption></figure>

I continued user testing, this time brining in people from other areas of the company and unfamiliar with the robots to identify usability issues. Ultimately, the designs went through 6 iterations of wireframes, and 3 iterations of mockups.

<figure><img src="/assets/img/remote-monitoring/image-10.png"><figcaption>Working files for the mockups.</figcaption></figure>

The mockups landed in a place where the Robot Software team will be able to see mission information quickly, and they will no longer have to support legacy systems to keep track of their robots. Bossa Nova is building a <a href="../projects/hri-form.html">new robot</a> now, so the Robot Software team is still not sure what more they will need to know with the new platform. This version of Monitoring is a test to see if our assumptions about the usefulness of the mission data we chose to track are true. With the web team developing this iteration, I'm now designing the scheduling and controlling pieces of the system, as well as coordinating the next round of monitoring data that will go into the system. Given the magnitude of this project, it will likely continue through the next couple years.