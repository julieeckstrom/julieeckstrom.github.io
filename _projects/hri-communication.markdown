---
layout: project
title:  Helping people understand a robot's thoughts
description: Discovering the information people need to feel safe around a robot, and designing lighting patterns to communicate that information.
organization: Bossa Nova Robotics
year: 2015 - ongoing
order: 4
featured: no
images: 
 - url: /assets/img/hri-communication/hero.png
   title: Gaeta+ with attached LEDs
   alt: The robot moving through an aisle with a light pattern playing.
 - url: /assets/img/hri-communication/hero-blur.png
---

<h2 class="first">Challenge</h2>

Discover visual indicators that make people comfortable and safe around a robot. Bossa Nova uses a robot to collect data in an environment that anyone can be in: a big box retail store. From <a href="">HRI research</a> we knew the robot needed to communicate a few pieces of information to make it appear predictable and mindful. This work describes the search for those pieces of information and patterns. 

## Natural non-verbal communication

Our robot needs to be polite. Humans are hardwired to predict one another's behavior through subtle cues in movement. When two people approach one another in a hallway, for example, one person will slightly shift towards one side of the hall, indicating to the other person which side of the hall they intend to walk. The two seamlessly pass one another without collision. 

Gaze is also an important factor in human-human interaction because it shows where attention is focused. If a driver makes eye contact with a pedestrian waiting to cross the street, that pedestrian can safely assume the driver is letting him cross. Similarly, if a retail store employee is pushing a wheeled ladder down an aisle, and she makes eye contact with a shopper, the shopper can assume the employee won't hit her with the ladder.

Bossa Nova's human-sized non-humanoid robot doesn't have natural social features, but it still needs to communicate social information to ensure those around it feel safe and comfortable. Many have tried to imitate the power of a gaze by attaching screens with eyes to their robots. We didn't believe the solution was as simple as that for our robot, and we proved it through testing.

## Communicating social information through non-humanoid means

We went through 8 rounds of testing visual indicators for different types of information, such as intent, attention, and acknowledgement. One question often asked by shoppers in our research was, "What is it doing?" We thought adding an image representing the robot's job might answer the question. We printed an image of a map and taped the image to the robot. The test results proved us wrong. Shoppers did not understand the image, and they often didn't even look at it because they were so engrossed by the robot itself.

We then tested a screen with eyes. I mounted an iPad on the robot and had it mirror my laptop. I programmed a pair of eyes to follow my mouse, and the eyes blinked when I clicked on the screen to simulate the robot looking and blinking at people. This also didn't work. There are many distractors in a retail environment, and shoppers did not notice the movement on the screen. They missed the shift of the eyes in their direction, and they didn't see the blink that was acknowledging their presence. 

<figure><img class="image nine columns" src="/assets/img/hri-communication/image-4.JPG"><figcaption class="image nine columns">Quickly iterating on lighting patterns in the office.</figcaption></figure>

We then tested lighting patterns in different configurations. I programmed the lighting patterns in Processing, and then controlled the Processing scripts from my laptop, which wirelessly connected to a Wi-Fi dongle attached to a Raspberry Pi powering a Fadecandy driver. The Fadecandy used the patterns to light up individually addressable Neopixel LEDs. I attached these LEDs to the robot and changed the lighting pattern as the robot moved around. This setup allowed us to test a variety of lighting patterns quickly.

<figure><img class="image nine columns" src="/assets/img/hri-communication/image-1.JPG"><figcaption class="image nine columns">Running Processing scripts on my laptop to control the light patterns on a dummy robot.</figcaption></figure>

We tested these visual indicators in the same way we collected our <a href="">original research data</a>. We asked shoppers a few simple questions about whether they felt the robot knew they were there and what they thought the light patterns meant. We also watched people move around the robot to see whether their movements changed with different light patterns. 

<figure><img class="image six columns" src="/assets/img/hri-communication/image-2.JPG"><img class="image nine columns" src="/assets/img/hri-communication/image-3.JPG"><figcaption class="image nine columns">Testing a lighting configuration on the robot.</figcaption></figure>

Specifics cannot be shared, but overall we tested 10 lighting patterns in three combinations. We also tested sounds the robot could make in response to different triggers. We found a specific sound that calmed shoppers when near the robot, making them feel as though the robot was aware of their presence. More on this later.

As the <a href="">form</a> of the next robot is developed in late 2016, I will continue this project to see how the new shape affects shoppers' interpretation of the lighting patterns.