# UFOs

## Overview of UFO Analysis

In this project, I have been tasked with creating a web app that delivers tabulated UFO sightings data from 1/1/2010-1/13/2010 in the US and Canada. The web app imports UFO sightings data and filters the displayed data with javascript based on user input. The website is designed using bootstrap components and the user-interface incorporates D3 to listen to events and change the displayed webpage accordingly. The web app is currently deployed with Github Pages and can be accessed with the following link: https://chabrian.github.io/UFOs/

## Resources
- Data Sources: data.js
- Software: JavaScript, HTML, CSS, Bootstrap & D3 CDN (content delivery networks) 

## UFO Analysis Results

The deployed webpage contains a header, introductory paragraph, tabular UFO sightings data and a filtering interface. The available filtering options are as follows:
- Date
- City
- State
- Country
- Shape

When search criteria is entered in any of the filtering input fields, the UFO sightings table automatically updates to only include the filtered results. For example, when the date '1/5/2010' is entered into the 'Enter Date' field, the resulting table looks like:

<img width="1413" alt="Screen Shot 2022-03-06 at 8 01 50 PM" src="https://user-images.githubusercontent.com/95327115/156952048-76b33690-74b5-4088-ae49-ad082d21bafe.png">

Furthermore, additional filtering may be applied. When 'nj' is entered into the 'state' field, the table displayed looks like:

<img width="1406" alt="Screen Shot 2022-03-06 at 8 05 06 PM" src="https://user-images.githubusercontent.com/95327115/156952066-b1c35eb2-6522-4544-8ee2-7a17c39029ce.png">

And if we only wanted the 'cigar' shape from these options, entering 'cigar' in the 'shape' field would give us the desired result:

<img width="1408" alt="Screen Shot 2022-03-06 at 8 05 25 PM" src="https://user-images.githubusercontent.com/95327115/156952002-4a7600c0-1744-4412-8801-39a71f7e4135.png">

If we wanted to reset any search criteria, deleting entries from the filter search will also automatically update the table. The following image shows the resulting table when the 'state' criteria is removed.

<img width="1410" alt="Screen Shot 2022-03-06 at 8 21 10 PM" src="https://user-images.githubusercontent.com/95327115/156952148-a7b8aeb4-717a-4bc2-9c6b-7d6d32cb199a.png">

The webpage and table can be reset by clicking the "UFO Sightings" button located the top left corner of the webpage.

## UFO Sightings Summary

The deployed webpage accomplishes the delivery of UFO sightings data from 1/1/2010 to 1/13/2010 with the ability to filter search results based on date, city, state, country, and shape. One drawback of this design is that the filter criteria must match the data values exactly or the results will not display. This could lead to unintended omission of data if the user is not careful. 

To address this issue, one recommendation would be to allow the filtered criteria to ignore case (uppercase/lowercase) and also take in different forms of datetime to ensure all dates are captured. This could be done by modifying the JavaScript function that updates the table. Another recommendation to further develop this webpage is to update the UFO sightings data with a dynamic dataset. The current tabulated data is limited to a static file that only ranges from 1/1/2010 to 1/13/2010. In place of this dataset, an API or webscraping could be used to import updated data on UFO sightings into the webpage. This will allow for a much more functional and compelling webpage.
